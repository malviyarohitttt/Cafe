import React, { useState } from "react";
import { Menu, X, Coffee } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = ["Home", "Menu", "Gallery", "About", "Contact"];

  const handleItemClick = (item) => {
    setActiveItem(item);
    setIsOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/95 via-[#2c1810]/90 to-[#1a1a1a]/95 backdrop-blur-xl border-b border-amber-900/20" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-900 to-amber-700 rounded-full blur opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <Coffee className="relative w-8 h-8 text-amber-100 transform group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-2xl font-playfair font-bold text-amber-50 tracking-tight">
                 Velvet Sip
                </span>
                <span className="text-xs font-light text-amber-200/80 tracking-widest uppercase">
                  Café
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleItemClick(item)}
                  className={`relative px-5 py-2 rounded-full transition-all duration-300 ${
                    activeItem === item
                      ? "text-amber-50"
                      : "text-amber-100/80 hover:text-amber-50"
                  }`}
                >
                  {activeItem === item && (
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-900/40 to-amber-700/40 rounded-full blur-sm" />
                  )}
                  <span className="relative text-sm font-medium tracking-wide">
                    {item}
                  </span>

                  <div
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-300 ${
                      activeItem === item ? "w-8" : "w-0 group-hover:w-8"
                    }`}
                  />
                </button>
              ))}

              <button className="ml-3 px-6 py-2 bg-gradient-to-r from-amber-900 to-amber-700 text-amber-50 rounded-full text-sm font-medium hover:from-amber-800 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-amber-900/30 transform hover:-translate-y-0.5">
                Reserve
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-3 rounded-full bg-amber-900/20 hover:bg-amber-900/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-amber-700/30 rounded-full blur" />
              {isOpen ? (
                <X className="relative w-6 h-6 text-amber-100" />
              ) : (
                <Menu className="relative w-6 h-6 text-amber-100" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible delay-300"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2c1810] to-[#1a1a1a]"
          onClick={() => setIsOpen(false)}
        />

        {/* Sliding Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-80 bg-gradient-to-b from-[#1a1a1a]/95 via-[#2c1810]/95 to-[#1a1a1a]/95 backdrop-blur-2xl border-l border-amber-900/30 shadow-2xl transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="h-full flex flex-col pt-24 px-6">
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-12 pl-3">
              <Coffee className="w-10 h-10 text-amber-100" />
              <div className="flex flex-col leading-tight">
                <span className="text-3xl font-playfair font-bold text-amber-50">
                  O2 Cafe
                </span>
                <span className="text-sm font-light text-amber-200/80 tracking-widest">
                  De La Ville
                </span>
              </div>
            </div>

            {/* Mobile Menu Items */}
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => handleItemClick(item)}
                  className={`w-full text-left px-6 py-4 rounded-xl transition-all duration-300 ${
                    activeItem === item
                      ? "bg-gradient-to-r from-amber-900/40 to-amber-700/40 text-amber-50"
                      : "text-amber-100/80 hover:text-amber-50 hover:bg-amber-900/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-medium tracking-wide">
                      {item}
                    </span>

                    {activeItem === item && (
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full animate-pulse" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <button className="mt-8 mx-6 px-8 py-4 bg-gradient-to-r from-amber-900 to-amber-700 text-amber-50 rounded-xl text-base font-medium hover:from-amber-800 hover:to-amber-600 transition-all duration-300 shadow-xl transform hover:scale-[1.02] active:scale-[0.98]">
              Book a Table
            </button>

            {/* Contact */}
            <div className="mt-auto pb-8 px-4 border-t border-amber-900/30 pt-8">
              <p className="text-amber-200/60 text-sm mb-2">Open Daily</p>
              <p className="text-amber-100 font-medium">7:00 AM – 10:00 PM</p>
              <p className="text-amber-200/60 text-sm mt-4">
                +1 (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
