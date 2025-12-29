import React from "react";
import { useParams } from "react-router-dom";
import properties from "../data/properties";

const PropertyDetail = () => {
  const { id } = useParams(); // get property id from URL
  const property = properties.find((p) => p.id === id);

  if (!property) return <p>Property not found</p>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">{property.name}</h1>
      <img
        src={property.imageUrl}
        alt={property.name}
        className="w-full h-80 object-cover mb-6"
      />
      <p className="text-gray-600 mb-2">📍 {property.location}</p>
      <p className="text-gray-800 font-semibold mb-2">{property.priceLabel}</p>
      <div className="flex gap-4 text-gray-600 mb-4">
        <span>🛏️ {property.bedrooms} Beds</span>
        <span>🚿 {property.bathrooms} Baths</span>
        <span>📐 {property.area}</span>
      </div>
      <div className="flex gap-2">
        {property.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-gray-200 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PropertyDetail;
