import React from 'react';
import ContactHero from '../Components/Contact/ContactHero';
import ContactInfo from '../Components/Contact/ContactInfo';
import ContactForm from '../Components/Contact/ContactForm';

const Contact = () => {
  return (
    <div className="min-h-screen mt-24 bg-gray-50">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </div>
  );
};

export default Contact;
