const { Router } = require("express");
const shopRouter = Router();
const Shop = require("../data/Shop");

shopRouter.get("/", (req, res) => {
  Shop.find({}, (err, allItems) => {
    if (err) console.log(err);
    res.send(allItems);
  });
});

module.exports = shopRouter;
