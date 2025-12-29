import React from "react";

const PropertiesHero = () => {
  return (
    <section
      className="relative min-h-[75vh] flex items-center justify-center 
                 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ),
          url('/hero2.webp')
        `,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Our Properties
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
          Browse our exclusive collection of premium residential and commercial
          properties across Mumbai
        </p>
      </div>
    </section>
  );
};

export default PropertiesHero;
