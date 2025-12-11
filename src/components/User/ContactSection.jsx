// ContactSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  MapPin, Phone, Mail, MessageCircle, Clock, Calendar, 
  Navigation, Coffee, CheckCircle, Copy, Instagram, 
  Facebook, ChevronRight, Send, Check
} from 'lucide-react';

const ContactSection = () => {
  const [visible, setVisible] = useState(false);
  const [currentDay, setCurrentDay] = useState('');
  const [copiedField, setCopiedField] = useState('');

  const sectionRef = useRef(null);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  useEffect(() => {
    const today = new Date().getDay();
    setCurrentDay(daysOfWeek[today]);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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

  const openingHours = [
    { day: 'Monday - Friday', hours: '7:00 AM - 10:00 PM', open: true },
    { day: 'Saturday', hours: '8:00 AM - 11:00 PM', open: true },
    { day: 'Sunday', hours: '8:00 AM - 9:00 PM', open: true },
  ];

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(''), 2000);
  };



  const whatsappMessage = `Hello O2 Cafe De La Ville! I'd like to inquire about...`;
  const whatsappUrl = `https://wa.me/15551234567?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0a06 0%, #1a120b 50%, #2b1d14 100%)'
      }}
    >
      {/* Background Pattern - Coffee Map */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574' fill-opacity='0.1' fill-rule='evenodd'%3E%3Ccircle cx='40' cy='40' r='5'/%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='60' cy='60' r='3'/%3E%3Ccircle cx='20' cy='60' r='3'/%3E%3Ccircle cx='60' cy='20' r='3'/%3E%3Cpath d='M40 20c-11.046 0-20 8.954-20 20s8.954 20 20 20 20-8.954 20-20-8.954-20-20-20zm0 36c-8.837 0-16-7.163-16-16s7.163-16 16-16 16 7.163 16 16-7.163 16-16 16z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '200px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-900/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-amber-800/5 to-transparent rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 lg:mb-20 transform transition-all duration-700 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-900/20 to-amber-700/20 backdrop-blur-sm border border-amber-700/30 rounded-full px-5 py-2.5 mb-6">
            <MapPin className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-amber-200 tracking-wider">
              FIND US HERE
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-[#f5f0e6] bg-gradient-to-r from-[#f5f0e6] to-amber-100 bg-clip-text text-transparent">
              Visit Our Cafe
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-amber-200/80 font-light max-w-2xl mx-auto">
            We're waiting to serve you the perfect cup
          </p>
        </div>

        {/* Main Content - Two Columns */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-12 transform transition-all duration-700 delay-200 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          
          {/* LEFT COLUMN - Contact Information Cards */}
          <div className="space-y-8">
            {/* Address Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600/10 via-amber-500/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-b from-brown-900/40 via-brown-800/20 to-brown-900/40 backdrop-blur-sm border border-amber-900/30 rounded-2xl p-6 transition-all duration-300 group-hover:border-amber-700/50 group-hover:shadow-2xl group-hover:shadow-amber-900/20">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-900/30 to-amber-800/20 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-amber-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-[#f5f0e6] mb-2">Our Location</h3>
                    <p className="text-amber-200/90 leading-relaxed">
                      123 Coffee Street, Downtown District<br />
                      Cityville 10001
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                      <span className="text-sm text-amber-200/70">Easy parking available in rear</span>
                    </div>
                  </div>
                </div>
                
                <button className="group/btn w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-800 to-amber-700 text-[#f5f0e6] px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:from-amber-700 hover:to-amber-600 active:scale-95 shadow-lg hover:shadow-xl">
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                  <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Contact Details Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600/10 via-amber-500/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-b from-brown-900/40 via-brown-800/20 to-brown-900/40 backdrop-blur-sm border border-amber-900/30 rounded-2xl p-6 transition-all duration-300 group-hover:border-amber-700/50 group-hover:shadow-2xl group-hover:shadow-amber-900/20">
                <h3 className="text-xl font-semibold text-[#f5f0e6] mb-6">Contact Details</h3>
                
                <div className="space-y-4">
                  {/* Phone */}
                  <div className="flex items-center justify-between group/item">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-900/30 to-amber-800/20 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-amber-300" />
                      </div>
                      <div>
                        <div className="text-sm text-amber-200/70">Phone</div>
                        <a 
                          href="tel:+15551234567" 
                          className="text-lg font-medium text-[#f5f0e6] hover:text-amber-300 transition-colors"
                        >
                          +1 (555) 123-4567
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy('+15551234567', 'phone')}
                      className="p-2 rounded-lg bg-amber-900/20 hover:bg-amber-800/30 transition-colors"
                      title="Copy phone number"
                    >
                      {copiedField === 'phone' ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-amber-300" />
                      )}
                    </button>
                  </div>

                  {/* Email */}
                  <div className="flex items-center justify-between group/item">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-900/30 to-amber-800/20 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-amber-300" />
                      </div>
                      <div>
                        <div className="text-sm text-amber-200/70">Email</div>
                        <a 
                          href="mailto:hello@velvetsipcafe.com" 
                          className="text-lg font-medium text-[#f5f0e6] hover:text-amber-300 transition-colors"
                        >
                          hello@velvetsipcafe.com
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => handleCopy('hello@velvetsipcafe.com', 'email')}
                      className="p-2 rounded-lg bg-amber-900/20 hover:bg-amber-800/30 transition-colors"
                      title="Copy email address"
                    >
                      {copiedField === 'email' ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-amber-300" />
                      )}
                    </button>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 w-full flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:from-emerald-500 hover:to-emerald-400 active:scale-95 shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>

                {/* Social Media */}
                <div className="mt-6 pt-6 border-t border-amber-900/30">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-amber-200/70">Follow us:</span>
                    <div className="flex gap-3">
                      <a 
                        href="https://instagram.com/o2cafedelaville" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gradient-to-br from-pink-900/20 to-pink-800/10 border border-pink-800/30 text-pink-300 hover:text-pink-200 hover:border-pink-700/50 transition-all"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://facebook.com/o2cafedelaville" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gradient-to-br from-blue-900/20 to-blue-800/10 border border-blue-800/30 text-blue-300 hover:text-blue-200 hover:border-blue-700/50 transition-all"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Opening Hours Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600/10 via-amber-500/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-b from-brown-900/40 via-brown-800/20 to-brown-900/40 backdrop-blur-sm border border-amber-900/30 rounded-2xl p-6 transition-all duration-300 group-hover:border-amber-700/50 group-hover:shadow-2xl group-hover:shadow-amber-900/20">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-900/30 to-amber-800/20 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-amber-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#f5f0e6] mb-2">Opening Hours</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="text-sm text-emerald-300">
                        {currentDay === 'Sunday' ? 'Open today' : `Open ${currentDay}`}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {openingHours.map((item, index) => (
                    <div 
                      key={index}
                      className={`flex justify-between items-center py-3 px-4 rounded-lg transition-colors ${
                        item.day.includes(currentDay.split(' - ')[0]) 
                          ? 'bg-gradient-to-r from-amber-900/30 to-amber-800/20 border border-amber-800/30' 
                          : 'hover:bg-amber-900/10'
                      }`}
                    >
                      <span className={`font-medium ${
                        item.day.includes(currentDay.split(' - ')[0]) 
                          ? 'text-amber-300' 
                          : 'text-amber-200/90'
                      }`}>
                        {item.day}
                      </span>
                      <span className={`font-medium ${
                        item.day.includes(currentDay.split(' - ')[0]) 
                          ? 'text-amber-300' 
                          : 'text-amber-200/70'
                      }`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-amber-900/30">
                  <div className="flex items-center gap-2 text-sm text-amber-200/70">
                    <CheckCircle className="w-4 h-4 text-emerald-400" />
                    <span>Open on all public holidays</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Map & Contact Form */}
          <div className="space-y-8">
            {/* Map Card */}
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600/10 via-amber-500/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full bg-gradient-to-b from-brown-900/40 via-brown-800/20 to-brown-900/40 backdrop-blur-sm border border-amber-900/30 rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-amber-700/50 group-hover:shadow-2xl group-hover:shadow-amber-900/20">
                {/* Map Container */}
                <div className="h-96 w-full relative">
                  {/* Placeholder for Google Maps - Replace with your actual Google Maps iframe */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-amber-800/10 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-amber-300 mx-auto mb-4" />
                      <h4 className="text-xl font-semibold text-[#f5f0e6] mb-2">Our Location</h4>
                      <p className="text-amber-200/70">Google Maps integration placeholder</p>
                      <p className="text-sm text-amber-200/50 mt-2">
                        Replace with your Google Maps iframe
                      </p>
                    </div>
                  </div>
                  
                  {/* Uncomment and replace with your actual Google Maps iframe */}
                  {/*
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316c11a7a7%3A0x7a3c3c3c3c3c3c3c!2sCoffee+Street!5e0!3m2!1sen!2sus!4v1568013117175!5m2!1sen!2sus"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="O2 Cafe De La Ville Location"
                  />
                  */}
                </div>
                
                {/* Map Controls */}
                <div className="p-6 border-t border-amber-900/30">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="group/btn flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-amber-800 to-amber-700 text-[#f5f0e6] px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:from-amber-700 hover:to-amber-600 active:scale-95 shadow-lg hover:shadow-xl">
                      <Navigation className="w-4 h-4" />
                      <span>Open in Google Maps</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* Quick Action Buttons - Mobile Only */}
        <div className="lg:hidden mt-8">
          <div className="grid grid-cols-2 gap-4">
            <a
              href="tel:+15551234567"
              className="group/btn flex items-center justify-center gap-2 bg-gradient-to-r from-amber-800 to-amber-700 text-[#f5f0e6] px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:from-amber-700 hover:to-amber-600 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:from-emerald-500 hover:to-emerald-400 active:scale-95 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button - Mobile Only */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="lg:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 active:scale-95"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-10">
        <Coffee className="w-40 h-40 text-amber-300 rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <MapPin className="w-32 h-32 text-amber-300 -rotate-12" />
      </div>
    </section>
  );
};

export default ContactSection;