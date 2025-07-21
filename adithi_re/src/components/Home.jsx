import React, { useRef } from 'react';
import Navbar from './Navbar'; // Assuming Navbar exists elsewhere
import { FaCartPlus, FaHeart, FaShoppingBag } from 'react-icons/fa';

function Home() {
  // Dummy data for New Arrivals (8 latest products)
  const newArrivals = [
    { id: 1, name: "Floral Print Dress", price: 79.99, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Leather Boots", price: 99.99, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Denim Jacket", price: 89.99, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Silk Scarf", price: 29.99, image: "https://via.placeholder.com/150" },
    { id: 5, name: "Evening Gown", price: 129.99, image: "https://via.placeholder.com/150" },
    { id: 6, name: "Casual Sneakers", price: 59.99, image: "https://via.placeholder.com/150" },
    { id: 7, name: "Wool Coat", price: 149.99, image: "https://via.placeholder.com/150" },
    { id: 8, name: "Handbag", price: 69.99, image: "https://via.placeholder.com/150" },
  ];

  // Dummy data for Featured Collections
  const featuredCollections = [
    { id: 1, name: "Summer Collection", image: "https://via.placeholder.com/300" },
    { id: 2, name: "Winter Collection", image: "https://via.placeholder.com/300" },
    { id: 3, name: "Everyday Style", image: "https://via.placeholder.com/300" },
  ];

  // Dummy data for Categories
  const categories = [
    { id: 1, name: "Dresses", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Tops", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Bottoms", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Shoes", image: "https://via.placeholder.com/150" },
    { id: 5, name: "Accessories", image: "https://via.placeholder.com/150" },
  ];

  // Ref for scrolling New Arrivals ribbon
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - 200,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + 200,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="bg-white min-h-screen pt-16">
      <Navbar />
      <div className="container mx-auto px-4 py-8 sm:py-12">
        {/* Hero Banner */}
        <div className="bg-gray-100 py-12">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left">
              <h1 className="text-4xl font-bold text-black mb-4">Elevate Your Style</h1>
              <a href="/shop" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Shop Now</a>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
              <img src="https://via.placeholder.com/400" alt="Woman illustration" className="w-full" />
            </div>
          </div>
        </div>

        {/* New Arrivals Ribbon */}
        <section className="py-12 relative">
          <h2 className="text-2xl font-bold text-black mb-6">New Arrivals</h2>
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 z-10"
            >
              ←
            </button>
            <div
              ref={scrollRef}
              className="overflow-x-auto flex space-x-4 pb-4"
              style={{ overflowY: 'hidden', scrollBehavior: 'smooth' }}
            >
              {newArrivals.map((product) => (
                <div
                  key={product.id}
                  className="min-w-[200px] bg-white p-4 rounded shadow relative"
                  style={{ height: 'auto' }}
                >
                  <button
                    className="absolute top-2 left-2 bg-pink-300 text-white p-1 rounded hover:bg-red-300"
                    title="Add to Favorites"
                  >
                    <FaHeart className="text-lg" />
                  </button>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4 transform hover:-translate-y-2 transition duration-300"
                  />
                  <h3 className="text-lg font-bold text-black">{product.name}</h3>
                  <p className="text-gray-700">${product.price.toFixed(2)}</p>
                  <div className="flex space-x-2 mt-2">
                    <button
                      className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
                      title="Add to Cart"
                    >
                      <FaCartPlus className="text-lg" />
                    </button>
                    <button
                      className="bg-gray-300 text-black p-2 rounded hover:bg-gray-400"
                      title="Buy Now"
                    >
                      <FaShoppingBag className="text-lg" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full hover:bg-gray-300 z-10"
            >
              →
            </button>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-black mb-6">Featured Collections</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCollections.map((collection) => (
              <div key={collection.id} className="bg-white p-4 rounded shadow">
                <img src={collection.image} alt={collection.name} className="w-full h-48 object-cover mb-4" />
                <h3 className="text-lg font-bold text-black">{collection.name}</h3>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Shop Now</button>
              </div>
            ))}
          </div>
        </section>

        {/* Shop by Category */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-black mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <div key={category.id} className="bg-gray-200 p-4 rounded transform hover:-translate-y-1 transition duration-300">
                <img src={category.image} alt={category.name} className="w-full h-32 object-cover mb-2" />
                <h3 className="text-lg font-bold text-black">{category.name}</h3>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;