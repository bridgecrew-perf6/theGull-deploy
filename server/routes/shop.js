const { Router } = require("express");
const shopRouter = Router();
const Shop = require("../data/Shop");

shopRouter.get("/bicycles", (req, res) => {
  Shop.find({}, (err, allBicycles) => {
    if (err) console.log(err);
    res.send(allBicycles);
  });
});

module.exports = shopRouter;
