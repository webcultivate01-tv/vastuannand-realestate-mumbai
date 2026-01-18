import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const FeaturesSection = () => {
  const features = [
    {
      icon: "PP",
      title: "Premium Properties",
      description:
        "Handpicked luxury apartments & villas in Mumbai’s most desirable locations.",
    },
    {
      icon: "TS",
      title: "Trusted Expertise",
      description:
        "4+ years of real estate excellence backed by thousands of happy clients.",
    },
    {
      icon: "BP",
      title: "Best Market Pricing",
      description:
        "Transparent pricing with zero hidden costs and maximum value.",
    },
    {
      icon: "24",
      title: "24/7 Dedicated Support",
      description:
        "Personal assistance from discovery to final possession — always available.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 bg-white overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-amber-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading (REPLAYS) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }} // 🔥 replay enabled
          transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why Clients Choose <span className="text-orange-500">Us</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don’t just sell properties — we deliver confidence, clarity &
            value.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – MULTI IMAGE STACK (REPLAYS) */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }} // 🔥 replay enabled
            transition={{ duration: 1 }}
            className="relative h-[560px]"
          >
            {/* Image 1 */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="absolute top-0 left-0 w-[80%] h-[80%] rounded-3xl overflow-hidden shadow-2xl"
            >
              <img
                src="/img2.webp"
                alt="Luxury Property"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute bottom-0 right-0 w-[60%] h-[60%] rounded-3xl overflow-hidden shadow-xl border-8 border-white"
            >
              <img
                src="/whyUs2.avif"
                alt="Interior"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Image 3 (Floating) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -bottom-10 left-6 w-40 h-40 rounded-2xl overflow-hidden shadow-lg border-4 border-white"
            >
              <img
                src="/whyUs3.avif"
                alt="Building"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-6 right-6 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl shadow-lg text-sm font-semibold"
            >
              4+ Years Experience
            </motion.div>
          </motion.div>

          {/* RIGHT – FEATURES (REPLAYS) */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }} // 🔥 replay enabled
            className="space-y-7"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.04, x: 10 }}
                className="group bg-white border border-orange-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-orange-600 transition">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
