import React from 'react';
import HeroSection from '../Components/Home/HeroSection';
import StatsSection from '../Components/Home/StatsSection';
import FeaturesSection from '../Components/Home/FeaturesSection';
import PropertyTypesSection from '../Components/Home/PropertyTypesSection';
import CTASection from '../Components/Home/CTASection';

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PropertyTypesSection />
      <CTASection />
    </div>
  );
};

export default Home;
