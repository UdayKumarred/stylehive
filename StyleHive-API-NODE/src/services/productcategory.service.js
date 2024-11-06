const ProductCategory = require('../models/productcategory.model.js'); // Adjust the path as needed

const createProductCategory = async (categoryData) => {
    try {
        const { categoryID, categoryName, categoryDescription } = categoryData;

        // Check if categoryID already exists
        const isCategoryExist = await ProductCategory.findOne({ categoryID });
        if (isCategoryExist) {
            throw new Error(`Category already exists with ID: ${categoryID}`);
        }

        // Create new ProductCategory document
        const newProductCategory = await ProductCategory.create({ categoryID, categoryName, categoryDescription });
        console.log("ProductCategory created:", newProductCategory);

        return newProductCategory;
    } catch (error) {
        console.log("Error creating ProductCategory:", error.message);
        throw new Error(error.message);
    }
};


module.exports={
    createProductCategory }