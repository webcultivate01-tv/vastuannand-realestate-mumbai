"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const PropertySellingSection = () => {
  return (
    <section
      className="relative py-32 bg-gradient-to-b from-orange-50 via-white to-white overflow-hidden"
      id="selling"
    >
      {/* Floating background shapes */}
      <motion.div
        className="absolute top-24 left-16 w-72 h-72 bg-orange-300/30 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-20 w-96 h-96 bg-amber-300/30 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Top Content */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
            Property Selling
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Sell Faster.
            <span className="block text-orange-600 mt-2">
              Sell at the Right Price.
            </span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            Our expert-driven selling strategy ensures maximum visibility,
            serious buyers, and premium valuations for your property.
          </p>
        </motion.div>

        {/* Image + Value Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          {/* Image */}
          <motion.div
            className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="/services2.avif"
              alt="Property selling service"
              className="w-full h-[460px] object-cover"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Value Points */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            {[
              {
                title: "Accurate Market Pricing",
                desc: "Data-backed pricing strategies to attract serious buyers and avoid under or overpricing.",
              },
              {
                title: "Premium Marketing",
                desc: "Professional photography, listings, and targeted campaigns across high-intent platforms.",
              },
              {
                title: "Negotiation Expertise",
                desc: "We protect your interests and ensure the highest possible closing value.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                variants={fadeUp}
                transition={{ delay: index * 0.15 }}
              >
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h4>
                <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <button className="px-10 py-4 rounded-2xl bg-orange-600 text-white font-semibold shadow-xl hover:bg-orange-500 transition">
            Get Property Valuation
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertySellingSection;
