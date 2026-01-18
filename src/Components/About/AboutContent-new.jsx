import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const AboutContent = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
    }),
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 space-y-32">
        {/* WHO WE ARE */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE (LEFT) */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[4/3]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img
              src="/img7.avif"
              alt="Urban skyline"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* TEXT (RIGHT) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            variants={fadeUp}
            className="flex flex-col justify-center"
          >
            <span className="inline-block text-orange-500 font-semibold tracking-wide mb-3">
              ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              <span className="text-black">Who</span>{" "}
              <span className="text-orange-500">We Are</span>
            </h2>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              Vastu Anand is a Mumbai-based real estate consultancy built on
              trust, transparency, and deep market expertise. We guide buyers,
              investors, and businesses toward confident property decisions.
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "15+ years of deep market expertise",
                "Verified listings with complete transparency",
                "Tailored solutions for residential & commercial projects",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/contact#contact"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300"
            >
              Schedule a Consultation
            </a>
          </motion.div>
        </div>

        {/* WHAT WE DO */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* TEXT (LEFT) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.1}
            variants={fadeUp}
          >
            <span className="inline-block text-orange-500 font-semibold tracking-wide mb-3">
              OUR SERVICES
            </span>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="text-black">What</span>{" "}
              <span className="text-orange-500">We Do</span>
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Tailored property solutions across residential, commercial, and
              hospitality sectors—covering leasing, sales, and purchases with
              end-to-end support.
            </p>

            <ul className="space-y-3">
              {[
                "Industrial-ready warehousing & logistics spaces",
                "Premium commercial offices in prime hubs",
                "Hospitality transactions including hotels & resorts",
                "End-to-end guidance from shortlisting to closure",
                "Customized solutions aligned with budget and goals",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-orange-500 w-5 h-5 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#projects"
              className="inline-block mt-6 bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            >
              View Properties
            </a>
          </motion.div>

          {/* IMAGE (RIGHT) */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[4/3]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img
              src="/img8.avif"
              alt="Commercial spaces"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* STRENGTHS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.1}
          variants={fadeUp}
          className="text-center"
        >
          <span className="inline-block text-orange-500 font-semibold tracking-wide mb-3">
            WHY CHOOSE US
          </span>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-12">
            <span className="text-black">Our</span>{" "}
            <span className="text-orange-500">Strengths</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
              >
                <div className="h-1 w-12 bg-orange-500 rounded mb-5" />
                <h4 className="text-xl font-bold text-black mb-3">
                  {
                    [
                      "Deep Local Expertise",
                      "Trusted Network",
                      "Transparent & Ethical",
                      "Fast Access",
                      "Expert Negotiation",
                      "Legal Clarity",
                    ][i]
                  }
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {
                    [
                      "In-depth knowledge of Mumbai’s micro-markets and emerging zones.",
                      "Strong ties with developers, owners, and industry leaders.",
                      "Verified listings, honest advice, and complete transparency.",
                      "Priority access to exclusive and pre-launch opportunities.",
                      "Maximizing value through skilled negotiation strategies.",
                      "Complete documentation and compliance support.",
                    ][i]
                  }
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* VISION & MISSION */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* IMAGE (LEFT) */}
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] md:aspect-[4/3]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={imageVariants}
          >
            <img
              src="/img9.webp"
              alt="Client collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* TEXT (RIGHT) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.2}
            variants={fadeUp}
          >
            <span className="inline-block text-orange-500 font-semibold tracking-wide mb-3">
              OUR PURPOSE
            </span>
            <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
              <span className="text-black">Vision</span>{" "}
              <span className="text-orange-500">& Mission</span>
            </h3>
            <p className="text-lg text-gray-700 mb-5 leading-relaxed">
              <strong>Vision:</strong> To be Mumbai’s most trusted real estate
              partner for transparent and insight-led property decisions.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Mission:</strong> Deliver ethical, personalized, and
              data-backed real estate solutions that simplify complexity and
              create lasting value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
