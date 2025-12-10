// CategoriesSection.jsx
import React, { useEffect, useState } from "react";

const categories = [
  { name: "Signature Kaapi", img: "/images/category/kaapi.jpg" },
  { name: "Hot Coffee", img: "/images/category/hot-coffee.jpg" },
  { name: "Cold Coffee", img: "/images/category/cold-coffee.jpg" },
  { name: "Manual Brews", img: "/images/category/manual-brews.jpg" },
  { name: "Not Coffee", img: "/images/category/not-coffee.jpg" },
  { name: "Coffee Coolers", img: "/images/category/coolers.jpg" },
  { name: "Tea", img: "/images/category/tea.jpg" },
  { name: "Desserts", img: "/images/category/desserts.jpg" },
  { name: "Snacks", img: "/images/category/snacks.jpg" },
  { name: "Soup", img: "/images/category/soup.jpg" },
  { name: "Breakfast", img: "/images/category/breakfast.jpg" },
  { name: "Salad", img: "/images/category/salad.jpg" },
  { name: "Beverages", img: "/images/category/beverages.jpg" },
  { name: "Pizza", img: "/images/category/pizza.jpg" },
  { name: "Sandwiches", img: "/images/category/sandwiches.jpg" },
  { name: "Special Combos", img: "/images/category/combos.jpg" },
];

const CategoriesSection = () => {
  const [loaded, setLoaded] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  // If not showing all, slice first 6
  const visibleCategories = showAll ? categories : categories.slice(0, 8);

  return (
    <section
      id="categories"
      className="w-full py-20 px-6 bg-gradient-to-b from-[#1a120b] via-[#2b1d14] to-[#0f0a06]"
    >
      {/* Heading */}
      <div
        className={`text-center transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-cream mb-4">
          Our Categories
        </h2>
        <p className="text-lg md:text-xl text-amber-200/80">
          Explore what we serve.
        </p>
      </div>

      {/* Categories Grid */}
      <div
        className={`mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto transition-all duration-700 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {visibleCategories.map((cat, index) => (
          <div
            key={index}
            className="relative group rounded-2xl overflow-hidden shadow-xl bg-[#2b1d14] border border-amber-800/30
              hover:scale-[1.02] hover:shadow-amber-900/40 transition-all duration-500"
          >
            {/* Category Image */}
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80"
              alt={cat.name}
              className="w-full h-40 md:h-48 object-cover brightness-[0.75] group-hover:brightness-90 transition-all duration-500"
            />

            {/* Overlay Text */}
            <div className="absolute bottom-3 left-4">
              <h3 className="text-lg md:text-xl font-bold text-white drop-shadow-lg">
                {cat.name}
              </h3>
            </div>

            {/* Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500"></div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {!showAll && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="px-6 py-3 bg-transparent border border-amber-600 text-cream rounded-xl 
            hover:bg-amber-700 hover:border-amber-700
            transition-all duration-300 shadow-lg"
          >
            View More Categories
          </button>
        </div>
      )}
    </section>
  );
};

export default CategoriesSection;
