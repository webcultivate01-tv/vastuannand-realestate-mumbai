import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section
      className="relative min-h-[calc(70vh-6rem)] flex items-center justify-center 
                 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `
          linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url('/contactHero.webp')
        `,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <span
          className="inline-block mb-4 px-4 py-1 text-sm font-semibold 
          text-amber-400 border border-amber-400/40 rounded-full"
        >
          Trusted Real Estate Advisors
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Contact Us
        </h1>

        {/* Main Text */}
        <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-3">
          Get in touch with our team. We're here to help you find your perfect
          property.
        </p>

        {/* Extra Supporting Line */}
        <p className="text-white/80 max-w-xl mx-auto mb-8">
          Residential • Commercial • Investment Properties across Maharastra
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#book-consultation"
            className="px-8 py-3 rounded-xl font-semibold text-white 
      bg-gradient-to-r from-amber-400 to-amber-600 hover:scale-105 transition"
          >
            📅 Book Consultation
          </a>

          <a
            href="#services"
            className="px-8 py-3 rounded-xl font-semibold text-white 
      border border-white/40 hover:bg-white/10 transition"
          >
            🏠 Our Services
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
