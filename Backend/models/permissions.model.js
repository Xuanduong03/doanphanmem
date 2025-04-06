const mongoose = require("mongoose");
const permissionSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    permissions: {
      type: Array,
      default: [],
    },
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: String,
  },
  {
    timestamps: true,
  }
);

const permission = mongoose.model("permission", permissionSchema, "permission");
module.exports = permission;
