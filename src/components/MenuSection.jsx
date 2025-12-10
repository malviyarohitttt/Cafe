// MenuSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Coffee, Cake, Cookie, Croissant, Star, Plus, ChevronRight } from 'lucide-react';

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const categories = [
    { id: 'All', label: 'All', icon: <Coffee className="w-4 h-4" /> },
    { id: 'Coffee', label: 'Coffee', icon: <Coffee className="w-4 h-4" /> },
    { id: 'Tea', label: 'Tea', icon: <Coffee className="w-4 h-4" /> },
    { id: 'Desserts', label: 'Desserts', icon: <Cake className="w-4 h-4" /> },
    { id: 'Snacks', label: 'Snacks', icon: <Cookie className="w-4 h-4" /> },
  ];

  const menuItems = [
    {
      id: 1,
      name: "Ethiopian Yirgacheffe",
      category: "Coffee",
      description: "Single origin with citrus & bergamot notes",
      price: "$6.50",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=500&q=80",
      popular: true,
      featured: false
    },
    {
      id: 2,
      name: "Colombian Dark Roast",
      category: "Coffee",
      description: "Rich chocolate undertones, full-bodied",
      price: "$5.50",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1570197788417-0f1a4d1c7e68?auto=format&fit=crop&w=500&q=80",
      popular: true,
      featured: false
    },
    {
      id: 3,
      name: "Matcha Latte",
      category: "Tea",
      description: "Ceremonial grade, perfectly whisked",
      price: "$7.00",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1558898479-33c0057a5d12?auto=format&fit=crop&w=500&q=80",
      popular: true,
      featured: true
    },
    {
      id: 4,
      name: "Earl Grey Supreme",
      category: "Tea",
      description: "Bergamot-infused black tea",
      price: "$4.50",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1564894809610-2f0f2194e71c?auto=format&fit=crop&w=500&q=80",
      popular: false,
      featured: false
    },
    {
      id: 5,
      name: "Tiramisu",
      category: "Desserts",
      description: "Classic Italian dessert, coffee-soaked",
      price: "$8.50",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80",
      popular: true,
      featured: false
    },
    {
      id: 6,
      name: "Macaron Assortment",
      category: "Desserts",
      description: "French macarons in five flavors",
      price: "$12.00",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1569929238190-869826b1bb05?auto=format&fit=crop&w=500&q=80",
      popular: true,
      featured: false
    },
    {
      id: 7,
      name: "Croissant & Jam",
      category: "Snacks",
      description: "Freshly baked, served with homemade jam",
      price: "$6.00",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1555507036-ab794f27d2e9?auto=format&fit=crop&w=500&q=80",
      popular: false,
      featured: false
    },
    {
      id: 8,
      name: "Avocado Toast",
      category: "Snacks",
      description: "Sourdough, smashed avocado, microgreens",
      price: "$9.50",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?auto=format&fit=crop&w=500&q=80",
      popular: true,
      featured: false
    },
    {
      id: 9,
      name: "Cold Brew",
      category: "Coffee",
      description: "Slow-steeped for 18 hours, smooth",
      price: "$5.00",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=500&q=80",
      popular: true,
      featured: false
    },
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
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
      className="relative py-20 lg:py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0a06 0%, #1a120b 50%, #2b1d14 100%)'
      }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '300px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-amber-900/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-800/5 to-transparent rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 lg:mb-20 transform transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-cream bg-gradient-to-r from-cream to-amber-100 bg-clip-text text-transparent">
              Our Categories
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-amber-200/80 font-light max-w-2xl mx-auto leading-relaxed">
            Crafted with passion. Served with love.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 lg:mb-16 transform transition-all duration-700 delay-100 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-amber-800/30 to-amber-700/20 border border-amber-600/50 text-cream shadow-lg'
                  : 'border border-amber-600/30 text-amber-200/80 hover:border-amber-500/50 hover:text-cream'
              }`}
            >
              <span className={`transition-transform duration-300 ${
                activeCategory === category.id ? 'scale-110' : 'group-hover:scale-110'
              }`}>
                {category.icon}
              </span>
              <span className="text-sm font-medium tracking-wide">
                {category.label}
              </span>
              {activeCategory === category.id && (
                <ChevronRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 transform transition-all duration-700 delay-200 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative cursor-pointer"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/5 via-transparent to-brown-900/5 rounded-2xl backdrop-blur-sm border border-amber-800/20 group-hover:border-amber-700/40 transition-all duration-300" />

              {/* Main Card */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-brown-900/30 to-black/50 backdrop-blur-sm border border-amber-900/20 group-hover:border-amber-800/30 transition-all duration-300 shadow-xl group-hover:shadow-2xl group-hover:shadow-amber-900/20 transform group-hover:-translate-y-1">
                
                {/* Popular Badge */}
                {item.popular && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-amber-800 to-amber-700 text-cream px-3 py-1.5 rounded-full text-xs font-medium">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Popular</span>
                    </div>
                  </div>
                )}

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-amber-900 to-amber-800 text-cream px-3 py-1.5 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  </div>
                )}

                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Category Label */}
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs text-amber-300 font-medium">{item.category}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-cream group-hover:text-amber-200 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                      <span className="text-sm font-medium text-amber-300">{item.rating}</span>
                    </div>
                  </div>

                  <p className="text-sm text-amber-200/70 mb-4 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-amber-900/30">
                    <span className="text-2xl font-bold text-amber-300">
                      {item.price}
                    </span>
                    <button className="group/btn flex items-center gap-2 bg-gradient-to-r from-amber-800 to-amber-700 text-cream px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:from-amber-700 hover:to-amber-600 active:scale-95 shadow-lg hover:shadow-xl">
                      <Plus className="w-4 h-4 transition-transform group-hover/btn:rotate-90" />
                      <span>Add to Order</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className={`text-center mt-12 lg:mt-16 transform transition-all duration-700 delay-300 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-900/20 to-amber-800/10 backdrop-blur-sm border border-amber-700/40 text-amber-200 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:bg-amber-900/30 hover:border-amber-600/50 hover:text-cream">
            <span>View Complete Menu</span>
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* Custom CSS for line clamp */}
      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default MenuSection;