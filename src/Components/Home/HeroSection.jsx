import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero1.webp')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-40 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Find Your Dream Home in{' '}
            <span className="text-amber-400">Mumbai</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Discover premium properties in Mumbai's most sought-after
            locations. Your perfect home awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link
              to="/properties"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore Properties
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Search Box */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300">
                  <option>All Types</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all duration-300">
                  <option>Any Price</option>
                  <option>₹50L - ₹1Cr</option>
                  <option>₹1Cr - ₹2Cr</option>
                  <option>₹2Cr - ₹5Cr</option>
                  <option>₹5Cr+</option>
                </select>
              </div>
              <div className="md:col-span-1 flex items-end">
                <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
