import '../styles/Search.css';
import React, { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import axios from 'axios';

const Search = ({ onSearch }) => {
  const [cars, setCars] = useState([]);
  const [selectedMake, setSelectedMake] = useState('');
  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [priceRange, setPriceRange] = useState([0, 24000]); // Adjusted the max price value
  const [yearOptions, setYearOptions] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/gari');
        setCars(response.data); // Update cars state with the fetched data
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
    fetchCars();
  }, []);

  const handleMakeChange = (make) => {
    setSelectedMake(make);
    const makeData = cars.find(c => c.make === make);
    setModels(makeData ? makeData.cars.map(car => car.model) || [] : []);
    setSelectedModel('');
    setSelectedYear('');
    setYearOptions([]);
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
    const makeData = cars.find(c => c.make === selectedMake);
    const carData = makeData ? makeData.cars.find(car => car.model === model) : null;
    setYearOptions(carData ? [carData.year] : []);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get('http://localhost:3001/api/gari', {
        params: {
          model: selectedModel,
          minPrice: priceRange[0],
          maxPrice: priceRange[1]
        }
      });

      const searchData = {
        make: selectedMake,
        model: selectedModel,
        year: selectedYear
      };

      if (typeof onSearch === 'function') {
        onSearch(response.data, searchData);
      } else {
        console.error('onSearch prop is not a function in Search component');
      }
    } catch (error) {
      console.error('Error fetching cars:', error);
    }
  };

  return (
    <div className="search-section">
      <select
        value={selectedMake}
        onChange={(e) => handleMakeChange(e.target.value)}
        className="search-input"
      >
        <option value="">Select Car</option>
        {cars.map((car) => (
          <option key={car.id} value={car.make}>{car.make}</option>
        ))}
      </select>

      <select
        value={selectedModel}
        onChange={(e) => handleModelChange(e.target.value)}
        className="search-input"
        disabled={!selectedMake}
      >
        <option value="">Select Model</option>
        {models.map((model, index) => (
          <option key={index} value={model}>{model}</option>
        ))}
      </select>

      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="search-input"
        disabled={!selectedModel}
      >
        <option value="">Select Year</option>
        {yearOptions.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
      <div className="price-range-container">
        <div className="price-range-labels">
          <span>{priceRange[0]}</span>
          <span>{priceRange[1]}</span>
        </div>
        <Slider
          min={0}
          max={24000} // Adjusted the max value according to your requirements
          value={priceRange}
          onChange={setPriceRange}
          className="price-range-slider"
          range
        />
      </div>
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
