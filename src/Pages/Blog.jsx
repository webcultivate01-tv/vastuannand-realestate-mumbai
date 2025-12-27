import React from 'react';
import BlogHero from '../Components/Blog/BlogHero';
import BlogCategories from '../Components/Blog/BlogCategories';
import BlogGrid from '../Components/Blog/BlogGrid';
import Newsletter from '../Components/Blog/Newsletter';

const Blog = () => {
  return (
    <div className="min-h-screen mt-24 bg-gray-50">
      <BlogHero />
      <BlogCategories />
      <BlogGrid />
      <Newsletter />
    </div>
  );
};

export default Blog;
