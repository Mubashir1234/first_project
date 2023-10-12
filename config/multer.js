const multer = require("multer");

//to upload multiple files in one field use upload.arraya('field name', number of files from one field )
// const upload = multer({ dest: "upload/" });

// Multiple fields file upload
// const cpUpload = upload.fields([
//   { name: "avatar", maxCount: 1 },
//   { name: "gallery", maxCount: 8 },
// ]);

var storage = multer.memoryStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    // console.log(uniqueSuffix);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

var upload = multer({ storage: storage });

module.exports = { upload };
