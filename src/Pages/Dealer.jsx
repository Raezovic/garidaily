import React from 'react';
import Dealers from '../components/Dealers'; // Import the CarsList component
import Brands from '../components/Brands';

const Cars = () => {
  return (
    <div>
      
      <Dealers /> {/* Render the CarsList component */}
      <Brands />
    </div>
  );
};

export default Cars;
