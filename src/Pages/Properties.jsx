
import PropertiesHero from '../Components/Properties/PropertiesHero';
import PropertyList from '../Components/Properties/PropertyList';
import properties from '../data/properties';

const Properties = () => {


  return (
    <div className="min-h-screen mt-24 bg-gray-50">
      <PropertiesHero />
      <PropertyList properties={properties} />
    </div>
  );
};

export default Properties;
