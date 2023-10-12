var express = require("express");
var router = express.Router();
var app = express();

var movie = require("../controller/movieData");

router.get("/movie-data/", movie);

module.exports = router;
