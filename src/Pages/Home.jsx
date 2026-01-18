import React from "react";
import HeroSection from "../Components/Home/HeroSection";
import StatsSection from "../Components/Home/StatsSection";
import FeaturesSection from "../Components/Home/WhyUs";
import PropertyTypesSection from "../Components/Home/PropertyTypesSection";
import CTASection from "../Components/Home/CTASection";
import WhyUs from "../Components/Home/WhyUs";
import Services from "../Components/Home/Services";
import TestimonialSection from "../Components/Home/Testinomail";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      {/* <StatsSection /> */}
      <WhyUs />
      <Services />
      <PropertyTypesSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default Home;
