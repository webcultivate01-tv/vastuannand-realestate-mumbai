import React from 'react';
import PropertiesHero from '../Components/Properties/PropertiesHero';
import PropertyFilters from '../Components/Properties/PropertyFilters';
import PropertyList from '../Components/Properties/PropertyList';

const Properties = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <PropertiesHero />
      <PropertyFilters />
      <PropertyList />
    </div>
  );
};

export default Properties;
