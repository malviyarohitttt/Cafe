// BestSellerSection.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  Star,
  Coffee,
  Cake,
  Croissant,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

const BestSellerSection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const bestSellers = [
    {
      id: 1,
      name: "Ethiopian Yirgacheffe",
      category: "Coffee",
      description:
        "Single origin with bright citrus notes and delicate floral aroma. Perfectly balanced acidity.",
      price: "199",
      originalPrice: "299",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
      isFeatured: true,
      badge: "Most Loved",
    },
    {
      id: 2,
      name: "Ethiopian Yirgacheffe",
      category: "Coffee",
      description:
        "Single origin with bright citrus notes and delicate floral aroma. Perfectly balanced acidity.",
      price: "199",
      originalPrice: "299",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
      isFeatured: true,
      badge: "Most Loved",
    },
    {
      id: 3,
      name: "Ethiopian Yirgacheffe",
      category: "Coffee",
      description:
        "Single origin with bright citrus notes and delicate floral aroma. Perfectly balanced acidity.",
      price: "199",
      originalPrice: "299",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
      isFeatured: true,
      badge: "Most Loved",
    },
    {
      id: 4,
      name: "Ethiopian Yirgacheffe",
      category: "Coffee",
      description:
        "Single origin with bright citrus notes and delicate floral aroma. Perfectly balanced acidity.",
      price: "199",
      originalPrice: "299",
      image:
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
      isFeatured: true,
      badge: "Most Loved",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0f0a06 0%, #1a120b 50%, #2b1d14 100%)",
      }}
    >
      {/* Background Pattern - Subtle Coffee Stains */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: "400px",
          }}
        />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-900/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-800/5 to-transparent rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div
          className={`text-center mb-16 lg:mb-20 transform transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-900/20 to-amber-700/20 backdrop-blur-sm border border-amber-700/30 rounded-full px-5 py-2.5 mb-6">
            <TrendingUp className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-amber-200 tracking-wider">
              CUSTOMER FAVORITES
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-cream bg-gradient-to-r from-cream to-amber-100 bg-clip-text text-transparent">
              Our Best Seller
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-amber-200/80 font-light max-w-2xl mx-auto">
            Loved by thousands, crafted with passion
          </p>
        </div>

        {/* Best Seller Cards Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-10 transform transition-all duration-700 delay-200 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {bestSellers.map((item, index) => (
            <div
              key={item.id}
              className={`group relative transform transition-all duration-500 ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600/20 via-amber-500/10 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Main Card */}
              <div className="relative h-full bg-gradient-to-b from-brown-900/40 via-brown-800/20 to-brown-900/40 backdrop-blur-sm border border-amber-900/30 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-amber-700/50 group-hover:shadow-2xl group-hover:shadow-amber-900/20 transform group-hover:-translate-y-2">
                {/* Featured Badge */}
                {item.isFeatured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-amber-800 to-amber-700 text-cream px-3 py-1.5 rounded-full text-xs font-medium shadow-lg">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Featured</span>
                    </div>
                  </div>
                )}

                {/* Sale Badge */}
                {item.originalPrice && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-cream px-3 py-1.5 rounded-full text-xs font-medium">
                      {Math.round(
                        (1 -
                          parseFloat(item.price.replace("$", "")) /
                            parseFloat(item.originalPrice.replace("$", ""))) *
                          100
                      )}
                      % OFF
                    </div>
                  </div>
                )}

                {/* Custom Badge */}
                <div className="absolute top-12 left-4 z-10">
                  <div className="bg-gradient-to-r from-amber-900/90 to-amber-800/90 text-cream px-3 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                    {item.badge}
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Category Icon */}
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                      {item.category === "Coffee" && (
                        <Coffee className="w-4 h-4 text-amber-300" />
                      )}
                      {item.category === "Dessert" && (
                        <Cake className="w-4 h-4 text-amber-300" />
                      )}
                      {item.category === "Snack" && (
                        <Croissant className="w-4 h-4 text-amber-300" />
                      )}
                      <span className="text-xs text-amber-300 font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Name & Rating */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-semibold text-cream group-hover:text-amber-200 transition-colors duration-300">
                      {item.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-amber-200/70 mb-4 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-amber-900/30">
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-amber-300">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-sm text-amber-200/60 line-through">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Line Effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent group-hover:w-3/4 transition-all duration-500 rounded-full" />
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`text-center mt-12 lg:mt-16 transform transition-all duration-700 delay-300 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-900/20 to-amber-800/10 backdrop-blur-sm border border-amber-700/40 text-amber-200 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:bg-amber-900/30 hover:border-amber-600/50 hover:text-cream">
            <span>View All Best Sellers</span>
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-10">
        <TrendingUp className="w-40 h-40 text-amber-300 rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <Star className="w-32 h-32 text-amber-300 -rotate-12" />
      </div>
    </section>
  );
};

export default BestSellerSection;
