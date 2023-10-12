const mongoose = require("mongoose");

const mechanicSchema = mongoose.Schema(
  {
    mechanicName: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    carDetails: { type: mongoose.Schema.Types.ObjectId, ref: "Car" },
    issues: [String],
    invoices: { type: [] },
    isCar: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Mechanic = mongoose.model("mechanic", mechanicSchema);

module.exports = Mechanic;
