import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Import CSS for styling (create this file if not exists)
import logo from '../Images/garidaily.png'; // Import your logo image

const Navbar = () => {
  return (
    <div className="navbar">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@100..900&family=Rubik+Wet+Paint&display=swap" rel="stylesheet"></link>
      <div className="navbar-left">
        {/* Your logo goes here */}
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="navbar-right">
        {/* Navigation buttons */}
        <Link to="/" className="nav-button">Home</Link>
        
        <Link to="/dealers" className="nav-button">Dealers</Link>
      </div>
    </div>
  );
};

export default Navbar;

