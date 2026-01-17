import React from "react";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "../../constants/navigation";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const ContactInfo = () => {
  return (
    <section className="relative py-20 bg-gray-50 overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top-left bigger, more intense */}
        <div className="absolute top-[-20%] left-[-20%] w-128 h-128 rounded-full bg-gradient-to-br from-amber-300 to-orange-500 opacity-30 blur-4xl animate-spin-slow" />
        <div className="absolute top-[-10%] left-[-10%] w-80 h-80 rounded-full bg-gradient-to-br from-amber-200 to-orange-400 opacity-40 blur-3xl animate-spin-slower" />

        {/* Bottom-right bigger, more intense */}
        <div className="absolute bottom-[-20%] right-[-15%] w-128 h-128 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 opacity-25 blur-4xl animate-spin-reverse-slow" />
        <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 opacity-30 blur-3xl animate-spin-reverse" />
      </div>

      {/* Floating Texts */}
      <div className="absolute top-10 left-5 text-4xl font-extrabold text-amber-100 opacity-10 rotate-12 select-none pointer-events-none">
        CONNECT
      </div>
      <div className="absolute bottom-20 right-10 text-4xl font-extrabold text-orange-100 opacity-10 -rotate-12 select-none pointer-events-none">
        VISIT
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <motion.h2
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3"
        >
          Reach Out to Our Experts
        </motion.h2>
        <motion.p
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Personalized guidance, verified listings, and complete transparency —
          <span className="font-semibold text-orange-500">
            {" "}
            we make property decisions effortless!
          </span>
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative mb-12 flex justify-center"
        >
          <div className="absolute w-64 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-60" />
          <span className="absolute w-4 h-4 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 animate-ping opacity-60" />
          <span className="relative w-3 h-3 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 shadow-lg" />
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Phone */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-amber-400 transition-all duration-300 relative overflow-hidden"
          >
            <div className="relative w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
            <p className="text-orange-500 text-lg font-semibold">
              {CONTACT_INFO.phone}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Available Mon-Sun • 9:00 AM - 8:00 PM
            </p>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-amber-400 transition-all duration-300 relative overflow-hidden"
          >
            <div className="relative w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
            <p className="text-orange-500 text-lg font-semibold break-all">
              {CONTACT_INFO.email}
            </p>
            <p className="text-gray-500 text-sm mt-2">
              We respond within 24 hours
            </p>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, y: -5 }}
            className="group bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent hover:border-amber-400 transition-all duration-300 relative overflow-hidden"
          >
            <div className="relative w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Locations</h3>
            <div className="text-orange-500 text-lg font-semibold space-y-2">
              <p>{CONTACT_INFO.address[0]}</p>
              <p>{CONTACT_INFO.address[1]}</p>
              <p>{CONTACT_INFO.address[2]}</p>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Visit any of our offices for in-person consultation
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfo;
