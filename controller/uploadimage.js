const { errorMonitor } = require("events");
var express = require("express");
var app = express();

async function uploadImages(err, req, res) {
  //console.log(err);
  console.log("Hello");
  const file = req.file;
  console.log(file);
}

module.exports = { uploadImages };

//hello
