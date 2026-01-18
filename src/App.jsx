import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home";
import Properties from "./Pages/Properties";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact";
import PropertyDetail from "./Pages/PropertyDetail";
import Services from "./Pages/Services";
import PropertyBuying from "./Components/Services/Pbuyig";
import PropertySelling from "./Components/Services/Pselling";
import PropertyConsultation from "./Components/Services/Pconsultation";
import RentalServices from "./Components/Services/Rental";
import FirstTimeHomeBuyers from "./Components/Blog/FirstTimeHomeBuyers";
import MumbaiInvestment from "./Components/Blog/MumbaiInvestment2025";
import PropertyDocumentation from "./Components/Blog/PropertyDocumentation";
// Scroll to top component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="properties" element={<Properties />} />
          <Route path="/property/:id" element={<PropertyDetail />} />
          <Route path="blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route
            path="/services/property-buying"
            element={<PropertyBuying />}
          />
          <Route
            path="/services/property-selling"
            element={<PropertySelling />}
          />
          <Route
            path="/services/property-consultation"
            element={<PropertyConsultation />}
          />
          <Route
            path="/services/rental-services"
            element={<RentalServices />}
          />
        </Route>
        <Route
          path="/blog/first-time-home-buyers-mumbai"
          element={<FirstTimeHomeBuyers />}
        />
        <Route path="/blog/mumbaiInvestment" element={<MumbaiInvestment />} />
        <Route
          path="/blog/propertydocumentation"
          element={<PropertyDocumentation />}
        />
      </Routes>
    </Router>
  );
};

export default App;
