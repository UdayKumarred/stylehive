const ZipCode = require('../models/zipcode.model.js'); // Adjust the path as needed

const createZipCode = async (zipCodeData) => {
    try {
        const { zipCodeID, zipCode, zipCodeDescription } = zipCodeData;

        // Check if zipCodeID already exists
        const isZipCodeExist = await ZipCode.findOne({ zipCodeID });
        if (isZipCodeExist) {
            throw new Error(`Zip code already exists with ID: ${zipCodeID}`);
        }

        // Create new ZipCode document
        const newZipCode = await ZipCode.create({ zipCodeID, zipCode, zipCodeDescription });
        console.log("ZipCode created:", newZipCode);

        return newZipCode;
    } catch (error) {
        console.log("Error creating ZipCode:", error.message);
        throw new Error(error.message);
    }
};

module.exports={
    createZipCode}
