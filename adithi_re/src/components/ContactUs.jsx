import React from 'react';
import Navbar from './Navbar';

function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen pt-16">
      <Navbar />
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Contact Us</h1>
        <div className="flex flex-col sm:flex-row gap-6">
          {/* Get in Touch Section */}
          <div className="w-full sm:w-1/2">
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              Get in Touch
              <br />
              For any inquiries, please send us a message and we will reply to you as soon as possible.
            </p>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm sm:text-base mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm sm:text-base mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm sm:text-base mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-2 text-sm sm:text-base border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-500 text-white text-sm sm:text-base px-4 py-2 rounded hover:bg-red-600"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Information Section */}
          <div className="w-full sm:w-1/2">
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-red-500">Contact Information</h2>
            <ul className="space-y-2 text-sm sm:text-base text-gray-700">
              <li>
                <span className="text-red-500 mr-2">⏰</span> Business Hours
                <br />
                9:00 am to 5:00 pm
              </li>
              <li>
                <span className="text-red-500 mr-2">📍</span> Address
                <br />
                480/A, Kandy Road, Rambukpitiya, Kadawatha, Sri Lanka
              </li>
              <li>
                <span className="text-red-500 mr-2">📧</span> Email
                <br />
                info@aditifashions.com
              </li>
              <li>
                <span className="text-red-500 mr-2">📞</span> Phone
                <br />
                +94 112973000 / +94 766 805 359
              </li>
            </ul>
          </div>
        </div>
        {/* Store Outlets Section */}
        <div className="mt-8 text-center">
          <h2 className="text-lg sm:text-xl font-bold mb-4">Store Outlets</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <div>
              <p className="text-red-500 mb-2">🏬</p>
              <p className="text-sm sm:text-base">ADITI JA-ELA</p>
              <p className="text-sm sm:text-base">Shop #5, K-Zone, Ja-Ela</p>
            </div>
            <div>
              <p className="text-red-500 mb-2">🏬</p>
              <p className="text-sm sm:text-base">ADITI OGF</p>
              <p className="text-sm sm:text-base">Shop #23, One Galle Face, Colombo 02</p>
            </div>
            <div>
              <p className="text-red-500 mb-2">🏬</p>
              <p className="text-sm sm:text-base">ADITI NEGOMBO</p>
              <p className="text-sm sm:text-base">No.69A, Main Street, Negombo</p>
            </div>
            <div>
              <p className="text-red-500 mb-2">🏬</p>
              <p className="text-sm sm:text-base">ADITI KCC</p>
              <p className="text-sm sm:text-base">Shop #7, 3rd Floor, Kandy City Centre, Kandy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;