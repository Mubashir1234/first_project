var express = require("express");
var router = express.Router();
var router1 = express.Router();
var app = express();
const userRoutes = require("./user");
const carsRoutes = require("./cars");
const mechanicRoutes = require("./mechanic");
const movieRoutes = require("./movie");
const hotelRoutes = require("./hotel");
const uploadRoutes = require("./upload");
app.use("/", hotelRoutes);
app.use("/", movieRoutes);
app.use("/", userRoutes);
app.use("/", carsRoutes);
app.use("/", mechanicRoutes);
app.use("/", uploadRoutes);

module.exports = app;
