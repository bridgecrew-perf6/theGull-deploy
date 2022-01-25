const { Router } = require("express");
const shopRouter = Router();
const Shop = require("../data/Shop");

shopRouter.get("/", (req, res) => {
  Shop.find({}, (err, allItems) => {
    if (err) console.log(err);
    res.send(allItems);
  });
});

shopRouter.post("/comment", async (req, res) => {
  await Shop.findOneAndUpdate(
    { _id: req.body.id },
    { comments: req.body.comments },
    { new: true }
  );

  res.send("updated!");
});

module.exports = shopRouter;
