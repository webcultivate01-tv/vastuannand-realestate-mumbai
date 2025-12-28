import React from 'react';

const AboutContent = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Who We Are */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-start mb-16">
          <div className="order-2 md:order-1 space-y-5">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">
              What We Do
            </h3>
            <p className="text-lg text-gray-700">
              We specialize in curated property solutions for residential,
              commercial, and hospitality needs—covering leasing, purchase, and
              sale of apartments, offices, retail spaces, hotels, and resorts.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span className="leading-relaxed">Industrial-ready options for warehousing and logistics.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span className="leading-relaxed">Premium commercial spaces across prime business hubs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span className="leading-relaxed">Hospitality transactions for hotels, resorts, and stays.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span className="leading-relaxed">End-to-end support—from shortlisting to closure.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-amber-500" />
                <span className="leading-relaxed">Customized solutions based on budget, location, and goals.</span>
              </li>
            </ul>
          </div>
          <div className="order-1 md:order-2 overflow-hidden rounded-xl">
            <img
              src="/img8.avif"
              alt="Contemporary office interior and retail design"
              className="w-full h-[22rem] object-cover"
              loading="lazy"
            />
          </div>
        </div>

       

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
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

          <div className="overflow-hidden rounded-xl">
            <img
              src="/img9.webp"
              alt="Clients and advisors collaborating on property decisions"
              className="w-full h-[22rem] object-cover"
              loading="lazy"
            />
          </div>
        </div>

         {/* Our Strengths */}
        <div className="mb-20 mt-20">
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            Our Strengths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Strength 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500">
              <h4 className="text-xl font-bold text-gray-900 mb-3">Deep Local Expertise</h4>
              <p className="text-gray-600 leading-relaxed">
                Extensive knowledge of Mumbai's micro-markets, neighborhoods, and emerging areas with real-time market intelligence.
              </p>
            </div>

            {/* Strength 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500">
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">Trusted Network</h4>
              <p className="text-gray-600 leading-relaxed">
                Strong relationships with property owners, developers, and industry partners ensuring access to exclusive opportunities.
              </p>
            </div>

            {/* Strength 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500">
             
              <h4 className="text-xl font-bold text-gray-900 mb-3">Transparent & Ethical</h4>
              <p className="text-gray-600 leading-relaxed">
                Complete transparency in all dealings with verified listings, honest advice, and ethical practices from start to finish.
              </p>
            </div>

            {/* Strength 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500">
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">Fast Access</h4>
              <p className="text-gray-600 leading-relaxed">
                Curated inventory of verified, high-quality listings with priority access to exclusive pre-launch opportunities.
              </p>
            </div>

            {/* Strength 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500">
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">Expert Negotiation</h4>
              <p className="text-gray-600 leading-relaxed">
                Skilled negotiators who secure best-value outcomes and maximize returns for every property transaction.
              </p>
            </div>

            {/* Strength 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-amber-500">
              
              <h4 className="text-xl font-bold text-gray-900 mb-3">Legal Clarity</h4>
              <p className="text-gray-600 leading-relaxed">
                Complete documentation guidance and legal support ensuring clean, secure, and hassle-free property closures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
