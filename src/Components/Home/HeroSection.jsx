import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const HeroSection = () => {
  // 1️⃣ State for search filters
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  // 2️⃣ Handle Search Click
  const handleSearch = () => {
    const query = new URLSearchParams();
    if (location) query.append("location", location);
    if (type) query.append("type", type);
    if (price) query.append("price", price);

    navigate(`/properties?${query.toString()}`);
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/hero1.webp')`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-40 text-center w-full">
        {/* ----------------------- Current Hero Content ----------------------- */}
        <div className="space-y-6 md:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Find Your Dream Home in{" "}
            <span className="text-amber-400">Mumbai</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto px-2 md:px-0">
            Discover premium properties in Mumbai's most sought-after locations.
            Your perfect home awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center pt-2 md:pt-4 px-2 md:px-0">
            <Link
              to="/properties"
              className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
            >
              Explore Properties
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* ----------------------- Search Box ----------------------- */}
        <div className="mt-12 md:mt-16 max-w-5xl mx-auto px-2 md:px-0">
          <div className="bg-white rounded-lg md:rounded-2xl shadow-2xl p-4 md:p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
              {/* Location */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm"
                >
                  <option value="">All Locations</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Kalyan">Kalyan</option>
                  <option value="Thane">Thane</option>
                  <option value="Amravati">Amravati</option>
                  <option value="Akola">Akola</option>
                </select>
              </div>

              {/* Property Type */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                  Property Type
                </label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm"
                >
                  <option value="">All Types</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Villa">Villa</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Commercial">Commercial</option>
                  <option value="Rental">Rental</option>
                </select>
              </div>

              {/* Price Range */}
              <div>
                <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">
                  Price Range
                </label>
                <select
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full px-3 md:px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none text-sm"
                >
                  <option value="">Any Price</option>
                  <option value="50L-1Cr">₹50L - ₹1Cr</option>
                  <option value="1Cr-2Cr">₹1Cr - ₹2Cr</option>
                  <option value="2Cr-5Cr">₹2Cr - ₹5Cr</option>
                  <option value="5Cr+">₹5Cr+</option>
                </select>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button
                  onClick={handleSearch}
                  className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 text-sm md:text-base"
                >
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
