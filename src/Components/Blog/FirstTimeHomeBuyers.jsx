"use client";

import React from "react";
import { Link } from "react-router-dom";

const FirstTimeHomeBuyersMumbai = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* Back */}
        <Link
          to="/blog"
          className="text-sm text-gray-500 hover:text-black transition"
        >
          ← Back to Blogs
        </Link>

        {/* Title */}
        <header className="mt-8">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            10 Tips for First-Time Home Buyers in Mumbai
          </h1>

          <p className="mt-4 text-gray-500 text-sm">
            Buying Guide · 8 min read · December 20, 2025
          </p>
        </header>

        {/* Hero Image */}
        <div className="mt-10">
          <img
            src="/hero1.webp"
            alt="First time home buyers in Mumbai"
            className="w-full h-[360px] object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <article className="mt-12 space-y-8 text-lg leading-relaxed text-gray-700">
          <p>
            Buying your first home in Mumbai is both an emotional milestone and
            a significant financial commitment. With rising property prices,
            complex documentation, and endless project choices, many first-time
            buyers feel overwhelmed before they even begin.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            1. Set a Realistic Budget
          </h2>
          <p>
            Start by defining a budget that includes not only the property price
            but also stamp duty, registration charges, GST, interiors, and
            emergency reserves. A clear budget prevents financial stress later.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            2. Get Home Loan Pre-Approval
          </h2>
          <p>
            A pre-approved loan gives clarity on eligibility and strengthens
            your position during negotiations. It also saves time once you
            finalize a property.
          </p>

          <img
            src="/img2.webp"
            alt="Budget planning"
            className="w-full rounded-xl"
          />

          <h2 className="text-2xl font-semibold text-gray-900">
            3. Choose the Right Location
          </h2>
          <p>
            Location plays a major role in lifestyle and future appreciation.
            Consider commute time, connectivity, and upcoming infrastructure
            projects before deciding.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            4. Verify Builder Reputation
          </h2>
          <p>
            Always research the developer’s track record, past project
            deliveries, and customer reviews. A reputed builder reduces the risk
            of delays and quality issues.
          </p>

          <img
            src="/img3.webp"
            alt="Mumbai residential areas"
            className="w-full rounded-xl"
          />

          <h2 className="text-2xl font-semibold text-gray-900">
            5. Understand Carpet Area
          </h2>
          <p>
            Compare properties based on carpet area — the actual usable space
            inside your home — rather than built-up or super built-up area.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            6. Check Legal Documentation
          </h2>
          <p>
            Ensure the project is RERA registered and all approvals are in
            place. Legal clarity protects your investment in the long run.
          </p>

          <img
            src="/img10.webp"
            alt="Property documentation"
            className="w-full rounded-xl"
          />

          <h2 className="text-2xl font-semibold text-gray-900">
            7–10. Visit, Negotiate & Think Long-Term
          </h2>
          <p>
            Visit the site multiple times, evaluate maintenance costs, negotiate
            smartly, and think about resale or rental potential. A long-term
            view ensures a confident purchase.
          </p>

          <p className="pt-6 text-gray-900 font-medium">
            With careful planning and due diligence, buying your first home in
            Mumbai can be a rewarding step toward long-term security.
          </p>
        </article>
      </div>
    </section>
  );
};

export default FirstTimeHomeBuyersMumbai;
