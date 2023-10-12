var express = require("express");
var router = express.Router();
var app = express();
var { authentication } = require("../middleware/jwtautht.js");

var { carDetails } = require("../controller/mechanicCars");

router.post("/mecahnicCarDetails", authentication, carDetails);

module.exports = router;
