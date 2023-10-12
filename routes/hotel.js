var express = require("express");
var app = express();
var router = express.Router();
var hotelInfo = require("../controller/hotel.js");

router.get("/hotel-data", hotelInfo);

module.exports = router;
