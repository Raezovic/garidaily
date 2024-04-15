
import React, { useState } from 'react';
import Banner from '../components/Banner';
import Search from '../components/Search';
import CarsList from '../components/Carslist';
import ParentComponent from '../components/ParentComponent';

const Home = () => {

  const [searchResults, setSearchResults] = useState([]);

  // Handle search function
  const handleSearch = (filteredCars) => {
    setSearchResults(filteredCars);
  };

  return (
    <div>
      <Banner />
      {/* Pass handleSearch function as prop to the Search component */}
      <Search onSearch={handleSearch} />
      {/* Pass searchResults as prop to the CarsList component */}
      <ParentComponent />
      <CarsList searchResults={searchResults} />
      
    </div>
  );
};

export default Home;
