import React from 'react';

export default function Products() {
  return (
    <div>
      <section id="products" className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-center text-cyan-700 mb-6">Our Products & Offerings</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {/* Product Item */}
          <div className="bg-cyan-50 border p-4 rounded-lg shadow-sm hover:shadow-md text-center">
            <h3 className="text-lg font-medium text-cyan-800 mb-2">PPR Pipes</h3>
            <p className="text-sm text-gray-600">Durable and corrosion-resistant pipes suitable for hot and cold water systems.</p>
          </div>
          <div className="bg-cyan-50 border p-4 rounded-lg shadow-sm hover:shadow-md text-center">
            <h3 className="text-lg font-medium text-cyan-800 mb-2">CPVC Pipes</h3>
            <p className="text-sm text-gray-600">High-temperature resistant pipes ideal for residential and commercial plumbing.</p>
          </div>
          <div className="bg-cyan-50 border p-4 rounded-lg shadow-sm hover:shadow-md text-center">
            <h3 className="text-lg font-medium text-cyan-800 mb-2">UPVC Pipes</h3>
            <p className="text-sm text-gray-600">Lightweight and durable pipes perfect for drainage and irrigation systems.</p>
          </div>
          <div className="bg-cyan-50 border p-4 rounded-lg shadow-sm hover:shadow-md text-center">
            <h3 className="text-lg font-medium text-cyan-800 mb-2">Bath Fittings</h3>
            <p className="text-sm text-gray-600">Elegant and functional fittings to enhance your bathroom aesthetics.</p>
          </div>
          <div className="bg-cyan-50 border p-4 rounded-lg shadow-sm hover:shadow-md text-center">
            <h3 className="text-lg font-medium text-cyan-800 mb-2">Sanitary Items</h3>
            <p className="text-sm text-gray-600">Comprehensive range of sanitary products ensuring hygiene and comfort.</p>
          </div>
          <div className="bg-cyan-50 border p-4 rounded-lg shadow-sm hover:shadow-md text-center">
            <h3 className="text-lg font-medium text-cyan-800 mb-2">Asian Paints</h3>
            <p className="text-sm text-gray-600">Premium quality paints offering vibrant colors and long-lasting finish.</p>
          </div>
          <div className="bg-cyan-50 border p-4 rounded-lg shadow-sm hover:shadow-md text-center">
            <h3 className="text-lg font-medium text-cyan-800 mb-2">Dulux Paints</h3>
            <p className="text-sm text-gray-600">Trusted brand providing a wide palette of colors for every surface.</p>
          </div>
          {/* Add more product items as needed */}
        </div>
      </section>
    </div>
  );
}
