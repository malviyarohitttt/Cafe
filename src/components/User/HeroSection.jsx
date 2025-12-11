// HeroSection.jsx
import React, { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a120b] via-[#2b1d14] to-[#0f0a06]">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' ... %3C/svg%3E")`,
          }}
        />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-900/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brown-800/10 rounded-full blur-3xl" />
      </div>

      {/* CONTENT WRAPPER */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE TEXT */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block bg-gradient-to-r from-amber-100 to-cream text-transparent bg-clip-text">
                Velvet Sip
              </span>
              <span className="block text-amber-300 mt-2">Café</span>
            </h1>

            <p className="text-lg md:text-xl text-amber-100/90 font-light max-w-lg leading-relaxed">
              Where Aroma Meets Aesthetic — Experience the perfect blend of
              coffee, comfort, and conversations.
            </p>

            <button className="group relative px-8 py-4 bg-gradient-to-r from-amber-800 to-amber-700 text-cream rounded-xl text-lg font-semibold shadow-xl hover:shadow-amber-900/40 transition-all">
              <span className="relative flex items-center gap-2">
                View Menu
                <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden w-full max-w-sm mx-auto lg:max-w-full aspect-[4/5]">
              <img
                src="/images/coffee.png"
                alt="Coffee Cup"
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
                } floating-image`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* FLOAT ANIMATION */}
      <style jsx>{`
        @keyframes floatImage {
          0% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-12px) scale(1.02);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }
        .floating-image {
          animation: floatImage 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
