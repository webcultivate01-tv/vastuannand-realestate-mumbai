import React from "react";
import { useParams } from "react-router-dom";
import properties from "../data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);

  if (!property) {
    return <div className="text-center py-20">Property not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 mt-8">
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
      <p className="text-gray-600 mb-8">📍 {property.location}</p>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* LEFT COLUMN (Content) */}
        <div className="lg:col-span-2">
          {/* Main Image */}
          <img
            src={property.imageUrl}
            alt={property.name}
            className="w-full h-96 object-cover rounded-xl mb-6"
          />

          {/* Description */}
          {property.description && (
            <>
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {property.description}
              </p>
            </>
          )}

          {/* Amenities */}
          {property.amenities?.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mb-3">Amenities</h2>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                {property.amenities.map((a) => (
                  <li key={a} className="bg-gray-100 px-4 py-2 rounded-lg">
                    ✔ {a}
                  </li>
                ))}
              </ul>
            </>
          )}

          {/* Gallery */}
          {property.gallery?.length > 0 && (
            <>
              <h2 className="text-xl font-semibold mb-3">Gallery</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {property.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${property.name} ${index + 1}`}
                    className="h-48 w-full object-cover rounded-lg"
                    loading="lazy"
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* RIGHT COLUMN (Sticky Summary) */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white border rounded-xl shadow-md p-6">
            {/* Price */}
            <p className="text-2xl font-bold text-gray-900 mb-4">
              {property.priceLabel}
            </p>

            {/* Key Info */}
            <div className="space-y-2 text-gray-700 mb-4">
              <p>🛏️ {property.bedrooms} Bedrooms</p>
              <p>🚿 {property.bathrooms} Bathrooms</p>
              <p>📐 {property.area}</p>
              <p>🏠 {property.type}</p>
              {property.furnishing && <p>🪑 {property.furnishing}</p>}
              {property.facing && <p>🧭 Facing: {property.facing}</p>}
              {property.possession && <p>📅 {property.possession}</p>}
            </div>

            {/* Tags */}
            {property.tags?.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {property.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-200 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* CTA */}
            <button className="w-full mt-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-gray-900 py-3 rounded-lg font-semibold hover:opacity-90">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
