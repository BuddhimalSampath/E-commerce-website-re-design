import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function ContactUs() {
  return (
    <div className="bg-white min-h-screen pt-16">
      <Navbar />
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-black mb-8">Contact Us</h1>
        <form className="max-w-lg mx-auto space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            Send Message
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;