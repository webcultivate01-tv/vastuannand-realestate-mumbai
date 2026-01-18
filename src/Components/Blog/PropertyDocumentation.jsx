"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, ShieldCheck, Search, AlertTriangle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const PropertyDocumentationIndia = () => {
  return (
    <section className="bg-white">
      {/* ================= HERO ================= */}
      <div className="relative h-[75vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1920&auto=format&fit=crop"
          alt="Property documentation in India"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative text-center text-white px-6 max-w-4xl"
        >
          <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur text-sm font-semibold">
            Legal Guide • 7 min read
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Understanding Property Documentation in India
          </h1>
          <p className="mt-5 text-lg text-gray-200">
            Registration, sale deeds, title verification, and legal red flags
            every property buyer must understand.
          </p>
        </motion.div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20 space-y-24">
        {/* INTRO */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xl text-gray-700 leading-relaxed max-w-4xl"
        >
          Property documentation forms the legal backbone of ownership in India.
          Even a single missing or incorrect document can turn a dream home into
          a long legal battle. Smart buyers verify paperwork before making any
          financial commitment.
        </motion.p>

        {/* SECTION 1 */}
        <motion.div
          className="grid md:grid-cols-2 gap-14 items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div>
            <h2 className="text-3xl font-semibold mb-5 flex items-center gap-3">
              <FileText className="text-amber-600" />
              Sale Deed & Registration
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The sale deed is the most critical document in a property
              transaction. It legally transfers ownership from seller to buyer
              and must be registered with the local sub-registrar.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Always verify carpet area, boundaries, consideration value, and
              seller details. Any mismatch between documents and approved plans
              is a serious red flag.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1450101215322-bf5cd27642fc?q=80&w=1400&auto=format&fit=crop"
              alt="Sale deed registration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>
        </motion.div>

        {/* SECTION 2 */}
        <motion.div
          className="grid md:grid-cols-2 gap-14 items-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="order-2 md:order-1 relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=1400&auto=format&fit=crop"
              alt="Property title search"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-semibold mb-5 flex items-center gap-3">
              <Search className="text-amber-600" />
              Title Search & Ownership History
            </h2>
            <p className="text-gray-700 leading-relaxed">
              A title search verifies whether the seller has a clear and
              marketable title. Lawyers typically examine ownership records over
              the past 30 years.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Skipping title verification can result in litigation or loss of
              ownership. Legal due diligence is not optional.
            </p>
          </div>
        </motion.div>

        {/* SECTION 3 */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <h2 className="text-3xl font-semibold mb-6 flex items-center gap-3">
            <ShieldCheck className="text-amber-600" />
            Encumbrance Certificate & Approvals
          </h2>
          <p className="text-gray-700 leading-relaxed">
            An Encumbrance Certificate (EC) confirms whether the property is
            free from loans, legal disputes, or liabilities. Buyers should also
            verify occupancy certificates, building approvals, and RERA
            registration.
          </p>
        </motion.div>

        {/* RED FLAGS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-red-50 border border-red-200 rounded-3xl p-10"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3 text-red-600">
            <AlertTriangle />
            Common Red Flags Buyers Ignore
          </h3>
          <ul className="space-y-4 text-gray-700 list-disc list-inside text-lg">
            <li>Mismatch between approved plans and actual construction</li>
            <li>Unregistered agreements or power-of-attorney sales</li>
            <li>Pending loans, liens, or court cases</li>
            <li>Missing occupancy or completion certificates</li>
          </ul>
        </motion.div>

        {/* CONCLUSION */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-xl font-medium text-gray-800 max-w-4xl"
        >
          Property documentation is not just paperwork—it is protection. A
          legally verified property ensures peace of mind, resale value, and
          long-term security. Smart buyers always verify documents before making
          payments.
        </motion.p>
      </div>
    </section>
  );
};

export default PropertyDocumentationIndia;
