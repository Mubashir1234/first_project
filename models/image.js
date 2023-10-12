const mongoose = require("mongoose");

const imageSchema = mongoose.Schema({
  data: String,
});

const Image = mongoose.model("Image", imageSchema);
module.exports = { Image };
