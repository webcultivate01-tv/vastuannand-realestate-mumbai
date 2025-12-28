import React from 'react';

const PropertyFilters = ({
  type,
  location,
  price,
  onTypeChange,
  onLocationChange,
  onPriceChange,
}) => {
  return (
    <section className="py-8 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <select
            value={type}
            onChange={(e) => onTypeChange(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
          >
            <option>All Types</option>
            <option>Apartment</option>
            <option>Villa</option>
            <option>Penthouse</option>
            <option>Commercial</option>
          </select>
          <select
            value={location}
            onChange={(e) => onLocationChange(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
          >
            <option>All Locations</option>
            <option>South Mumbai</option>
            <option>Andheri</option>
            <option>Bandra</option>
            <option>Powai</option>
            <option>BKC</option>
            <option>Juhu</option>
            <option>Worli</option>
          </select>
          <select
            value={price}
            onChange={(e) => onPriceChange(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:outline-none"
          >
            <option>Any Price</option>
            <option>₹50L - ₹1Cr</option>
            <option>₹1Cr - ₹2Cr</option>
            <option>₹2Cr - ₹5Cr</option>
            <option>₹5Cr+</option>
          </select>
          <div className="flex items-center">
            <span className="text-sm text-gray-600">{type}, {location}, {price}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyFilters;
