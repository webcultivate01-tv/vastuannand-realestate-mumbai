import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-neutral-900">
      {/* BACKGROUND IMAGE WITH SOFT CUT */}
      <div
        className="absolute inset-0"
        style={{
          clipPath: "polygon(0 0, 62% 0, 52% 100%, 0% 100%)",
        }}
      >
        <img
          src="/aboutHero.avif"
          alt="Vastu Anand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[90vh] flex items-center px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14 w-full">
          {/* TEXT GLASS PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="max-w-xl bg-black/55 rounded-2xl p-10 shadow-xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
              Vastu <span className="text-orange-400">Anand</span>
            </h1>

            <p className="text-lg text-white/90 mb-4">
              Mumbai’s trusted real estate partner with{" "}
              <span className="text-orange-300 font-semibold">15+ years</span>{" "}
              of excellence.
            </p>

            <p className="text-md text-white/75 mb-8">
              Curated luxury homes, premium apartments, and commercial spaces
              crafted for comfort, growth, and long-term value.
            </p>

            <a
              href="/contact#contact"
              className="inline-flex items-center justify-center
               bg-orange-500 hover:bg-orange-600
               text-white font-semibold py-3 px-8 rounded-full
               shadow-lg transition-all duration-300"
            >
              Schedule a Visit
            </a>
          </motion.div>

          {/* RIGHT FEATURE IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex justify-end"
          >
            <div className="relative w-[400px] h-[520px] rounded-3xl overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
              <img
                src="/aboutHero2.avif"
                alt="Luxury Property"
                className="w-full h-full object-cover"
              />

              {/* ORANGE ACCENT STRIP */}
              <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
