var slug = require("mongoose-slug-updater");
const mongoose = require("mongoose");
mongoose.plugin(slug);
const ProductCategorySchema = mongoose.Schema(
  {
    title: String,
    parent_id: {
      type: String,
      default: "",
    },
    description: String,
    thumbnail: String,
    status: String,
    position: Number,
    deleted: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      slug: ["title"],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const ProductCategory = mongoose.model(
  "ProductCategory",
  ProductCategorySchema,
  "product-categorys"
);

module.exports = ProductCategory;
