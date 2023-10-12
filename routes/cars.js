var express = require("express");
var router = express.Router();
var app = express();
var { authentication } = require("../middleware/jwtautht.js");
const {
  carsentry,
  affiliatecarbyuser,
  affiliatecar,
  advanceSearchCar,
  advanceSearchCarWithQueryParameter,
  carEdit,
} = require("../controller/ownerCars");

router.post("/addCars", authentication, carsentry);
router.post("/Affiliatecarbyuser", authentication, affiliatecarbyuser);
router.get("/Affiliatecar/:carId", authentication, affiliatecar);
router.get(
  "/advanceSearchCar/:carColour/:carName",
  authentication,
  advanceSearchCar
);
router.get(
  "/advanceSearchCarWithQueryParameter",
  authentication,
  advanceSearchCarWithQueryParameter
);
router.put("/editcar/:id", authentication, carEdit);

module.exports = router;
