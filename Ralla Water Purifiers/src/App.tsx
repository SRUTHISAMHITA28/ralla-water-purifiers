import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ProductsSection from './components/sections/ProductsSection';
import ComparisonSection from './components/sections/ComparisonSection';
import AboutSection from './components/sections/AboutSection';
import UpcomingSection from './components/sections/UpcomingSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import InstallationSection from './components/sections/InstallationSection';
import TrustSection from './components/sections/TrustSection';
import FAQSection from './components/sections/FAQSection';
import NewAbout from './components/sections/newabout';

function App() {
  useEffect(() => {
    // Update the page title
    document.title = "Ralla Water Purifiers | Pure Water. Trusted Innovation.";
    
    // Get the favicon link element
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      // Update the favicon to a blue color to match the water theme
      favicon.href = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90' fill='%232563EB'>💧</text></svg>";
    }
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <ComparisonSection />
        <AboutSection />
        <NewAbout />
        <UpcomingSection />
        <TestimonialsSection />
        <InstallationSection />
        <TrustSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;