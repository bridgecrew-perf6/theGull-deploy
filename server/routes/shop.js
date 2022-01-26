const { Router } = require("express");
const shopRouter = Router();
const Shop = require("../data/Shop");
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");

// Multer package makes it possible to post files to
// be served in the server and computer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

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

// Middleware to check if the form is correct
const formValidation = (req, res, next) => {
  if (!req.body.category || !req.body.description) {
    return res.status(400).send("Include title and description of the video");
  } else {
    next();
  }
};

shopRouter.post(
  "/upload",
  upload.single("thumbnail"),
  formValidation,
  async (req, res) => {
    // Check if an image was sent as part of the form data
    const previewImage = req.file
      ? `images/${req.file.originalname}`
      : "images/upload.jpg";

    const newProduct = new Shop({
      category: req.body.category,
      image: `${process.env.SERVER_URL}/${previewImage}`,
      description: req.body.description,
      timestamp: Date.now(),
      comments: [],
      price: 10,
      id: uuidv4(),
      name: "Adamlar",
    });

    await newProduct.save();

    res.status(201).send("Uploaded!");
  }
);

module.exports = shopRouter;
