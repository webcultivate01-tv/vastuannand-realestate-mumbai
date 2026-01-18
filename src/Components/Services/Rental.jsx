"use client";

import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Tenant Screening",
    desc: "Verified tenants through background checks and rental history review.",
  },
  {
    title: "Rental Agreements",
    desc: "Clear, compliant agreements protecting both owners and tenants.",
  },
  {
    title: "Property Management",
    desc: "Hassle-free coordination, follow-ups, and ongoing rental support.",
  },
  {
    title: "Quick Occupancy",
    desc: "Efficient marketing to minimize vacancy and maximize rental yield.",
  },
];

const float = {
  animate: {
    y: [0, -12, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const RentalServicesSection = () => {
  return (
    <section
      className="relative py-32 bg-gradient-to-b from-white via-orange-50 to-white overflow-hidden"
      id="rental"
    >
      {/* Floating background accents */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl"
        animate={{ y: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-16 w-96 h-96 bg-amber-300/40 rounded-full blur-3xl"
        animate={{ y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <span className="inline-block mb-4 px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
            Rental Services
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">
            Stress-Free Renting.
            <span className="block text-orange-600 mt-2">Seamless Living.</span>
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            From finding the right tenant to managing agreements and occupancy,
            we handle every aspect of rental services with care and efficiency.
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 1 }}
          >
            <motion.img
              src="/services4.avif"
              alt="Rental services"
              className="w-full h-[460px] object-cover"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* Floating Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                initial={{ opacity: 1, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.15 }}
              >
                <h4 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h4>
                <p className="mt-2 text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.9 }}
        >
          <button className="px-10 py-4 rounded-2xl bg-orange-600 text-white font-semibold shadow-xl hover:bg-orange-500 transition">
            Explore Rental Options
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default RentalServicesSection;
