import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex items-center justify-between md:flex-row">
        {/* Hamburger button (left on mobile) */}
        <div className="md:hidden">
          <button
            className="text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        {/* Aditi logo (center on mobile, left on desktop) */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-xl sm:text-2xl font-bold text-black inline-block">
            aditi
          </h1>
        </div>
        {/* Cart Icon (right on mobile) */}
        <div className="md:hidden">
          <Link to="/cart" className="text-gray-700 hover:text-red-500">
            <ShoppingCartIcon className="w-6 h-6" />
          </Link>
        </div>
        {/* Menu links and User Icon (inside hamburger on mobile) */}
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:items-center md:space-x-6 absolute md:static top-16 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0`}
        >
          <li className="my-2 md:my-0">
            <Link to="/account" className="text-gray-700 hover:text-red-500 block md:hidden">
              <UserIcon className="w-6 h-6 inline-block" />
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              to="/about"
              className={`text-gray-700 hover:text-red-500 block ${
                location.pathname === '/about' ? 'text-red-500' : ''
              }`}
            >
              About Us
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              to="/shop"
              className={`text-gray-700 hover:text-red-500 block ${
                location.pathname === '/shop' ? 'text-red-500' : ''
              }`}
            >
              Shop Now
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link
              to="/contact"
              className={`text-gray-700 hover:text-red-500 block ${
                location.pathname === '/contact' ? 'text-red-500' : ''
              }`}
            >
              Contact Us
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link to="/cart" className="text-gray-700 hover:text-red-500 hidden md:block">
              <ShoppingCartIcon className="w-6 h-6 inline-block" />
            </Link>
          </li>
          <li className="my-2 md:my-0">
            <Link to="/account" className="text-gray-700 hover:text-red-500 hidden md:block">
              <UserIcon className="w-6 h-6 inline-block" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;