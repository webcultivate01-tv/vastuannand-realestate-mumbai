import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'PP',
      title: 'Premium Properties',
      description: 'Carefully curated selection of luxury apartments and villas in prime Mumbai locations.',
    },
    {
      icon: 'TS',
      title: 'Trusted Service',
      description: 'Over 15 years of excellence in real estate with thousands of satisfied clients.',
    },
    {
      icon: 'BP',
      title: 'Best Pricing',
      description: 'Competitive rates and transparent pricing with no hidden charges or fees.',
    },
    {
      icon: 'S',
      title: '24/7 Support',
      description: 'Round-the-clock customer support to assist you at every step of your journey.',
    },
  ];

  return (
    <section className="py-10 bg-white mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide exceptional real estate services that make your property
            journey seamless and rewarding.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image on Left */}
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="/img2.webp" 
              alt="Luxury Property" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>

          {/* Features on Right */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-amber-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:translate-x-2 border-l-4 border-amber-500"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-br from-amber-500 to-yellow-500 text-gray-900 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;