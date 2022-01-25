const { Router } = require("express");
const testimonialsRouter = Router();
const Testimonials = require("../data/Testimonials");

testimonialsRouter.get("/", (req, res) => {
  Testimonials.find({}, (err, allItems) => {
    if (err) console.log(err);
    res.send(allItems);
  });
});

module.exports = testimonialsRouter;
