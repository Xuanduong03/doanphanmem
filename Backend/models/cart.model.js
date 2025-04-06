const mongoose = require("mongoose");
const cartSchema = mongoose.Schema(
  {
    user_id: String,
    products: [
      {
        product_id: String,
        quantity: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);
const cartsModel = mongoose.model("cartsModel", cartSchema, "carts");
module.exports = cartsModel;
