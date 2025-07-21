import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Home from './components/Home'; // Add this
import './index.css';

function Shop() {
  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <Navbar />
      <h1 className="text-2xl sm:text-3xl text-center mt-6 sm:mt-10">
        Shop Now
      </h1>
    </div>
  );
}

function Cart() {
  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <Navbar />
      <h1 className="text-2xl sm:text-3xl text-center mt-6 sm:mt-10">
        Cart Page
      </h1>
    </div>
  );
}

function Account() {
  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <Navbar />
      <h1 className="text-2xl sm:text-3xl text-center mt-6 sm:mt-10">
        Account Page
      </h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Add this */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </Router>
  );
}

export default App;