import React, { useState } from 'react';
import Search from './Search';
import axios from 'axios';
import '../styles/ParentComponent.css';

const ParentComponent = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchData, setSearchData] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    email: ''
  });
  const [showForm, setShowForm] = useState(false);

  const handleSearch = (filteredCars, searchDataObject) => {
    setSearchResults(filteredCars);
    setSearchData(searchDataObject);
    console.log('Search Results in Parent:', filteredCars);
    console.log('Search Data in Parent:', searchDataObject);
  };

  const handleCarSelect = (car) => {
    setSelectedCar(car);
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  return (
    <div className="parent-container">
      <h1>Car Search</h1>
      <Search onSearch={handleSearch} />
      {searchResults.length > 0 && (
        <div className="search-results-container">
          <h2>Search Results</h2>
          {searchResults.map((make) => (
            <div key={make._id} className='make-container'>
              <h3>{make.make}</h3>
              {make.cars.map((car) => (
                <div key={car.id} className="car-details">
                  <p>Model: {car.model}</p>
                  <p>Year: {car.year}</p>
                  <p>Price: ${car.price}</p>
                  {car.imageUrl && <img src={car.imageUrl} alt={car.model} className="car-image" />}
                  <button onClick={() => handleCarSelect(car)}>Select Car</button>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      {showForm && selectedCar && (
        <div className="selected-car-form">
          <h2>Selected Car</h2>
          <p>Model: {selectedCar.model}</p>
          <p>Year: {selectedCar.year}</p>
          <p>Price: ${selectedCar.price}</p>
          <h2>Enter Your Details</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} required />
            <input type="text" name="number" placeholder="Phone Number" value={formData.number} onChange={handleInputChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ParentComponent;
