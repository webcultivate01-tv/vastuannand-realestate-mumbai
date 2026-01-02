import React, { useState } from "react";
import { motion } from "framer-motion";

const propertyTypes = [
  { name: "Apartment", img: "/apartment.webp" },
  { name: "Villa", img: "/villa.webp" },
  { name: "Office", img: "/office.webp" },
  { name: "Rental", img: "/rental.webp" },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ContactInfo = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="py-16 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {propertyTypes.map((property) => (
            <motion.div
              key={property.name}
              variants={cardVariants}
              onClick={() => setActiveImage(property.img)}
              className="group relative w-full h-40 overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <img
                src={property.img}
                alt={property.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-xl font-bold">
                  {property.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Fullscreen Image Preview */}
      {activeImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={() => setActiveImage(null)}
        >
          <motion.img
            src={activeImage}
            alt="Preview"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="max-w-[80vw] max-h-[80vh] object-contain"
          />

          <button
            className="absolute top-11 right-5 text-white text-3xl font-bold"
            onClick={() => setActiveImage(null)}
          >
            ✕
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default ContactInfo;
