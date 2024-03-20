import React from 'react';
import '../styles/Search.css'; // Import CSS for styling (create this file if not exists)

const Search = () => {
  return (
    <div className="search-section">
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@100..900&family=Rubik+Wet+Paint&display=swap" rel="stylesheet"></link>
      
      <input type="text" placeholder="Car" className="search-input" />
      <input type="number" placeholder="Year" className="search-input" />
      <input type="text" placeholder="Price Range" className="search-input" />
      <button className="search-button">Search</button>
    </div>
  );
};

export default Search;
