// App.jsx
import React, { useState } from "react";
import {
  LayoutDashboard,
  UtensilsCrossed,
  Tag,
  TrendingUp,
  Settings,
  MessageSquare,
  Menu,
  X,
  Plus,
  Edit2,
  Trash2,
  Star,
  CheckCircle,
  XCircle,
  Upload,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [bestSellerCount, setBestSellerCount] = useState(3);
  const [selectedBestSellers, setSelectedBestSellers] = useState([]);
  const [reviewsFilter, setReviewsFilter] = useState("all");

  // Sample data
  const menuItems = [
    {
      id: 1,
      name: "Caramel Macchiato",
      category: "Coffee",
      price: "$4.99",
      image: "🍵",
    },
    {
      id: 2,
      name: "Blueberry Muffin",
      category: "Pastries",
      price: "$3.49",
      image: "🧁",
    },
    {
      id: 3,
      name: "Avocado Toast",
      category: "Breakfast",
      price: "$8.99",
      image: "🥑",
    },
    {
      id: 4,
      name: "Iced Latte",
      category: "Coffee",
      price: "$4.49",
      image: "🧊",
    },
    {
      id: 5,
      name: "Chocolate Croissant",
      category: "Pastries",
      price: "$4.25",
      image: "🥐",
    },
  ];

  const categories = [
    { id: 1, name: "Coffee", count: 12, image: "☕" },
    { id: 2, name: "Pastries", count: 8, image: "🥐" },
    { id: 3, name: "Breakfast", count: 6, image: "🍳" },
    { id: 4, name: "Sandwiches", count: 5, image: "🥪" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Alex Johnson",
      rating: 5,
      message: "Best coffee in town!",
      status: "approved",
    },
    {
      id: 2,
      name: "Sarah Miller",
      rating: 4,
      message: "Cozy atmosphere, great pastries",
      status: "pending",
    },
    {
      id: 3,
      name: "Mike Chen",
      rating: 5,
      message: "Perfect espresso every time",
      status: "approved",
    },
    {
      id: 4,
      name: "Emma Davis",
      rating: 3,
      message: "Good but a bit pricey",
      status: "pending",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1a120b] text-warm-gray-100 flex">
      {/* Sidebar */}
      <div
        className={`
          fixed lg:static inset-y-0 left-0 z-50 w-64 bg-[#0f0a06]
          transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-gold/20">
            <h1 className="text-2xl font-bold text-cream">Brew & Bean Café</h1>
            <p className="text-sm text-warm-gray-400 mt-1">Admin Panel</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1">
            {[
              { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
              { id: "categories", label: "Categories", icon: Tag },
              { id: "menu", label: "Menu Items", icon: UtensilsCrossed },
              { id: "bestsellers", label: "Best Sellers", icon: TrendingUp },
              { id: "reviews", label: "Customer Reviews", icon: MessageSquare },
              { id: "settings", label: "Settings", icon: Settings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false); // auto close when selecting on mobile
                }}
                className={`
                  flex items-center w-full p-3 rounded-lg transition-all duration-200 text-sm
                  ${
                    activeTab === item.id
                      ? "bg-gold/10 text-cream border-l-4 border-gold"
                      : "hover:bg-[#2b1d14] text-warm-gray-300 hover:text-cream"
                  }
                `}
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gold/20">
            <p className="text-sm text-cream">Admin User</p>
            <p className="text-xs text-warm-gray-400">manager@brewcafe.com</p>
          </div>
        </div>
      </div>

      {/* Main Content Wrapper */}
      <div className="flex-1">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 bg-[#1a120b]/90 backdrop-blur-sm border-b border-gold/10">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4">
            {/* Sidebar Toggle (Mobile Only) */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#0f0a06] hover:bg-[#2b1d14] transition-colors"
            >
              {sidebarOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Page Title */}
            <h2 className="text-lg sm:text-xl font-semibold text-cream capitalize">
              {activeTab.replace("-", " ")}
            </h2>

            {/* Avatar */}
            <div className="relative hidden sm:block">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-ping absolute -top-0.5 -right-0.5"></div>
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-beige"></div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4 sm:p-6 space-y-6">
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {/* Card */}
                <div className="bg-[#0f0a06] rounded-xl p-5 border border-gold/10 hover:border-gold/20 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-warm-gray-400">
                        Total Categories
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold text-cream mt-2">
                        8
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-beige/20 to-gold/20 flex items-center justify-center">
                      <Tag className="w-6 h-6 text-gold" />
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-[#0f0a06] rounded-xl p-5 border border-gold/10 hover:border-gold/20 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-warm-gray-400">Menu Items</p>
                      <p className="text-2xl sm:text-3xl font-bold text-cream mt-2">
                        42
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-beige/20 to-gold/20 flex items-center justify-center">
                      <UtensilsCrossed className="w-6 h-6 text-gold" />
                    </div>
                  </div>
                </div>

                {/* Card */}
                <div className="bg-[#0f0a06] rounded-xl p-5 border border-gold/10 hover:border-gold/20 transition-all">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-warm-gray-400">
                        Customer Reviews
                      </p>
                      <p className="text-2xl sm:text-3xl font-bold text-cream mt-2">
                        156
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-beige/20 to-gold/20 flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-gold" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Two-Column Section */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                {/* Left Box */}
                <div className="bg-[#0f0a06] rounded-xl p-6 border border-gold/10">
                  <h3 className="text-lg font-semibold text-cream mb-4">
                    Reviews Status
                  </h3>

                  <div className="space-y-4">
                    {/* Approved */}
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-warm-gray-300">Approved</span>
                        <span className="text-cream">128</span>
                      </div>
                      <div className="h-2 bg-[#2b1d14] rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-beige to-gold rounded-full"
                          style={{ width: "82%" }}
                        ></div>
                      </div>
                    </div>

                    {/* Pending */}
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-warm-gray-300">Pending</span>
                        <span className="text-cream">28</span>
                      </div>
                      <div className="h-2 bg-[#2b1d14] rounded-full">
                        <div
                          className="h-full bg-gradient-to-r from-gold/70 to-beige/70 rounded-full"
                          style={{ width: "18%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Box */}
                <div className="bg-[#0f0a06] rounded-xl p-6 border border-gold/10">
                  <h3 className="text-lg font-semibold text-cream mb-4">
                    Best Sellers
                  </h3>

                  <div className="space-y-3">
                    {[
                      "Caramel Macchiato",
                      "Blueberry Muffin",
                      "Iced Latte",
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 rounded-lg bg-[#1a120b] hover:bg-[#2b1d14] transition-colors"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-beige/20 to-gold/20 flex items-center justify-center mr-3">
                            🥤
                          </div>
                          <span className="text-warm-gray-300 text-sm sm:text-base">
                            {item}
                          </span>
                        </div>
                        <span className="text-cream font-medium">$4.99</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Categories Management */}
          {activeTab === "categories" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-cream">Categories</h2>
                <button className="flex items-center px-4 py-2 bg-gradient-to-r from-beige to-gold text-[#1a120b] rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Category
                </button>
              </div>

              {/* Add Category Form */}
              <div className="bg-[#0f0a06] rounded-xl p-6 border border-gold/10">
                <h3 className="text-lg font-semibold text-cream mb-4">
                  Add New Category
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-warm-gray-400 mb-2">
                      Category Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#1a120b] border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                      placeholder="e.g., Seasonal Specials"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-warm-gray-400 mb-2">
                      Category Image
                    </label>
                    <div className="border-2 border-dashed border-gold/30 rounded-lg p-8 text-center hover:border-gold/50 transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-gold mx-auto mb-2" />
                      <p className="text-warm-gray-300">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-warm-gray-400 mt-1">
                        SVG, PNG, JPG or GIF (max. 800x400px)
                      </p>
                    </div>
                  </div>
                </div>
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-beige to-gold text-[#1a120b] rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Save Category
                </button>
              </div>

              {/* Categories Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="bg-[#0f0a06] rounded-xl border border-gold/10 overflow-hidden hover:border-gold/20 transition-all duration-300 group"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-beige/20 to-gold/20 flex items-center justify-center text-2xl">
                          {category.image}
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 rounded-lg bg-[#1a120b] hover:bg-[#2b1d14] text-gold transition-colors">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 rounded-lg bg-[#1a120b] hover:bg-red-500/20 text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-cream mb-2">
                        {category.name}
                      </h3>
                      <p className="text-warm-gray-400">
                        {category.count} items
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Menu Items Management */}
          {activeTab === "menu" && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-cream">Menu Items</h2>
                <button className="flex items-center px-4 py-2 bg-gradient-to-r from-beige to-gold text-[#1a120b] rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Item
                </button>
              </div>

              {/* Add Item Form */}
              <div className="bg-[#0f0a06] rounded-xl p-6 border border-gold/10">
                <h3 className="text-lg font-semibold text-cream mb-6">
                  Add New Menu Item
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-warm-gray-400 mb-2">
                        Item Name
                      </label>
                      <input
                        type="text"
                        className="w-full bg-[#1a120b] border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-warm-gray-400 mb-2">
                        Description
                      </label>
                      <textarea className="w-full bg-[#1a120b] border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors h-32"></textarea>
                    </div>
                    <div>
                      <label className="block text-sm text-warm-gray-400 mb-2">
                        Price ($)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        className="w-full bg-[#1a120b] border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-warm-gray-400 mb-2">
                        Category
                      </label>
                      <select className="w-full bg-[#1a120b] border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors">
                        <option>Select Category</option>
                        {categories.map((cat) => (
                          <option key={cat.id} value={cat.name}>
                            {cat.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm text-warm-gray-400 mb-2">
                        Item Image
                      </label>
                      <div className="border-2 border-dashed border-gold/30 rounded-lg p-8 text-center hover:border-gold/50 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 text-gold mx-auto mb-2" />
                        <p className="text-warm-gray-300">Upload item photo</p>
                        <p className="text-sm text-warm-gray-400 mt-1">
                          High-quality image recommended
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mt-6 px-6 py-3 bg-gradient-to-r from-beige to-gold text-[#1a120b] rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Save Menu Item
                </button>
              </div>

              {/* Menu Items List */}
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-[#0f0a06] rounded-xl border border-gold/10 p-4 hover:border-gold/20 transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-beige/20 to-gold/20 flex items-center justify-center text-3xl">
                          {item.image}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-cream">
                            {item.name}
                          </h4>
                          <p className="text-warm-gray-400 text-sm">
                            {item.category}
                          </p>
                          <p className="text-gold font-medium">{item.price}</p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="px-4 py-2 rounded-lg bg-[#1a120b] hover:bg-[#2b1d14] text-gold transition-colors">
                          <Edit2 className="w-4 h-4 inline mr-2" />
                          Edit
                        </button>
                        <button className="px-4 py-2 rounded-lg bg-[#1a120b] hover:bg-red-500/20 text-red-400 transition-colors">
                          <Trash2 className="w-4 h-4 inline mr-2" />
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Best Sellers Settings */}
          {activeTab === "bestsellers" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-cream">
                Best Seller Settings
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-[#0f0a06] rounded-xl p-6 border border-gold/10">
                  <h3 className="text-lg font-semibold text-cream mb-4">
                    Configuration
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm text-warm-gray-400 mb-2">
                        Number of Best Sellers to Show
                      </label>
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() =>
                            setBestSellerCount(Math.max(1, bestSellerCount - 1))
                          }
                          className="w-10 h-10 rounded-lg bg-[#1a120b] border border-gold/20 flex items-center justify-center hover:border-gold transition-colors"
                        >
                          <span className="text-gold">-</span>
                        </button>
                        <div className="text-2xl font-bold text-cream min-w-16 text-center">
                          {bestSellerCount}
                        </div>
                        <button
                          onClick={() =>
                            setBestSellerCount(
                              Math.min(10, bestSellerCount + 1)
                            )
                          }
                          className="w-10 h-10 rounded-lg bg-[#1a120b] border border-gold/20 flex items-center justify-center hover:border-gold transition-colors"
                        >
                          <span className="text-gold">+</span>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-warm-gray-400 mb-2">
                        Select Best Seller Items
                      </label>
                      <div className="space-y-2">
                        {menuItems.map((item) => (
                          <label
                            key={item.id}
                            className="flex items-center p-3 rounded-lg bg-[#1a120b] hover:bg-[#2b1d14] transition-colors cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              className="w-4 h-4 text-gold bg-transparent border-gold/30 rounded focus:ring-gold/50 focus:ring-offset-[#0f0a06]"
                              checked={selectedBestSellers.includes(item.id)}
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setSelectedBestSellers([
                                    ...selectedBestSellers,
                                    item.id,
                                  ]);
                                } else {
                                  setSelectedBestSellers(
                                    selectedBestSellers.filter(
                                      (id) => id !== item.id
                                    )
                                  );
                                }
                              }}
                            />
                            <div className="flex items-center ml-3">
                              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-beige/20 to-gold/20 flex items-center justify-center mr-3">
                                {item.image}
                              </div>
                              <span className="text-cream">{item.name}</span>
                              <span className="ml-auto text-gold">
                                {item.price}
                              </span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#0f0a06] rounded-xl p-6 border border-gold/10">
                  <h3 className="text-lg font-semibold text-cream mb-4">
                    Preview
                  </h3>
                  <div className="space-y-4">
                    <div className="text-center p-8 border-2 border-dashed border-gold/20 rounded-lg">
                      <TrendingUp className="w-12 h-12 text-gold mx-auto mb-4" />
                      <h4 className="text-xl font-bold text-cream mb-2">
                        Best Sellers Section
                      </h4>
                      <p className="text-warm-gray-400">
                        {selectedBestSellers.length} of {bestSellerCount} items
                        selected
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-cream">
                        Selected Items:
                      </h4>
                      {menuItems
                        .filter((item) => selectedBestSellers.includes(item.id))
                        .slice(0, bestSellerCount)
                        .map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center p-3 rounded-lg bg-[#1a120b]"
                          >
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-beige/20 to-gold/20 flex items-center justify-center text-xl mr-3">
                              {item.image}
                            </div>
                            <span className="text-cream">{item.name}</span>
                            <span className="ml-auto text-gold">
                              {item.price}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <button className="px-8 py-3 bg-gradient-to-r from-beige to-gold text-[#1a120b] rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Save Best Seller Settings
                </button>
              </div>
            </div>
          )}

          {/* Customer Reviews Management */}
          {activeTab === "reviews" && (
            <div className="space-y-6">
              {/* Header + Filters */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <h2 className="text-2xl font-bold text-cream">
                  Customer Reviews
                </h2>

                {/* Filters */}
                <div className="flex flex-wrap gap-2">
                  {["all", "approved", "pending"].map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setReviewsFilter(filter)}
                      className={`px-4 py-2 rounded-lg capitalize transition-colors text-sm sm:text-base ${
                        reviewsFilter === filter
                          ? "bg-gradient-to-r from-beige to-gold text-[#1a120b] font-semibold"
                          : "bg-[#0f0a06] text-warm-gray-300 hover:bg-[#2b1d14]"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reviews List */}
              <div className="space-y-4">
                {reviews
                  .filter(
                    (review) =>
                      reviewsFilter === "all" || review.status === reviewsFilter
                  )
                  .map((review) => (
                    <div
                      key={review.id}
                      className="bg-[#0f0a06] rounded-xl border border-gold/10 p-6 hover:border-gold/20 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                        {/* Reviewer Info */}
                        <div>
                          <h4 className="text-lg font-semibold text-cream">
                            {review.name}
                          </h4>

                          {/* Rating */}
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < review.rating
                                    ? "fill-gold text-gold"
                                    : "text-warm-gray-600"
                                }`}
                              />
                            ))}
                            <span className="ml-2 text-sm text-warm-gray-400">
                              {review.rating}/5
                            </span>
                          </div>
                        </div>

                        {/* Status + Action Buttons */}
                        <div className="flex flex-row sm:flex-col items-center sm:items-end gap-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              review.status === "approved"
                                ? "bg-green-500/20 text-green-400"
                                : "bg-yellow-500/20 text-yellow-400"
                            }`}
                          >
                            {review.status}
                          </span>

                          <div className="flex space-x-2">
                            <button className="p-2 rounded-lg bg-[#1a120b] hover:bg-green-500/20 text-green-400 transition-colors">
                              <CheckCircle className="w-4 h-4" />
                            </button>

                            <button className="p-2 rounded-lg bg-[#1a120b] hover:bg-red-500/20 text-red-400 transition-colors">
                              <XCircle className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Review Message */}
                      <p className="text-warm-gray-300 text-sm sm:text-base">
                        {review.message}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Website Settings */}
          {activeTab === "settings" && (
            <div className="space-y-6 max-w-2xl">
              <h2 className="text-2xl font-bold text-cream">
                Website Settings
              </h2>

              <div className="bg-[#0f0a06] rounded-xl p-6 border border-gold/10">
                <div className="space-y-6">
                  <div>
                    <label className="flex items-center text-sm text-warm-gray-400 mb-2">
                      <Mail className="w-4 h-4 mr-2" />
                      Contact Email
                    </label>
                    <input
                      type="email"
                      defaultValue="contact@brewcafe.com"
                      className="w-full bg-[#1a120b] border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm text-warm-gray-400 mb-2">
                      <Phone className="w-4 h-4 mr-2" />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full bg-[#1a120b] border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm text-warm-gray-400 mb-2">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full bg-[#1a120b] border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors"
                    />
                  </div>

                  <div>
                    <label className="flex items-center text-sm text-warm-gray-400 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      Address
                    </label>
                    <textarea
                      defaultValue="123 Coffee Street, Brew City, BC 12345"
                      className="w-full bg-[#1a120b] border border-gold/20 rounded-lg px-4 py-3 text-cream focus:outline-none focus:border-gold transition-colors h-24"
                    />
                  </div>
                </div>

                <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gold/10">
                  <button className="px-6 py-3 rounded-lg bg-[#1a120b] text-cream hover:bg-[#2b1d14] transition-colors border border-gold/20">
                    Cancel
                  </button>
                  <button className="px-6 py-3 bg-gradient-to-r from-beige to-gold text-[#1a120b] rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Save Settings
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
