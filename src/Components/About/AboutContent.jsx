import React from 'react';

const AboutContent = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Founded in 2010, Vastu Anand Real Estate has been at the forefront
              of Mumbai's property market, helping thousands of families find
              their dream homes.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our commitment to excellence, transparency, and customer
              satisfaction has made us one of the most trusted names in the
              industry.
            </p>
            <p className="text-lg text-gray-600">
              We believe that finding a home is more than just a transaction –
              it's about discovering a space where memories are made and dreams
              come true.
            </p>
          </div>
          <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-xl h-96 flex items-center justify-center text-9xl">
            🏢
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
