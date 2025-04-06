const mongoose = require("mongoose");
const randomToken = require("../helper/generate");
const accountSchema = mongoose.Schema(
  {
    fullName: String,
    email: String,
    password: String,
    token: {
      type: String,
      default: randomToken.generate(20),
    },
    phone: String,
    avatar: String,
    role_id: String,
    status: String,
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);
const accountModel = mongoose.model("accountModel", accountSchema, "account");
module.exports = accountModel;
