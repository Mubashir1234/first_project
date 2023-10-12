var mongoose = require("mongoose");

const hotelSchema = mongoose.Schema({
  data: {
    q: String,
    rid: String,
    rc: String,
    sr: { type: [] },
  },
});

const Hotel = mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
