import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactUs from './components/ContactUs';
import './index.css';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <Navbar />
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
          About Us
        </h1>
        <p className="text-sm sm:text-lg text-gray-700 text-center">
          Welcome to our clothing brand! We are passionate about delivering stylish,
          high-quality apparel that makes you feel confident and comfortable.
        </p>
      </div>
    </div>
  );
}

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
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />
        <Route path="/" element={
          <div className="bg-gray-100 min-h-screen pt-16">
            <Navbar />
            <h1 className="text-2xl sm:text-3xl text-center mt-6 sm:mt-10">
              Home Page
            </h1>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;