const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Car = require('./models/Car');
const SubmissionModel = require('./models/SubmissionModel');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3001;
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'paulsedwin8@gmail.com', // Your Gmail email address
    pass: 'iyyz sgmx lxzf ccas' // Your Gmail password
  }
});

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://raezovic:chocolatesteak5395@cluster1.j7fxzwc.mongodb.net/test', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Error connecting to MongoDB:', err));
app.get('/api/gari', async (req, res) => {
  try {
    // Extract query parameters
    const { make, model, minPrice, maxPrice } = req.query;

    console.log('Query Parameters:', req.query); // Log query parameters

    // Construct filter object based on query parameters
    const filter = {};
    if (make) filter['make'] = make;
    if (model) {
      filter['cars.model'] = model;
    }
    if (minPrice && maxPrice) {
      filter['cars.price'] = { $gte: parseInt(minPrice), $lte: parseInt(maxPrice) };
    }

    // Search for cars based on the constructed filter
    let cars = await Car.find(filter);

    // If a specific model is provided, filter the cars array within the make
    if (model) {
      cars = cars.map(car => ({
        ...car.toObject(),
        cars: car.cars.filter(car => car.model === model)
      }));
    }

    // Log fetched cars
    console.log('Fetched Cars:', cars);

    // Send the fetched data as JSON response
    res.json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    let errorMessage = 'Error fetching cars.';
    if (error.name === 'MongoError') {
      errorMessage = 'Database error occurred.';
    } else if (error.name === 'CastError') {
      errorMessage = 'Invalid filter criteria provided.';
    }
    res.status(500).json({ message: errorMessage });
  }
});


// Backend - Express route to handle form submissions
app.post('/api/submitForm', async (req, res) => {
  try {
    const { name, number, email, selectedCar } = req.body; // Extract selectedCar from request body

    if (!selectedCar) {
      return res.status(400).json({ message: 'Selected car details are missing' });
    }

    // Ensure that selectedCar has necessary properties
    if ( !selectedCar.model || !selectedCar.year || !selectedCar.price) {
      return res.status(400).json({ message: 'Invalid selected car details' });
    }
    // Create a new document using your Mongoose model and save it to the database
    const newSubmission = new SubmissionModel({ name, number, email, selectedCar });
    await newSubmission.save();

    // Construct message for the email confirmation
    const message = `Dear ${name},\n\nThank you for choosing GariDaily for your car inquiry.\n We are delighted to inform you that we have received your details and will promptly process your request. Our team is dedicated to providing you with exceptional service and ensuring your car selection experience is seamless and enjoyable.\n\nSelected Car Details:\nModel: ${selectedCar.model}\nYear: ${selectedCar.year}\nPrice: ${selectedCar.price}\n\nShould you have any further questions or require assistance, please do not hesitate to contact us. We are here to help you every step of the way.\n\nBest regards,\nThe GariDaily Team`;

    // Send an email to the user
    const mailOptions = {
      from: 'paulsedwin8@gmail.com',
      to: email,
      subject: 'Car inquiry Confirmation',
      text: message
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
