const mongoose = require('mongoose');

// Define the schema for form submissions
const SubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  selectedCar: {
    model: String,
    year: Number,
    price: Number
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Create and export the Submission model
const SubmissionModel = mongoose.model('Submission', SubmissionSchema);

module.exports = SubmissionModel;
