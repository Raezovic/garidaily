import Navbar from './components/Navbar';
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Banner from './components/Banner';
import Search from './components/Search';
import Footer from './components/Footer';
import CarsList from './components/Carslist';
import Brands from './components/Brands';
import ParentComponent from './components/ParentComponent'


// function App() {
//   return (
//     <>
//       <Navbar />
//       <Banner />
//       <Search />
//       <CarsList />
//       <ParentComponent />
      
//       <Footer />
      


//     </>
//   );
// }

// export default App;

const App = () => {
  // State to hold search results
  const [searchResults, setSearchResults] = useState([]);

  // Handle search function
  const handleSearch = (filteredCars) => {
    setSearchResults(filteredCars);
  };

  return (
    <>
      <Navbar />
      <Banner />
      {/* Pass handleSearch function as prop to the Search component */}
      <Search onSearch={handleSearch} />
      {/* Pass searchResults as prop to the CarsList component */}
      <CarsList searchResults={searchResults} />
      <ParentComponent />

      <Brands />
      <Footer />
    </>
  );
};

export default App;