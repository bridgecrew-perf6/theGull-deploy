const { Router } = require("express");
const authRouter = Router();
const passport = require("passport");
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
      await passport.authenticate("local");

      res.status(200).send("User Registered");
    }
  });
});

authRouter.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

authRouter.get("/logout", (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("Logged out");
});

authRouter.get("/userInfo", (req, res) => {
  res.send(req.user);
});

module.exports = authRouter;
