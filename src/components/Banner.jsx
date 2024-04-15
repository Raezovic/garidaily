import React from 'react';
import '../styles/Banner.css';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    
    <div className="banner">
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@100..900&family=Rubik+Wet+Paint&display=swap" rel="stylesheet"></link>
        <div className="banner-text">
        <h1>GARIDAILY</h1>
        <p>"Where Dreams come true"</p>
        
      </div>
    </div>
  );
}

export default Banner;