"use client";

import React from "react";
import { motion } from "framer-motion";

const points = [
  {
    title: "Personalized Consultation",
    desc: "Understanding your investment goals, budget, and future plans.",
  },
  {
    title: "Market & Risk Analysis",
    desc: "Location insights, ROI forecasting, and growth potential evaluation.",
  },
  {
    title: "Legal & Documentation Review",
    desc: "Verification of titles, approvals, and compliance documents.",
  },
  {
    title: "Clear Strategic Guidance",
    desc: "Unbiased expert advice to help you make confident decisions.",
  },
];

const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const PropertyConsultationSection = () => {
  return (
    <section
      className="relative py-32 bg-white overflow-hidden"
      id="consultation"
    >
      {/* Subtle background glow */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* IMAGE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            className="relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <motion.img
              src="/services3.avif"
              alt="Property consultation service"
              className="w-full h-[480px] object-cover"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Image overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

          {/* CONTENT */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
          >
            <span className="inline-block mb-4 px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
              Property Consultation
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Expert Advice for
              <span className="block text-orange-600 mt-2">
                Confident Property Decisions
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Whether you are investing, buying, or selling, our consultation
              services provide clarity, compliance, and strategic direction at
              every step.
            </p>

            <div className="mt-10 space-y-6">
              {points.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.15 }}
                  className="flex gap-4"
                >
                  <span className="mt-2 w-2.5 h-2.5 rounded-full bg-orange-500" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mt-12 px-10 py-4 rounded-2xl bg-orange-600 text-white font-semibold shadow-lg hover:bg-orange-500 transition"
            >
              Book Expert Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertyConsultationSection;
