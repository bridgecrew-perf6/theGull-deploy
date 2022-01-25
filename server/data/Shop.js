const mongoose = require("mongoose");

const ShopSchema = new mongoose.Schema(
  {
    id: { type: String },
    category: { type: String },
    image: { type: String },
    name: { type: String },
    price: { type: Number },
    comments: { type: Array },
    description: { type: String },
  },
  { collection: "shop" }
);

module.exports = mongoose.model("Shop", ShopSchema);
