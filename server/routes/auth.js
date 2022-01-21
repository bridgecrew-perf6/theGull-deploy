const passport = require("passport");
const { Router } = require("express");
const authRouter = Router();
const User = require("../data/User");
const bcrypt = require("bcrypt");

const { CLIENT_URL } = process.env;

// Google Auth Page
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["email", "profile"] })
);

authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: `${CLIENT_URL}/signin` }),
  (_req, res) => {
    res.redirect(CLIENT_URL);
  }
);

// Github Auth Page
authRouter.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

authRouter.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: `${CLIENT_URL}/signin` }),
  (_req, res) => {
    res.redirect(CLIENT_URL);
  }
);

authRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

authRouter.get("/userInfo", (req, res) => {
  res.send(req.user);
});

// Local Auth
authRouter.post("/register", (req, res) => {
  const { username, email, password } = req.body;

  User.findOne({ email }, async (err, user) => {
    if (err) throw err;
    if (user) res.send("User already exists");
    else {
      const hashedPassword = await bcrypt.hash(password, 5);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      res.send("User created");
    }
  });
});

authRouter.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) throw err;
    if (!user) res.send("User not found");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        console.log(req.user);
        res.redirect(CLIENT_URL);
      });
    }
  })(req, res, next);
});

module.exports = authRouter;
