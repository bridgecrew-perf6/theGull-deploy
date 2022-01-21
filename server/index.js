const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
require("dotenv").config();
const cors = require("cors");
const authRouter = require("./routes/auth");
const User = require("./data/User");

const {
  PORT,
  CLIENT_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  MONGODB_URL,
} = process.env;

const app = express();

mongoose.connect(
  MONGODB_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("mongoose connection successful");
  }
);

app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    // cookie: {
    //   sameSite: "none",
    //   secure: true,
    // },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOne({ googleId: profile.id }, async (err, user) => {
        if (err) return cb(err, null);

        if (!user) {
          const newUser = new User({
            googleId: profile.id,
            username: profile.name.givenName,
            email: profile.emails[0].value,
          });

          await newUser.save();
          return cb(null, newUser);
        }
        return cb(null, user);
      });
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    (accessToken, refreshToken, profile, cb) => {
      User.findOne({ githubId: profile.id }, async (err, user) => {
        if (err) return cb(err, null);

        if (!user) {
          const newUser = new User({
            githubId: profile.id,
            username: profile.username,
          });

          await newUser.save();
          return cb(null, newUser);
        }
        return cb(null, user);
      });
    }
  )
);

passport.use(
  new LocalStrategy((username, password, cb) => {
    User.findOne({ username }, async (err, user) => {
      if (err) throw err;
      if (!user) return cb(null, false);

      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result) return cb(null, user);
        else return cb(null, false);
      });
    });
  })
);

passport.serializeUser((user, cb) => {
  return cb(null, user._id);
});

// The return value is what we send to the client through req.user
passport.deserializeUser((id, cb) => {
  User.findById(id, (err, user) => {
    return cb(null, user);
  });
});

app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`🚀 Server is running on port: ${PORT}`));
