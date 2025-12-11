import { TrendingUp, Trash2, Heart, Coffee, Star, Edit2 } from "lucide-react";
import React, { useEffect, useState } from "react";

const BestSellers = () => {
  const [visible, setVisible] = useState(false);

  const bestSellerItems = [
    {
      id: 1,
      name: "Hazelnut Cappuccino",
      img: "/images/cappuccino.jpg",
      price: "₹199",
    },
    {
      id: 2,
      name: "Classic Cold Coffee",
      img: "/images/coldcoffee.jpg",
      price: "₹149",
    },
    {
      id: 3,
      name: "Chocolate Brownie",
      img: "/images/brownie.jpg",
      price: "₹129",
    },
    {
      id: 4,
      name: "Caramel Latte",
      img: "/images/latte.jpg",
      price: "₹179",
    },
  ];

  useEffect(() => {
    setTimeout(() => setVisible(true), 200);
  }, []);

  return (
    <section className="py-20 bg-[#0f0a06]">
      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Premium Badge */}
        <div
          className={`text-center mb-10 transform transition-all duration-700 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          <div className="inline-flex mx-auto items-center gap-2 bg-gradient-to-r from-amber-900/20 to-amber-700/20 backdrop-blur-sm border border-amber-700/30 rounded-full px-5 py-2.5">
            <TrendingUp className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-amber-200 tracking-wider">
              CUSTOMER FAVORITES
            </span>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16 lg:mb-20 px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-cream tracking-wide drop-shadow-md">
            Our Best Sellers
          </h2>
          <p className="mt-4 text-lg text-warm-gray-300 max-w-2xl mx-auto">
            Discover the most loved flavors of our café — handpicked and served
            fresh.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
            gap-8 lg:gap-10 place-items-center transition-all duration-700 delay-200 ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
        >
          {bestSellerItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative w-full max-w-sm rounded-2xl overflow-hidden bg-[#1a120b]/90 backdrop-blur-sm border border-gold/20 shadow-lg hover:border-gold hover:shadow-gold/30 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02]"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src="images/cup.png"
                  alt={item.name}
                  className="h-56 w-full object-cover group-hover:scale-110 transition-all duration-700"
                />

                {/* Top Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a120b]/70 to-transparent opacity-70"></div>

                {/* Floating Price Tag */}
                <div
                  className="
        absolute bottom-3 right-3 px-3 py-1.5
        bg-gradient-to-r from-gold/80 to-beige/80
        text-[#1a120b] font-semibold text-sm rounded-lg shadow-md
        backdrop-blur-md
      "
                >
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                {/* Title */}
                <h3
                  className="
        text-xl font-bold text-cream tracking-wide
        group-hover:text-gold transition-all duration-300
      "
                >
                  {item.name}
                </h3>

                {/* Divider */}
                <div className="w-16 h-[2px] bg-gradient-to-r from-gold to-beige rounded-full"></div>

                {/* Subtext */}
                <p className="text-warm-gray-300 text-sm leading-relaxed">
                  Freshly served with rich flavor & café perfection.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
