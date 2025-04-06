var slug = require("mongoose-slug-updater");
const mongoose = require("mongoose");
mongoose.plugin(slug);
const productSchema = mongoose.Schema({
  title: String,
  product_category_id: {
    type: String,
    default: "",
  },
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  featured: String,
  deleted: {
    type: Boolean,
    default: false,
  },
  slug: {
    type: String,
    slug: ["title"],
    unique: true,
  },
  createdBy: {
    account_id: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  deletedBy: {
    account_id: String,
    deletedAt: Date,
  },
  updatedBy: [
    {
      account_id: String,
      updatedAt: Date,
    },
  ],
});

const Product = mongoose.model("Product", productSchema, "products");
module.exports = Product;
