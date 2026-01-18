import React from "react";
import AboutHero from "../Components/About/AboutHero";
import AboutContent from "../Components/About/AboutContent-new";

const About = () => {
  return (
    <div className="min-h-screen mt-24 bg-gray-50">
      <AboutHero />
      <AboutContent />
    </div>
  );
};

export default About;
