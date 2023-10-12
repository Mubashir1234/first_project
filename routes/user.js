var express = require("express");
var router = express.Router();
var app = express();
var {
  registration,
  login,
  forgotPassword,
  verification,
} = require("../controller/userRegistration.js");
var { authentication } = require("../middleware/jwtautht.js");

// router.get("/", (req, res) => {
//   res.send("hello world");
//   next();
// });
router.post("/register", registration);
router.get("/verify/:id", verification);
router.post("/login", login);

router.put("/forgot-password", authentication, forgotPassword);

module.exports = router;
