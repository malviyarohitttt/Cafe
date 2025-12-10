import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import BestSellerSection from "./components/BestSellerSection";
import ReviewsSection from "./components/ReviewsSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-amber-100 to-amber-50 font-inter">
      <Navbar />

      {/* Main content with padding to account for fixed navbar */}
      <main className="pt-20">
        <HeroSection />
        <CategoriesSection />
        <BestSellerSection />
        <ReviewsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
