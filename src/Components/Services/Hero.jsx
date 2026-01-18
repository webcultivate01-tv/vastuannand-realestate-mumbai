"use client";

import React from "react";
import { motion } from "framer-motion";

const textContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const ServicesHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-orange-50 to-orange-100">
      {/* Soft animated orbs */}
      <motion.div
        className="absolute -top-32 -left-32 w-96 h-96 bg-orange-300/40 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], x: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 -right-24 w-96 h-96 bg-amber-400/40 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], y: [0, -40, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl px-6 text-center"
        variants={textContainer}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={textItem}
          className="inline-block mb-4 px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm tracking-wide font-medium"
        >
          Our Expertise
        </motion.span>

        <motion.h1
          variants={textItem}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
        >
          Premium Real Estate
          <span className="block text-orange-600 mt-2">Services in Mumbai</span>
        </motion.h1>

        <motion.p
          variants={textItem}
          className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          From buying and selling to consultation and rentals, we provide
          end-to-end real estate solutions designed for confidence and growth.
        </motion.p>

        <motion.div
          variants={textItem}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <button className="px-8 py-4 rounded-2xl bg-orange-600 text-white font-semibold hover:bg-orange-500 transition">
            Explore Services
          </button>
          <button className="px-8 py-4 rounded-2xl border border-gray-300 text-gray-800 hover:bg-gray-100 transition">
            Book Consultation
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ServicesHero;
