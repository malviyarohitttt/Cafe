// ReviewsSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote, Coffee, Users, Calendar, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';

const ReviewsSection = () => {
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: "Alexandra Chen",
      rating: 5,
      review: "The Ethiopian Yirgacheffe here is simply divine. Perfect citrus notes and the aroma fills the entire café. I come here every Sunday morning for my weekly treat!",
      date: "2 days ago",
      visits: 15,
      favorite: "Ethiopian Yirgacheffe",
      badge: "Regular Customer"
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      rating: 5,
      review: "As a coffee enthusiast, I can confidently say O2 Cafe serves the best Spanish Latte in the city. The balance of condensed milk and espresso is perfect.",
      date: "1 week ago",
      visits: 8,
      favorite: "Spanish Latte",
      badge: "Coffee Connoisseur"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      rating: 4,
      review: "The ambiance is incredible! Perfect for working or catching up with friends. The matcha cheesecake paired with their cold brew is my new favorite combo.",
      date: "3 days ago",
      visits: 3,
      favorite: "Matcha Cheesecake",
      badge: "First-time Visitor"
    },
    {
      id: 4,
      name: "James Wilson",
      rating: 5,
      review: "Service is exceptional and the quality is consistently high. Their avocado toast has become my go-to breakfast. Highly recommended!",
      date: "2 weeks ago",
      visits: 12,
      favorite: "Avocado Toast",
      badge: "Weekly Regular"
    },
    {
      id: 5,
      name: "Emily Thompson",
      rating: 5,
      review: "The manual brews are a work of art. Watching the baristas work is a treat in itself. Best pour-over coffee I've had in years!",
      date: "5 days ago",
      visits: 6,
      favorite: "Manual Pour-over",
      badge: "Coffee Enthusiast"
    },
    {
      id: 6,
      name: "David Kim",
      rating: 4,
      review: "Great place for remote work. Fast WiFi, excellent coffee, and the staff remembers my regular order. Feels like a second home!",
      date: "1 month ago",
      visits: 20,
      favorite: "Colombian Dark Roast",
      badge: "Loyal Customer"
    }
  ];

  const stats = {
    averageRating: 4.9,
    totalReviews: 523,
    responseRate: 98,
    monthlyReviews: 156
  };

  useEffect(() => {
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

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${index < rating ? 'fill-amber-400 text-amber-400' : 'fill-amber-900/30 text-amber-900/30'}`}
      />
    ));
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0a06 0%, #1a120b 50%, #2b1d14 100%)'
      }}
    >
      {/* Background Pattern - Coffee Beans */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4a574' fill-opacity='0.1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '150px'
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
            <Quote className="w-4 h-4 text-amber-300" />
            <span className="text-sm font-medium text-amber-200 tracking-wider">
              TRUSTED REVIEWS
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-[#f5f0e6] bg-gradient-to-r from-[#f5f0e6] to-amber-100 bg-clip-text text-transparent">
              What Our Customers Say
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-amber-200/80 font-light max-w-2xl mx-auto mb-10">
            Real stories from coffee lovers
          </p>

          {/* Overall Rating Stats */}
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-amber-900/20 to-amber-800/10 backdrop-blur-sm border border-amber-800/30 rounded-2xl px-8 py-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-300">{stats.averageRating}</div>
              <div className="flex justify-center mt-1">
                {renderStars(5)}
              </div>
              <div className="text-sm text-amber-200/70 mt-2">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-amber-800/30" />
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-300">{stats.totalReviews}+</div>
              <div className="text-sm text-amber-200/70 mt-2">Total Reviews</div>
            </div>
            <div className="h-12 w-px bg-amber-800/30" />
            <div className="text-center">
              <div className="text-4xl font-bold text-amber-300">{stats.responseRate}%</div>
              <div className="text-sm text-amber-200/70 mt-2">Response Rate</div>
            </div>
          </div>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden lg:block">
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transform transition-all duration-700 delay-200 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {reviews.slice(0, 3).map((review, index) => (
              <div
                key={review.id}
                className={`transform transition-all duration-500 ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ReviewCard review={review} renderStars={renderStars} />
              </div>
            ))}
          </div>
        </div>

        {/* Tablet Grid Layout */}
        <div className="hidden md:block lg:hidden">
          <div className={`grid grid-cols-2 gap-6 transform transition-all duration-700 delay-200 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            {reviews.slice(0, 4).map((review, index) => (
              <div
                key={review.id}
                className={`transform transition-all duration-500 ${
                  visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <ReviewCard review={review} renderStars={renderStars} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel Layout */}
        <div className="md:hidden">
          <div className={`relative transform transition-all duration-700 delay-200 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}>
            <div ref={carouselRef} className="overflow-hidden">
              <div 
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-2">
                    <ReviewCard review={review} renderStars={renderStars} />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="p-2 bg-gradient-to-r from-amber-900/20 to-amber-800/10 backdrop-blur-sm border border-amber-800/30 rounded-full text-amber-300 hover:text-amber-200 hover:border-amber-700/50 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-amber-400 w-6' 
                        : 'bg-amber-800/50 hover:bg-amber-700/70'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="p-2 bg-gradient-to-r from-amber-900/20 to-amber-800/10 backdrop-blur-sm border border-amber-800/30 rounded-full text-amber-300 hover:text-amber-200 hover:border-amber-700/50 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* View All Reviews Button */}
        <div className={`text-center mt-12 lg:mt-16 transform transition-all duration-700 delay-300 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-900/20 to-amber-800/10 backdrop-blur-sm border border-amber-700/40 text-amber-200 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:bg-amber-900/30 hover:border-amber-600/50 hover:text-[#f5f0e6]">
            <Users className="w-5 h-5" />
            <span>View All {stats.totalReviews}+ Reviews</span>
            <ChevronRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-10">
        <Quote className="w-40 h-40 text-amber-300 rotate-12" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <ChevronLeft className="w-32 h-32 text-amber-300 -rotate-12" />
      </div>
    </section>
  );
};

// Review Card Component
const ReviewCard = ({ review, renderStars }) => {
  return (
    <div className="group relative h-full cursor-pointer">
      {/* Card Glow Effect */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600/10 via-amber-500/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main Card */}
      <div className="relative h-full bg-gradient-to-b from-brown-900/40 via-brown-800/20 to-brown-900/40 backdrop-blur-sm border border-amber-900/30 rounded-2xl p-6 transition-all duration-300 group-hover:border-amber-700/50 group-hover:shadow-2xl group-hover:shadow-amber-900/20 transform group-hover:-translate-y-1">
        
        {/* Quote Icon */}
        <div className="absolute top-6 right-6">
          <Quote className="w-8 h-8 text-amber-800/30" />
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex">
            {renderStars(review.rating)}
          </div>
          <span className="text-sm font-medium text-amber-300">{review.rating}.0</span>
        </div>

        {/* Review Text */}
        <p className="text-[#f5f0e6] text-base leading-relaxed mb-6 italic">
          "{review.review}"
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-amber-800/30 to-transparent mb-6" />

        {/* Customer Info */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              {/* Customer Avatar Placeholder */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-amber-800 to-amber-700 flex items-center justify-center">
                <span className="text-sm font-semibold text-[#f5f0e6]">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <h4 className="text-base font-semibold text-[#f5f0e6]">
                  {review.name}
                </h4>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="w-3 h-3 text-amber-300/70" />
                  <span className="text-xs text-amber-200/70">{review.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;  