import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const ContactHero = () => {
  return (
    <section className="relative min-h-[100vh] md:min-h-[calc(80vh-8rem)] overflow-hidden pb-24">
      {/* Background Images */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: [1.05, 1, 1.05] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          className="bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
              url('/contact.avif')
            `,
          }}
        />

        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: [1.05, 1, 1.05] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          className="hidden md:block bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)),
              url('/contact-right.avif')
            `,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center min-h-[80vh] px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }} // animation repeats whenever in view
          className="max-w-5xl text-center"
        >
          {/* Eyebrow */}
          <motion.span
            variants={item}
            className="relative inline-flex items-center gap-2 mb-4 mt-3 px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-widest uppercase text-amber-200 bg-white/10 backdrop-blur-lg border border-amber-400/30 shadow-[0_0_25px_rgba(251,191,36,0.25)]"
          >
            REAL ESTATE • CONSULTING • TRUST
          </motion.span>

          {/* Heading */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
          >
            Let’s Find Your{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Perfect Property
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={item}
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Personalized guidance, verified listings, and complete transparency
            — helping you make confident property decisions without the stress.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 30px rgba(251,191,36,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-8 py-3 rounded-full font-semibold text-gray-900 bg-gradient-to-br from-amber-500 to-yellow-500 shadow-xl transition-all"
            >
              Book Free Consultation
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/911234567890"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-3 rounded-full font-semibold text-white bg-green-500 hover:bg-green-600 shadow-lg"
            >
              WhatsApp Us
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+911234567890"
              className="px-8 py-3 rounded-full font-semibold text-white border border-white/40 backdrop-blur-md bg-white/10 hover:bg-white/20"
            >
              Call Now
            </motion.a>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            variants={container}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {[
              "Zero Brokerage Assistance",
              "Verified & Legal Properties",
              "Expert Local Advisors",
              "Fast Site Visits",
            ].map((text, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4 }}
                className="relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-amber-200 bg-white/10 backdrop-blur-lg border border-amber-400/30 shadow-[0_0_20px_rgba(251,191,36,0.18)] hover:bg-white/20 transition-all"
              >
                {text}
              </motion.div>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="relative mt-16 flex justify-center items-center">
            <div className="absolute w-72 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent" />
            <motion.span
              className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 opacity-75"
              animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="relative w-3 h-3 rounded-full bg-gradient-to-br from-amber-500 to-yellow-500 shadow-lg" />
          </div>

          {/* Stats */}
          <motion.div
            variants={container}
            className="mt-12 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { label: "Happy Clients", value: "500+" },
              { label: "Properties Listed", value: "1200+" },
              { label: "Years Experience", value: "10+" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 text-white"
              >
                <h3 className="text-3xl font-bold text-amber-300">
                  {stat.value}
                </h3>
                <p className="mt-2 text-gray-200">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;
