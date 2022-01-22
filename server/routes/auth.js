const passport = require("passport");
const { Router } = require("express");
const authRouter = Router();
const bcrypt = require("bcrypt");
const User = require("../data/User");

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
  req.session.destroy();
  res.send("Logged out");
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
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        isAdmin: false,
      });
      await newUser.save();
      res.status(200).send("Registered User");
    }
  });
});

authRouter.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

module.exports = authRouter;
