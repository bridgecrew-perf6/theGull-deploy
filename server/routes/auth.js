const passport = require("passport");
const { Router } = require("express");
const authRouter = Router();

const { CLIENT_URL } = process.env;

// Google Auth Page
authRouter.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
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

module.exports = authRouter;
