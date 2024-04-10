import React from 'react';

const SearchResults = ({ filteredCars }) => {
  return (
    <div className="search-results">
      <h2>Search Results</h2>
      <ul>
        {filteredCars && filteredCars.map((car) => (
          <li key={car.id}>
            <div>Make: {car.make}</div>
            <div>Model: {car.model}</div>
            <div>Year: {car.year}</div>
            <div>Price: ${car.price}</div>
            <div>
              <img src={car.imageUrl} alt={`${car.make} ${car.model}`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
