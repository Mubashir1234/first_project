const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: String,
  titleType: {
    text: String,
    id: String,
  },
  titleText: {
    text: String,
  },
  releaseYear: {
    year: Number,
  },
  releaseDate: {
    day: Number,
    month: Number,
    year: Number,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
