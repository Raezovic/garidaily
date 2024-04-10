import React from 'react';
import '../styles/Brands.css';
import Audi from '../Images/carlogos/Audi.png';
import BMW from '../Images/carlogos/BMW.png';
import Ford from '../Images/carlogos/Ford.png';
import Honda from '../Images/carlogos/Honda.png';
import Lexus from '../Images/carlogos/Lexus.png';
import Mazda from '../Images/carlogos/Mazda.png';
import Merc from '../Images/carlogos/Mercedes-Benz.png';
import Mitsubishi from '../Images/carlogos/Mitsubishi.png';
import nissan from '../Images/carlogos/nissan.png';
import Peugeot from '../Images/carlogos/Peugeot.png';
import Porsche from '../Images/carlogos/Porsche.png';
import Suzuki from '../Images/carlogos/Suzuki.png';
import Toyota from '../Images/carlogos/Toyota.png';
import Volkswagen from '../Images/carlogos/Volkswagen.png';

const Brands = () => {
  return (
    <div className="brands-container">
      <div className="brands-row">
        <img src={Porsche} alt="Brand 1" className="brand-logo big-logo" />
        <img src= {Merc} alt="Brand 2" className="brand-logo big-logo" />
        <img src= {Lexus} alt="Brand 3" className="brand-logo big-logo" />
        <img src= {Toyota} alt="Brand 4" className="brand-logo big-logo" />
        <img src= {BMW} alt="Brand 4" className="brand-logo big-logo" />
      </div>
      <div className="brands-row">
        <img src= {Suzuki} alt="Brand 5" className="brand-logo small-logo" />
        <img src= {Mazda} alt="Brand 6" className="brand-logo small-logo" />
        <img src= {Mitsubishi} alt="Brand 7" className="brand-logo small-logo" />
        <img src= {Audi} alt="Brand 8" className="brand-logo small-logo" />
        <img src= {nissan} alt="Brand 8" className="brand-logo small-logo" />
      </div>
      <div className="brands-row">
        <img src= {Volkswagen} alt="Brand 9" className="brand-logo tiny-logo" />
        <img src= {Honda} alt="Brand 10" className="brand-logo tiny-logo" />
        <img src={Ford} alt="Brand 11" className="brand-logo tiny-logo" />
        <img src={Peugeot} alt="Brand 11" className="brand-logo tiny-logo" />
      </div>
    </div>
  );
};

export default Brands;
