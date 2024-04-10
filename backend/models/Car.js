const mongoose = require('mongoose');

// Schema for the nested car objects within the "cars" array
const carDetailsSchema = new mongoose.Schema({
  id: { type: String, required: true },
  model: { type: String, required: true },
  year: { type: Number, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String } // Optional field
});

// Main schema for the top-level car documents
const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  cars: [carDetailsSchema] // Array of nested car objects
});

// Create a model from the schema
const Car = mongoose.model('Car', carSchema, 'gari'); // Assuming collection name is "gari"

module.exports = Car;
