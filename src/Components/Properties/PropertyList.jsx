import React from 'react';

const Tag = ({ label }) => (
  <span className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full">
    {label}
  </span>
);

const PropertyCard = ({ p }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
    <div className="relative h-48">
      <img
        src={p.imageUrl}
        alt={p.name}
        className="w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute top-3 left-3 flex gap-2">
        <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full">
          {p.type}
        </span>
        {p.tags?.slice(0, 2).map((t) => (
          <Tag key={t} label={t} />
        ))}
      </div>
      <div className="absolute bottom-3 right-3 px-3 py-1 bg-white/90 text-gray-900 text-sm rounded">
        {p.priceLabel}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-1">{p.name}</h3>
      <p className="text-gray-600 mb-4">📍 {p.location}</p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 text-sm text-gray-600">
        <span>🛏️ {p.bedrooms} Beds</span>
        <span>🚿 {p.bathrooms} Baths</span>
        <span>📐 {p.area}</span>
      </div>
      <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
        View Details
      </button>
    </div>
  </div>
);

const PropertyList = ({ properties = [] }) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">Showing {properties.length} results</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((p) => (
            <PropertyCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyList;
