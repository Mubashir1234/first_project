var express = require("express");
var app = express();
var router = express.Router();
var { uploadImages } = require("../controller/uploadimage.js");
var { upload } = require("../config/multer.js");

router.post("/upload", upload.single("image"), uploadImages);

module.exports = router;
