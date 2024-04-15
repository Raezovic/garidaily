import React from 'react';
import '../styles/Dealers.css'; // Import CSS file for styling
import dealer1 from '../Images/car.png';
import dealer2 from '../Images/maintenance.png';
import dealer3 from '../Images/car2.png';

const Dealers = () => {
  return (
    <div className="dealers-container">
      <h2>Our Dealers</h2>
      <div className="dealer">
        <img src= {dealer1} alt="Dealer 1" />
        <div className="dealer-info">
          <h3>Dealer 1</h3>
          
        </div>
      </div>
      <div className="dealer">
        <img src= {dealer2} alt="Dealer 2" />
        <div className="dealer-info">
          <h3>Dealer 2</h3>
          
        </div>
      </div>
      <div className="dealer">
        <img src= {dealer3} alt="Dealer 3" />
        <div className="dealer-info">
          <h3>Dealer 3</h3>
          
        </div>
      </div>
    </div>
  );
};

export default Dealers;
