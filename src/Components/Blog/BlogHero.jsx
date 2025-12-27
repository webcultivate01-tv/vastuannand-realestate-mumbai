import React from 'react';

const BlogHero = () => {
  return (
    <section className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Real Estate Blog
        </h1>
        <p className="text-xl text-gray-800 max-w-2xl mx-auto">
          Stay updated with the latest insights, tips, and trends in Mumbai's
          real estate market.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
