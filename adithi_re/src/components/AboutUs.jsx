import React from 'react';
import Navbar from './Navbar'; // Adjust the import path as needed

function AboutUs() {
  return (
    <div className="bg-white min-h-screen pt-16">
      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* About Us Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-black text-center mb-8">
          About Us
        </h1>

        {/* Our Story Section */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">Our Story</h2>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
            ADITI is the label women’s fashion retail arm of Seeruwa Holdings (Pvt) Ltd. Seeruwa Holdings’ 28+ years expertise and experience in apparel quality fashion apparel manufacture have combined with a strong advantage to the fashion and garment industry.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4">
            The company expands into the business of women’s fashion retail and party wear to casual wear, our valuable customers can select from the latest collection from Calvin, GUESS, Adrienne Papell, Adior, St-Coire Styles and the like. This expertise and world-class manufacturing processes of the production facilities assure the value and quality fashion clothing to our customers.
          </p>
          <p className="text-sm sm:text-base text-gray-700 leading-relaxed mt-4">
            At Aditi we believe that every woman is powerful and accomplished, and deserve to have a wardrobe to cater to their desired looks and to reach their true potential. Now with the fast and inclusive designer wear lines ranging from formal to party wear to casual wear our valuable customers can select from the best styles and avoid the biggest online shopping challenge which is finding the perfect fit, feel comfortable, confident and strong everyday with Aditi.
          </p>
        </section>

        {/* Vision and Mission Section */}
        <section className="flex flex-col sm:flex-row gap-6 mb-12">
          {/* Vision Box */}
          <div className="bg-red-600 text-white p-6 rounded-lg flex-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">👁️</span>
              <h3 className="text-xl font-bold">Vision</h3>
            </div>
            <p className="text-sm sm:text-base">
              To support our customers to be confident with their shape, while giving the best style on an impressive level by offering a wide collection of fashion wear lines ranging from formal and party wear to casual wear.
            </p>
          </div>

          {/* Mission Box */}
          <div className="bg-blue-900 text-white p-6 rounded-lg flex-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-2">🔄</span>
              <h3 className="text-xl font-bold">Mission</h3>
            </div>
            <p className="text-sm sm:text-base">
              Our mission is to provide quality, style and comfortable ladies’ wear with a flexible size range, keeping up with the latest fashion trends and ensuring customer satisfaction while offering a superb shopping experience that allows a fulfilling life.
            </p>
          </div>
        </section>

        {/* Our Values Section */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Customer Focus */}
            <div className="flex items-start">
              <span className="text-red-500 text-2xl mr-3">👤</span>
              <div>
                <h4 className="text-lg font-bold text-black">Customer Focus</h4>
                <p className="text-sm text-gray-700">
                  We are devoted to provide the best shopping experience for our customers from browsing to the final checkout.
                </p>
              </div>
            </div>

            {/* Simplicity and Security */}
            <div className="flex items-start">
              <span className="text-red-500 text-2xl mr-3">🛡️</span>
              <div>
                <h4 className="text-lg font-bold text-black">Simplicity and Security</h4>
                <p className="text-sm text-gray-700">
                  We guarantee a smooth and secured transaction and communication.
                </p>
              </div>
            </div>

            {/* Quality and Creativity */}
            <div className="flex items-start">
              <span className="text-red-500 text-2xl mr-3">💡</span>
              <div>
                <h4 className="text-lg font-bold text-black">Quality and Creativity</h4>
                <p className="text-sm text-gray-700">
                  We offer innovative designs with the highest quality and keeping up with the latest styles.
                </p>
              </div>
            </div>

            {/* Inclusivity */}
            <div className="flex items-start">
              <span className="text-red-500 text-2xl mr-3">❤️</span>
              <div>
                <h4 className="text-lg font-bold text-black">Inclusivity</h4>
                <p className="text-sm text-gray-700">
                  We are committed to ensure inclusivity in all our creations from styles, sizes, fabrics and colours.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;