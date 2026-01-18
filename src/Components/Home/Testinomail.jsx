"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";

const userImage = "https://i.pravatar.cc/150?img=5";

const testimonials = [
  {
    name: "John Doe",
    review:
      "This company transformed our business. The results were phenomenal!",
  },
  {
    name: "Jane Smith",
    review: "Outstanding service and amazing support. Highly recommend!",
  },
  {
    name: "Michael Johnson",
    review: "Their expertise is unmatched. Truly a top-class team!",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const TestimonialSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-orange-50 to-white">
      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-orange-200 rounded-full opacity-20 animate-pulse blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-orange-300 rounded-full opacity-30 animate-pulse blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-orange-500 mb-12 relative z-10">
          What Our Clients Say
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 relative z-10"
              variants={item}
              whileHover={{ scale: 1.05 }}
            >
              {/* User Image */}
              <div className="w-16 h-16 mx-auto rounded-full border-4 border-orange-500 overflow-hidden mb-4">
                <img
                  src={userImage}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Review with Icon */}
              <div className="flex items-center justify-center gap-2 text-orange-400 mb-3">
                <AiOutlineMessage className="text-2xl" />
                <p className="text-gray-700 italic text-center">
                  "{testimonial.review}"
                </p>
              </div>

              {/* Stars */}
              <div className="flex justify-center mb-3 gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Client Name */}
              <h3 className="text-lg font-semibold text-orange-600">
                {testimonial.name}
              </h3>

              {/* Glow Accent */}
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-tr from-orange-300 to-yellow-200 opacity-10 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
