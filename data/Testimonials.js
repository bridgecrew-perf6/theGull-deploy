const mongoose = require("mongoose");

const TestimonialsSchema = new mongoose.Schema(
  {
    id: { type: String },
    avatar: { type: String },
    text: { type: String },
    name: { type: String },
  },
  { collection: "testimonials" }
);

module.exports = mongoose.model("Testimonials", TestimonialsSchema);
