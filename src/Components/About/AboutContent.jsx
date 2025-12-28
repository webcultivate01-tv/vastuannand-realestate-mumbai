import React from 'react';

const AboutContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Vastu Anand is a Mumbai-based real estate consultancy known for
              honest advice, verified listings, and smooth transactions. We help
              home-seekers, investors, and businesses make confident property
              decisions across the city’s leading neighborhoods.
            </p>
            <p className="text-lg text-gray-700">
              With a client-first mindset, we combine local market intelligence
              with meticulous due diligence—so you spend less time searching and
              more time moving forward.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl">
            <img
              src="/img7.avif"
              alt="Premium urban skyline with modern residences"
              className="w-full h-[22rem] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* What We Do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-2 md:order-2">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              We specialize in curated property solutions for residential,
              commercial, and hospitality needs—covering leasing, purchase, and
              sale of apartments, offices, retail spaces, hotels, and resorts.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span>Industrial-ready options for warehousing and logistics.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span>Premium commercial spaces across prime business hubs.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span>Hospitality transactions for hotels, resorts, and stays.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span>End-to-end support—from shortlisting to closure.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span>Customized solutions based on budget, location, and goals.</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-1 overflow-hidden rounded-xl">
            <img
              src="/img8.avif"
              alt="Contemporary office interior and retail design"
              className="w-full h-[22rem] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Our Strengths */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-10 mb-16">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Strengths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span>Deep local expertise across Mumbai micro-markets.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span>Trusted network of owners, developers, and partners.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span>Transparent process and ethical dealings, start to finish.</span>
              </li>
            </ul>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span>Fast access to verified, high-quality listings.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span>Negotiation support to secure value-driven outcomes.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span>Documentation guidance for a clean, secure closure.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-xl">
            <img
              src="/img9.webp"
              alt="Clients and advisors collaborating on property decisions"
              className="w-full h-[22rem] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Vision & Mission
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Vision: To be Mumbai’s most trusted partner for transparent,
              insight-led property decisions that create long-term value.
            </p>
            <p className="text-lg text-gray-700">
              Mission: Deliver personalized, ethical, and data-backed real
              estate solutions—simplifying complexity and elevating outcomes for
              every client we serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
