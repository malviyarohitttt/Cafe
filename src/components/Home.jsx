import React from "react";
import Navbar from "./User/Navbar";
import HeroSection from "./User/HeroSection";
import CategoriesSection from "./User/CategoriesSection";
import BestSellerSection from "./User/BestSellerSection";
import ReviewsSection from "./User/ReviewsSection";
import ContactSection from "./User/ContactSection";

function Home() {
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

export default Home;
