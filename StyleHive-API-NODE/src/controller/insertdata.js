const mongoose = require('mongoose');
const { createZipCode } = require('../services/zipcode.service.js');  // Adjust the path
const { createProductCategory } = require('../services/productcategory.service.js');  // Adjust the path

// MongoDB connection string
// const mongoURI = connectDb;  // Replace with your MongoDB URI
const mongoURI = "mongodb+srv://saivyshnavananthula:s2zU27JMEV7Me9er@cluster0.8dzdg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Establish MongoDB connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(async () => {
        console.log("MongoDB connected");

        // Directly calling functions to insert data
        try {
            // Inserting ZipCode data
            await createZipCode({ zipCodeID: 1, zipCode: "10001", zipCodeDescription: "New York, NY – Lower Manhattan area" });
            await createZipCode({ zipCodeID: 2, zipCode: "20001", zipCodeDescription: "Washington, DC – Central city area" });
            await createZipCode({ zipCodeID: 3, zipCode: "94101", zipCodeDescription: "San Francisco, CA – Downtown area" });
            await createZipCode({ zipCodeID: 4, zipCode: "30301", zipCodeDescription: "Atlanta, GA – Central city area" });
            await createZipCode({ zipCodeID: 5, zipCode: "77001", zipCodeDescription: "Houston, TX – Downtown area" });
            await createZipCode({ zipCodeID: 6, zipCode: "90001", zipCodeDescription: "Los Angeles, CA – South LA area" });
            await createZipCode({ zipCodeID: 7, zipCode: "60601", zipCodeDescription: "Chicago, IL – Loop area" });
            await createZipCode({ zipCodeID: 8, zipCode: "48201", zipCodeDescription: "Detroit, MI – Midtown area" });


            // Inserting Product Category data
            await createProductCategory({ categoryID: 1, categoryName: "Tops", categoryDescription: "Women's tops including blouses, shirts, and tunics" });
            await createProductCategory({ categoryID: 2, categoryName: "Dresses", categoryDescription: "Women's dresses, evening gowns, and more" });
            await createProductCategory({ categoryID: 3, categoryName: "T-Shirts", categoryDescription: "Casual t-shirts for men and women" });
            await createProductCategory({ categoryID: 4, categoryName: "Sarees", categoryDescription: "Traditional Indian attire for women" });
            await createProductCategory({ categoryID: 5, categoryName: "Lehenga", categoryDescription: "Traditional Indian wear for weddings and festivals" });
            await createProductCategory({ categoryID: 6, categoryName: "Men's Kurti", categoryDescription: "Traditional kurti designs for men" });


            console.log("Data inserted successfully");
        } catch (error) {
            console.error("Error inserting data:", error.message);
        }

        // Close the connection after insertion
        mongoose.connection.close();
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err.message);
    });
