import React from 'react';
import CarsList from '../components/Carslist'; // Import the CarsList component
import Search from '../components/Search';

const Cars = () => {
  return (
    <div>
      <Search />

      <CarsList /> {/* Render the CarsList component */}
    </div>
  );
};

export default Cars;
