import React from "react";
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <>
      <section
        className="relative min-h-[calc(80vh-6rem)] flex items-center justify-center 
                   bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url('/contactHero.webp')
          `,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Get in touch with our team. We're here to help you find your perfect
            property.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default ContactHero;
