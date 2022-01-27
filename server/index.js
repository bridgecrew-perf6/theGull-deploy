const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config();
const cors = require("cors");
const authRouter = require("./routes/auth");
const shopRouter = require("./routes/shop");
const testimonialsRouter = require("./routes/testimonials");
const User = require("./data/User");
const cookieParser = require("cookie-parser");

const {
  PORT,
  CLIENT_URL,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
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
app.use(cookieParser());
app.use(express.static("public"));

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
      User.findOne({ email: profile._json.email }, async (err, user) => {
        if (err) return cb(err, null);

        if (!user) {
          const newUser = new User({
            username: profile.name.givenName,
            email: profile.emails[0].value,
            isAdmin: false,
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
  new LocalStrategy((email, password, cb) => {
    User.findOne({ email }, async (err, user) => {
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
    if (!err) return cb(null, user);
    return cb(err, null);
  });
});

app.use("/auth", authRouter);
app.use("/shop", shopRouter);
app.use("/testimonials", testimonialsRouter);

app.listen(PORT, () => console.log(`🚀 Server is running on port: ${PORT}`));
