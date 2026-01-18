"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const PropertyBuyingSection = () => {
  return (
    <section className="relative py-28 bg-white overflow-hidden" id="buying">
      {/* Soft background accent */}
      <motion.div
        className="absolute -top-32 right-0 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          {/* IMAGE */}
          <motion.div
            variants={item}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <motion.img
              src="/services1.avif"
              alt="Luxury property buying service"
              className="w-full h-[420px] object-cover"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* CONTENT */}
          <motion.div variants={item}>
            <span className="inline-block mb-4 px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
              Property Buying
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
              Find Your Perfect Home in
              <span className="text-orange-600"> Mumbai’s Prime Locations</span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We help you discover, evaluate, and secure premium residential and
              commercial properties with complete transparency, expert market
              insights, and end-to-end support.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                "Curated luxury & investment-ready properties",
                "Market-driven pricing & negotiation support",
                "Legal verification & documentation assistance",
                "Site visits & end-to-end closing support",
              ].map((point, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.15 }}
                >
                  <span className="mt-1 w-2 h-2 rounded-full bg-orange-500" />
                  {point}
                </motion.li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-10 px-8 py-4 rounded-2xl bg-orange-600 text-white font-semibold shadow-lg hover:bg-orange-500 transition"
            >
              Explore Buying Options
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyBuyingSection;
