import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section would be here */}
      
      {/* About Section */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">About Marketash</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Marketash is a digital marketplace that connects farmers directly with buyers, eliminating middlemen. Our mission is to promote fair trade, ensure fresh organic produce, and empower local farmers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in transparency, eco-friendly practices, and leveraging technology to revolutionize agriculture. Whether you're a farmer or a buyer, Marketash makes trade simple, honest, and beneficial for all.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌾</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Direct Trade</h3>
              <p className="text-gray-600">Connect directly with farmers and buyers</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fair Prices</h3>
              <p className="text-gray-600">Transparent pricing without middlemen</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Produce</h3>
              <p className="text-gray-600">Quality organic products from local farms</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Technology-driven agricultural solutions</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Product listings would be here */}
    </div>
  );
}