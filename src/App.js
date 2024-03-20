import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Banner from './components/Banner';
import Search from './components/Search';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Search />
      <Footer />


    </>
  );
}

export default App;
