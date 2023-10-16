var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
require("dotenv").config();
var { reminderEmail } = require("./config/emailSender");
const cron = require("node-cron");
const multer = require("multer");
//const upload = multer({ dest: "uploads/" });

var indexRouter = require("./routes/index");
const User = require("./models/user");
//const { forEach } = require("lodash");
//var carsRouter = require("./routes/index");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});
app.get("/photo", (req, res) => {
  res.sendFile(path.join(__dirname, "image.html"));
});

app.use("/", indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next();
});

// error handler
app.use("/", function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const uri = "mongodb://localhost:27017/test";
mongoose.set("strictQuery", false);
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("MongoDB Connected"))
  .catch((error) => console.log(error.message));

async function run() {
  let id;
  let email;
  let isActive;
  const query = { isActive: false };
  const value = await User.find(query).select("email id isActive");
  console.log(value);
  value.forEach((element) => {
    id = element.id;
    email = element.email;
    isActive = element.isActive;
  });
  if (isActive === false) {
    cron.schedule("*/15 * * * * *", () => {
      {
        reminderEmail(email, id);
      }
      //console.log(id);
    });
  }
}
run();
module.exports = app;

// first commit & first push

// newBranch code
// thirdbranch code
