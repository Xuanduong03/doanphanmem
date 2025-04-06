const mongoose = require("mongoose");
const randomToken = require("../helper/generate");
const userSchema = mongoose.Schema(
  {
    fullName: String,
    email: String,
    password: String,
    tokenUser: {
      type: String,
      default: randomToken.generate(20),
    },
    phone: String,
    avatar: String,
    friendList: [
      {
        user_id: String,
        rom_chat_id: String,
      },
    ],
    requestFriends: Array,
    acceptFriends: Array,
    status: {
      type: String,
      default: "active",
    },
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
const userModel = mongoose.model("userModel", userSchema, "user");
module.exports = userModel;
