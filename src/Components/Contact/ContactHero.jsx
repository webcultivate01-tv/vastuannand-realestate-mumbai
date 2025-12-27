import React from 'react';

const ContactHero = () => {
  return (
    <section 
    className="relative min-h-[calc(50vh-6rem)] flex items-center justify-center bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 bg-cover bg-center bg-no-repeat"
    style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero2.webp')`,
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>
        <p className="text-xl text-white max-w-2xl mx-auto">
          Get in touch with our team. We're here to help you find your perfect
          property.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
