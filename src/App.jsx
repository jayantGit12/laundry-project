import './App.css';
import React from 'react';
import HomePage from './pages/Home/home'
import AboutUS from "./pages/AboutUS/aboutUs";
import { Routes, Route } from "react-router-dom";
import PriceList from './components/PriceList/price-list';
import Contact from "./pages/Contact/contact";
import FAQs from "./pages/FAQs/faqs";
import SignUp from "./pages/SignUp/signup";
import Footer from './components/Footer/footer';
import Login from './pages/login/login';
import Layout from './components/Layout/layout';

function App() {

  return (
    <> 
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutUS />} />
          <Route path="/pricelist" element={<PriceList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
        </Route>
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      {/* <Footer /> */}
    </>
  )
}

export default App
