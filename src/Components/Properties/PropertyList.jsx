import React from 'react';

const PropertyList = () => {
  const properties = [
    {
      id: 1,
      name: 'Luxury Apartment in Bandra',
      location: 'Bandra West, Mumbai',
      price: '₹3.5 Cr',
      bedrooms: 3,
      bathrooms: 2,
      area: '1850 sq ft',
      type: 'Apartment',
      image: '🏢',
    },
    {
      id: 2,
      name: 'Premium Villa in Juhu',
      location: 'Juhu, Mumbai',
      price: '₹8.5 Cr',
      bedrooms: 5,
      bathrooms: 4,
      area: '4500 sq ft',
      type: 'Villa',
      image: '🏡',
    },
    {
      id: 3,
      name: 'Penthouse with Sea View',
      location: 'Worli, Mumbai',
      price: '₹12 Cr',
      bedrooms: 4,
      bathrooms: 3,
      area: '3200 sq ft',
      type: 'Penthouse',
      image: '🌆',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="bg-gradient-to-br from-amber-400 to-yellow-500 h-48 flex items-center justify-center text-7xl">
                {property.image}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
                    {property.type}
                  </span>
                  <span className="text-2xl font-bold text-gray-900">
                    {property.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {property.name}
                </h3>
                <p className="text-gray-600 mb-4 flex items-center">
                  <svg
                    className="w-4 h-4 mr-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  {property.location}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-sm text-gray-600">
                  <span>🛏️ {property.bedrooms} Beds</span>
                  <span>🚿 {property.bathrooms} Baths</span>
                  <span>📐 {property.area}</span>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
