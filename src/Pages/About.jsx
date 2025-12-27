import React from 'react';
import AboutHero from '../Components/About/AboutHero';
import AboutContent from '../Components/About/AboutContent';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <AboutContent />
    </div>
  );
};

export default About;
