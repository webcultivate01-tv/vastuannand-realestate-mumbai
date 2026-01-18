import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ServicesSection = () => {
  const services = [
    {
      image: "/services1.avif",
      title: "Property Buying",
      description:
        "Find and acquire your dream home in Mumbai’s prime locations.",
    },
    {
      image: "/services2.avif",
      title: "Property Selling",
      description:
        "Maximize your property value with expert insights and strategies.",
    },
    {
      image: "/services3.avif",
      title: "Property Consultation",
      description:
        "Guiding you through property investment & legal documentation.",
    },
    {
      image: "/services4.avif",
      title: "Rental Services",
      description:
        "Helping you find premium rental properties with easy booking.",
    },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 right-0 w-80 h-80 bg-amber-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stylish Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-4">
            Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-amber-400">
              Services
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our premium real estate services designed to make your
            property journey effortless and rewarding.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-orange-400 to-amber-400" />
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative rounded-3xl shadow-2xl overflow-hidden cursor-pointer group"
            >
              {/* Card Background */}
              <div className="absolute inset-0 rounded-3xl bg-white shadow-lg" />

              {/* Image */}
              <div className="relative rounded-3xl overflow-hidden h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text Overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-xl font-bold text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-white">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modern Bottom Divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-16 flex items-center justify-center gap-3 w-40 mx-auto"
        >
          {/* Left Line */}
          <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full" />

          {/* Center Dot */}
          <div className="w-3 h-3 bg-orange-500 rounded-full shadow-lg animate-pulse" />

          {/* Right Line */}
          <div className="flex-1 h-0.5 bg-gradient-to-l from-orange-400 to-amber-400 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
