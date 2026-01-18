import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/hero1.webp",
  "/homeHero2.avif",
  "/homeHero3.avif",
  "/homeHero4.avif",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const bgVariants = {
  initial: { opacity: 0, scale: 1.1 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.05 },
};

const HomeHero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* BACKGROUND SLIDER */}
      <AnimatePresence>
        <motion.div
          key={index}
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)),
              url('${images[index]}')
            `,
          }}
        />
      </AnimatePresence>

      {/* SLIDER CONTROLS – CENTER LEFT & RIGHT */}
      <div className="absolute inset-y-0 left-0 right-0 z-20 flex items-center justify-between px-6 md:px-10 pointer-events-none">
        <button
          onClick={prevSlide}
          className="pointer-events-auto p-4 rounded-full 
          bg-white/10  border border-white/30 
          text-white hover:bg-white/20 transition-all 
          hover:scale-110"
        >
          <ChevronLeft size={26} />
        </button>

        <button
          onClick={nextSlide}
          className="pointer-events-auto p-4 rounded-full 
          bg-white/10 border border-white/30 
          text-white hover:bg-white/20 transition-all 
          hover:scale-110"
        >
          <ChevronRight size={26} />
        </button>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.4 }}
          className="max-w-6xl text-center"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 mb-5 px-6 py-2 
            rounded-full text-xs sm:text-sm font-semibold tracking-widest 
            uppercase text-amber-200 bg-white/10 backdrop-blur-lg 
            border border-amber-400/30 shadow-[0_0_25px_rgba(251,191,36,0.25)]"
          >
            PREMIUM REAL ESTATE • MUMBAI
          </motion.span>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl 
  font-extrabold text-white leading-[1.1] tracking-tight mb-6"
          >
            Delivering{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Quality Real Estate
              </span>
              <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-70" />
            </span>
            <br />
            <span className="text-white/90">
              Solutions Across{" "}
              <span className="bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                Maharashtra
              </span>
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base sm:text-lg md:text-xl text-gray-300 
            max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Handpicked premium residences in Mumbai’s most desirable locations —
            designed for elegance, comfort, and long-term value.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row justify-center gap-5"
          >
            <motion.div
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 35px rgba(251,191,36,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/properties"
                className="inline-block px-10 py-4 rounded-full 
                font-semibold text-gray-900 
                bg-gradient-to-br from-amber-500 to-yellow-500 
                shadow-xl transition-all"
              >
                Explore Properties
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block px-10 py-4 rounded-full 
                font-semibold text-white 
                bg-white/10 backdrop-blur-md 
                border border-white/30 hover:bg-white/20 
                transition-all"
              >
                Book a Consultation
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={container}
            className="mt-14 flex flex-wrap justify-center gap-4"
          >
            {[
              "RERA-Verified Properties",
              "Trusted Real Estate Advisors",
              "Prime Locations Across Maharashtra",
              "Transparent & Secure Deals",
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4 }}
                className="px-5 py-2 rounded-full text-xs sm:text-sm 
                font-semibold tracking-wide text-amber-200 
                bg-white/10 backdrop-blur-lg 
                border border-amber-400/30 
                shadow-[0_0_20px_rgba(251,191,36,0.18)]"
              >
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      {/* SLIDER PAGINATION / DIVIDER */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {images.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            className="relative h-2 rounded-full overflow-hidden"
            animate={{
              width: index === i ? 36 : 10,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            style={{
              background: "rgba(255,255,255,0.25)",
            }}
          >
            {index === i && (
              <motion.span
                layoutId="activeSlide"
                className="absolute inset-0 rounded-full 
          bg-gradient-to-r from-amber-400 to-orange-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{ transformOrigin: "left" }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </section>
  );
};

export default HomeHero;
