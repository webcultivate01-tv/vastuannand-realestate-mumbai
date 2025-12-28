import React from 'react';
import ContactHero from '../Components/Contact/ContactHero';
import ContactInfo from '../Components/Contact/ContactInfo';
import ContactForm from '../Components/Contact/ContactForm';
import FAQ from '../Components/Contact/FAQ';

const Contact = () => {
  return (
    <div className="min-h-screen mt-24 bg-gray-50">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
    </div>
  );
};

export default Contact;
