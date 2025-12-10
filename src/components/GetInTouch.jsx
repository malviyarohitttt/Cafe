import { Check, Send } from "lucide-react";
import React, { useState } from "react";

function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to your backend API here
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      {/* Contact Form Card */}
      <div className="group relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600/10 via-amber-500/5 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative bg-gradient-to-b from-brown-900/40 via-brown-800/20 to-brown-900/40 backdrop-blur-sm border border-amber-900/30 rounded-2xl p-6 transition-all duration-300 group-hover:border-amber-700/50 group-hover:shadow-2xl group-hover:shadow-amber-900/20">
          <h3 className="text-xl font-semibold text-[#f5f0e6] mb-6">
            Send us a Message
          </h3>

          {formSubmitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold text-[#f5f0e6] mb-2">
                Message Sent!
              </h4>
              <p className="text-amber-200/70">
                Thank you for contacting us. We'll respond within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-amber-200/70 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-amber-900/10 border border-amber-800/30 rounded-xl text-[#f5f0e6] placeholder-amber-200/40 focus:outline-none focus:border-amber-600 transition-colors"
                  placeholder="John Smith"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-200/70 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-amber-900/10 border border-amber-800/30 rounded-xl text-[#f5f0e6] placeholder-amber-200/40 focus:outline-none focus:border-amber-600 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-amber-200/70 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-4 py-3 bg-amber-900/10 border border-amber-800/30 rounded-xl text-[#f5f0e6] placeholder-amber-200/40 focus:outline-none focus:border-amber-600 transition-colors resize-none"
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <button
                type="submit"
                className="group/btn w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-800 to-amber-700 text-[#f5f0e6] px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:from-amber-700 hover:to-amber-600 active:scale-95 shadow-lg hover:shadow-xl mt-2"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              <p className="text-center text-sm text-amber-200/50 mt-4">
                We'll respond within 24 hours
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
