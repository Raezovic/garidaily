import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CarsList.css'; // Import CSS file for styling

const CarsList = ({ searchResults }) => {
  const [cars, setCars] = useState([]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: ''
  });
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/gari');
        setCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
    fetchCars();
  }, []); // Fetch cars only when the component mounts

  useEffect(() => {
    // Update cars state with search results when searchResults changes
    if (searchResults && searchResults.length > 0) {
      setCars(searchResults);
    }
  }, [searchResults]); // Fetch cars when searchResults changes

  console.log('CarsList - searchResults:', searchResults);

  const handleButtonClick = (car) => {
    
    setSelectedCar({ ...car });
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Frontend - Form submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataWithCar = { ...formData, selectedCar }; // Include selectedCar in the form data
      await axios.post('http://localhost:3001/api/submitForm', formDataWithCar); // Send the form data with selectedCar
      // Reset form data and hide form after successful submission
      setFormData({ name: '', number: '', email: '' });
      setShowForm(false);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.');
    }
  };
  


  const handleClose = () => {
    setShowForm(false);
    setSelectedCar(null);
  };

  return (
    <div className="card-container">
      {cars.map((make) => (
        <div key={make._id} className="make-container">
          <h2>{make.make}</h2>
          <div className="cars">
            {make.cars.map((car) => (
              <div key={car.id} className="card">
                <h3>{car.model}</h3>
                
                <img src={car.imageUrl} alt={car.model} />
                <p>Year: {car.year}</p>
                <p>Price: ${car.price}</p>
                <button className="submit-btn" onClick={() => handleButtonClick(car)}>Select</button>
              </div>
            ))}
          </div>
        </div>
      ))}
      {showForm && selectedCar && (
        <div className="selected-car-form">
          <button className="close-btn" onClick={handleClose}>Close</button>
          <h2>Selected Car</h2>
          <img src={selectedCar.imageUrl} alt={selectedCar.model} />
          <p>Model: {selectedCar.model}</p>
          <p>Year: {selectedCar.year}</p>
          <p>Price: ${selectedCar.price}</p>
          <h2>Enter Your Details</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
            <input type="text" name="number" placeholder="Phone Number" value={formData.number} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
            <button  className="submit-btn-form" type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CarsList;
