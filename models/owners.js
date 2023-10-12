const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    ownerName: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    ownerCars: { type: mongoose.SchemaType.ObjectId, ref: "Car" },
  },
  { timestamps: true }
);

const Owner = mongo.model("Owner", ownerSchema);
module.export = Owner;
