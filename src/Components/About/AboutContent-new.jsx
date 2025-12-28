import React from 'react';

const AboutContent = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Who We Are
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-3 md:mb-4 leading-relaxed">
              Vastu Anand is a Mumbai-based real estate consultancy known for
              honest advice, verified listings, and smooth transactions. We help
              home-seekers, investors, and businesses make confident property
              decisions across the city's leading neighborhoods.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              With a client-first mindset, we combine local market intelligence
              with meticulous due diligence—so you spend less time searching and
              more time moving forward.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg md:rounded-xl order-first md:order-last">
            <img
              src="/img7.avif"
              alt="Premium urban skyline with modern residences"
              className="w-full h-64 sm:h-80 md:h-[22rem] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* What We Do */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className="overflow-hidden rounded-lg md:rounded-xl">
            <img
              src="/img8.avif"
              alt="Contemporary office interior and retail design"
              className="w-full h-64 sm:h-80 md:h-[22rem] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              What We Do
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-3 md:mb-4 leading-relaxed">
              We specialize in curated property solutions for residential,
              commercial, and hospitality needs—covering leasing, purchase, and
              sale of apartments, offices, retail spaces, hotels, and resorts.
            </p>
            <ul className="space-y-2 md:space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-amber-500 flex-shrink-0" />
                <span className="text-sm md:text-base">Industrial-ready options for warehousing and logistics.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-amber-500 flex-shrink-0" />
                <span className="text-sm md:text-base">Premium commercial spaces across prime business hubs.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-amber-500 flex-shrink-0" />
                <span className="text-sm md:text-base">Hospitality transactions for hotels, resorts, and stays.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-amber-500 flex-shrink-0" />
                <span className="text-sm md:text-base">End-to-end support—from shortlisting to closure.</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-amber-500 flex-shrink-0" />
                <span className="text-sm md:text-base">Customized solutions based on budget, location, and goals.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Our Strengths */}
        <div className="mb-12 md:mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Our Strengths
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Strength 1 */}
            <div className="bg-white rounded-lg md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Deep Local Expertise</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Extensive knowledge of Mumbai's micro-markets, neighborhoods, and emerging areas with real-time market intelligence.
              </p>
            </div>

            {/* Strength 2 */}
            <div className="bg-white rounded-lg md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Trusted Network</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Strong relationships with property owners, developers, and industry partners ensuring access to exclusive opportunities.
              </p>
            </div>

            {/* Strength 3 */}
            <div className="bg-white rounded-lg md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Transparent & Ethical</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Complete transparency in all dealings with verified listings, honest advice, and ethical practices from start to finish.
              </p>
            </div>

            {/* Strength 4 */}
            <div className="bg-white rounded-lg md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Fast Access</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Curated inventory of verified, high-quality listings with priority access to exclusive pre-launch opportunities.
              </p>
            </div>

            {/* Strength 5 */}
            <div className="bg-white rounded-lg md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h-2M20 7l-2 2m0 0l-2-2m2 2v2.5a2.5 2.5 0 01-5 0V9" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Expert Negotiation</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Skilled negotiators who secure best-value outcomes and maximize returns for every property transaction.
              </p>
            </div>

            {/* Strength 6 */}
            <div className="bg-white rounded-lg md:rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6">
                <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m7 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Legal Clarity</h4>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Complete documentation guidance and legal support ensuring clean, secure, and hassle-free property closures.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="overflow-hidden rounded-lg md:rounded-xl order-first md:order-last">
            <img
              src="/img9.webp"
              alt="Clients and advisors collaborating on property decisions"
              className="w-full h-64 sm:h-80 md:h-[22rem] object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Our Vision & Mission
            </h3>
            <p className="text-base sm:text-lg text-gray-700 mb-3 md:mb-4 leading-relaxed">
              Vision: To be Mumbai's most trusted partner for transparent,
              insight-led property decisions that create long-term value.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
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
