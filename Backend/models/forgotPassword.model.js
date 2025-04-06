const mongoose = require("mongoose");
const randomToken = require("../helper/generate");
const forgotPasswordSchema = mongoose.Schema(
  {
    email: String,
    otp: String,
    expireAt: {
      type: Date,
      expires: 180,
    },
  },
  {
    timestamps: true,
  }
);
const forgotModel = mongoose.model(
  "forgotModel",
  forgotPasswordSchema,
  "forgot-password"
);
module.exports = forgotModel;
