const mongoose = require("mongoose");

const ZipCodeSchema = new mongoose.Schema({
  zipCodeID: {
    type: Number,
    required: true,
    unique: true
  },
  zipCode: {
    type: String,
    required: true,
  },
  zipCodeDescription: {
    type: String,
    required: true,
  },
});

const ZipCode = mongoose.model('zipcodes', ZipCodeSchema);

module.exports = ZipCode;
