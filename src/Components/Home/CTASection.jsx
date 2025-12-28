import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTASection = () => {
  return (
    <section
      className="relative py-20 mb-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url('/img6.webp')",
      }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Find Your Dream Home?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Let our expert team guide you through every step of your property
          journey. Get started today!
        </p>
        <Link
          to="/contact"
          className="inline-block bg-white/90 hover:bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Schedule a Consultation
        </Link>
      </motion.div>
    </section>
  );
};

export default CTASection;
