const { stubFalse } = require("lodash");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    profileImageUrl: { type: String, default: "" },
    email: { type: String, required: true },
    password: { type: String },
    address: {
      streetAddress: String,
      city: String,
      country: String,
      countryShortName: String,
      zip: String,
      countryCode: String,
    },
    phone: { type: String },
    age: { type: Number },
    role: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    isActive: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
