import './App.css';
import React from 'react';
import HomePage from './pages/Home/home'
import AboutUS from "./pages/AboutUS/aboutUs";
import { Routes, Route } from "react-router-dom";
import PriceList from './components/PriceList/price-list';
import Contact from "./pages/Contact/contact";
import FAQs from "./pages/FAQs/faqs";
import Footer from './components/Footer/footer';
// import Login from './pages/login/login';

function App() {

  return (
    <>
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUS />} />
        <Route path="/pricelist" element={<PriceList />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
