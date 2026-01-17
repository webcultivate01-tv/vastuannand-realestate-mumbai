import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What areas in Mumbai do you cover?",
    answer:
      "We specialize in properties across major Mumbai neighborhoods including South, Central, North, and suburban areas. Our local expertise spans micro-markets like Bandra, Worli, Andheri, Navi Mumbai, and more.",
  },
  {
    question: "How much do your consultation services cost?",
    answer:
      "Our consultation services are complimentary for prospective clients. We work on transparent commission models for property transactions. Contact us for a customized quote.",
  },
  {
    question: "Do you help with property documentation and legal processes?",
    answer:
      "Yes, we provide complete documentation guidance and connect you with trusted legal advisors to ensure all paperwork is properly reviewed and legally compliant.",
  },
  {
    question: "Can you help if I'm looking to rent a property?",
    answer:
      "Absolutely! We assist with residential and commercial rentals, handling end-to-end support including negotiation and documentation.",
  },
  {
    question: "What makes Vastu Anand different from other agencies?",
    answer:
      "We stand out through honest advice, verified listings, exclusive pre-launch access, and a client-first approach, ensuring value-driven outcomes.",
  },
];

const FAQBlackOrange = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="relative mb-12 mr-10 ml-10 overflow-hidden rounded-3xl">
      {/* Black → Burnt Orange Gradient Background */}
      <motion.div
        className="absolute inset-0 rounded-3xl"
        style={{
          background: "linear-gradient(270deg, #0d0d0d, #b85c2e, #0d0d0d)",
          backgroundSize: "800% 800%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Overlay for depth */}
      <div className="absolute inset-0 bg-black/30 rounded-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 py-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-sm md:text-md text-white/80 max-w-lg mx-auto">
            Find answers to common questions about our services and property
            transactions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 overflow-hidden shadow-md hover:shadow-orange-600/50 transition-all duration-400"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 py-3 flex items-center justify-between hover:bg-white/20 transition-colors duration-300"
                >
                  <h3 className="text-left font-semibold text-white text-sm md:text-base">
                    {faq.question}
                  </h3>

                  <motion.svg
                    className={`w-5 h-5 text-orange-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </motion.svg>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-4 py-3 bg-white/10 border-t border-white/20"
                    >
                      <p className="text-white/90 leading-relaxed text-sm md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 bg-orange-700 hover:bg-orange-600 transition-colors duration-300 rounded-lg px-5 py-4 text-center shadow-lg cursor-pointer"
            >
              <p className="text-white font-semibold text-sm md:text-base">
                Can't find your answer?{" "}
                <span className="underline">Contact Us Now</span>
              </p>
            </motion.div>
          </div>

          {/* Right-side image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full rounded-xl overflow-hidden"
          >
            <motion.img
              src="/FAQ.webp"
              alt="Real Estate"
              className="w-full h-[250px] md:h-[300px] object-cover rounded-xl shadow-md"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />

            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.5 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute top-0 left-0 transform -translate-x-6 -translate-y-6 
             bg-gradient-to-r from-black/70 via-orange-700/80 to-orange-600/80
             text-white px-5 py-4 rounded-2xl shadow-xl hover:scale-105 
             transition-transform duration-300 flex flex-col items-start space-y-1 cursor-pointer z-20"
            >
              <p className="font-bold text-sm md:text-base flex items-center gap-2">
                🔑 Trusted Property Experts
              </p>
              <p className="text-xs md:text-sm opacity-90">
                1000+ Happy Clients
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQBlackOrange;
