const mongoose = require("mongoose");

const ProductCategorySchema = new mongoose.Schema({
  categoryID: {
    type: Number,
    required: true,
    unique: true
  },
  categoryName: {
    type: String,
    required: true,
  },
  categoryDescription: {
    type: String,
    required: true,
  },
});

const ProductCategory = mongoose.model('productCategories', ProductCategorySchema);

module.exports = ProductCategory;
