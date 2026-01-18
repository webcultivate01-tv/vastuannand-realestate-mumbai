"use client";

import React from "react";
import { Link } from "react-router-dom";

const MumbaiInvestment2025 = () => {
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

        {/* Header */}
        <header className="mt-8">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
            Top Neighborhoods in Mumbai for Investment in 2025
          </h1>

          <p className="mt-4 text-gray-500 text-sm">
            Investment · 9 min read · December 15, 2025
          </p>
        </header>

        {/* Hero Image */}
        <div className="mt-10">
          <img
            src="/img2.webp"
            alt="Mumbai real estate investment areas"
            className="w-full h-[360px] object-cover rounded-xl"
          />
        </div>

        {/* Content */}
        <article className="mt-12 space-y-8 text-lg leading-relaxed text-gray-700">
          <p>
            Mumbai remains one of India’s strongest real estate investment
            markets, driven by limited land availability, consistent tenant
            demand, and large-scale infrastructure development. For investors,
            selecting the right micro-market is crucial to maximizing rental
            yields and long-term capital appreciation.
          </p>

          <p>
            In this guide, we analyze four of Mumbai’s most promising investment
            destinations for 2025—Bandra, Powai, Thane, and Navi Mumbai—based on
            entry pricing, rental demand, infrastructure pipelines, and future
            growth potential.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            Bandra – Premium & Stable Returns
          </h2>
          <p>
            Bandra continues to attract high-net-worth individuals and corporate
            tenants due to its central location, lifestyle amenities, and strong
            social infrastructure. Entry prices are among the highest in Mumbai,
            but rental demand remains consistent.
          </p>
          <p>
            Investors can expect stable yields of 2.5–3% with strong capital
            preservation and long-term appreciation, making Bandra ideal for
            low-risk investors.
          </p>

          <img
            src="/img5.webp"
            alt="Bandra Mumbai real estate"
            className="w-full rounded-xl"
          />

          <h2 className="text-2xl font-semibold text-gray-900">
            Powai – Tech-Driven Rental Demand
          </h2>
          <p>
            Powai has evolved into a self-sustained township supported by IT
            parks, educational institutions, and premium residential projects.
            The area enjoys strong rental absorption due to professionals
            working in nearby business hubs.
          </p>
          <p>
            Entry prices remain relatively lower than South Mumbai, while rental
            yields average between 3–3.5%, making Powai a balanced option for
            both rental income and appreciation.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            Thane – High Growth Potential
          </h2>
          <p>
            Thane has transformed from a suburban extension into a major
            residential and commercial center. Metro connectivity, new highways,
            and large township projects are driving demand.
          </p>
          <p>
            Investors entering Thane can benefit from comparatively affordable
            pricing, yields of 3–4%, and strong appreciation over a 3–5 year
            horizon.
          </p>

          <img
            src="/img3.webp"
            alt="Thane real estate growth"
            className="w-full rounded-xl"
          />

          <h2 className="text-2xl font-semibold text-gray-900">
            Navi Mumbai – Infrastructure-Led Upside
          </h2>
          <p>
            Navi Mumbai is emerging as one of the most promising long-term
            investment destinations. The upcoming international airport, metro
            lines, and business districts are expected to significantly boost
            demand.
          </p>
          <p>
            Entry prices are still accessible, while rental yields range from
            3.5–4%. Investors with a medium to long-term outlook may see
            substantial capital growth.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900">
            Investment Outlook for 2025
          </h2>
          <p>
            Each of these micro-markets serves a different investor profile.
            Bandra offers stability, Powai balances yield and lifestyle, Thane
            provides growth, and Navi Mumbai delivers infrastructure-led
            appreciation.
          </p>

          <p className="pt-6 text-gray-900 font-medium">
            Choosing the right neighborhood based on your risk appetite, budget,
            and investment horizon can help you build a resilient real estate
            portfolio in Mumbai’s evolving market.
          </p>
        </article>
      </div>
    </section>
  );
};

export default MumbaiInvestment2025;
