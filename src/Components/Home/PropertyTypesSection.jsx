import React from 'react';

const PropertyTypesSection = () => {
  const propertyTypes = [
    {
      name: 'Luxury Apartments',
      description: 'Modern high-rise apartments with world-class amenities',
      image: '/img1.webp',
    },
    {
      name: 'Premium Villas',
      description: 'Spacious independent villas in gated communities',
      image: '/img3.webp',
    },
    {
      name: 'Commercial Spaces',
      description: 'Prime commercial properties for your business',
      image: '/img4.webp',
    },
    {
      name: 'Penthouses',
      description: 'Exclusive penthouses with panoramic city views',
      image: '/img5.webp',
    },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Property Types
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of premium properties tailored to your
            lifestyle and preferences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {propertyTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={type.image} 
                  alt={type.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {type.name}
                </h3>
                <p className="text-gray-600 text-center">{type.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyTypesSection;