import React from 'react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
          Let our expert team guide you through every step of your property
          journey. Get started today!
        </p>
        <Link
          to="/contact"
          className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Schedule a Consultation
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
