const mongoose = require("mongoose");
//const User = require("./user");
const carSchema = new mongoose.Schema(
  {
    carType: { type: String },
    carName: { type: String },
    carColour: { type: String },
    carPrice: { type: Number },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ownerId: { type: mongoose.Schema.Types.ObjectId, ref: "Owner" },
    mechanidId: { type: mongoose.Schema.Types.ObjectId, ref: "Mechanic" },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema);
module.exports = Car;
