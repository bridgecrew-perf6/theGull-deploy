const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    required: false,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    type: String,
  },
  googleId: {
    required: false,
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  cart: {
    type: Array,
  },
  isAdmin: {
    required: true,
    type: Boolean,
  },
});

module.exports = mongoose.model("User", UserSchema);
