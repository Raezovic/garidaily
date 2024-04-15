import Navbar from './components/Navbar';
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Banner from './components/Banner';
import Search from './components/Search';
import Footer from './components/Footer';
import CarsList from './components/Carslist';
import Home from './Pages/Home';
import ParentComponent from './components/ParentComponent'
import { ChatbotProvider } from './components/ChatbotContext';
import Chatbot from './components/Chatbot';
import Dealer from './Pages/Dealer';
import Cars from './Pages/Cars'; // Import the Cars page

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
      <Home />
      <Routes>
        <Route path="/" element={<ParentComponent />} /> {/* Use element prop to specify the component */}
        <Route path="/cars" element={<Cars />} />
        <Route path="/dealers" element={<Dealer />} />
      </Routes>
      <ChatbotProvider>
      <Chatbot />
      </ChatbotProvider>

      
      <Footer />
    </>
  );
};

export default App;