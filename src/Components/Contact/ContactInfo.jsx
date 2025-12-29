import React from "react";

const propertyTypes = [
  {
    name: "Apartment",
    img: "/apartment.webp",
  },
  {
    name: "Villa",
    img: "/villa.webp",
  },
  {
    name: "Office",
    img: "/office.webp",
  },
  {
    name: "Rental",
    img: "/rental.webp",
  },
];

const ContactInfo = () => {
  return (
    <section className="py-16 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {propertyTypes.map((property) => (
            <div
              key={property.name}
              className="group relative w-full h-40 overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={property.img}
                alt={property.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">
                  {property.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
