import React from 'react';

export default function Services() {
  return (
    <div>
      <section id="services" className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold text-center text-cyan-700 mb-4">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-cyan-50 border p-4 rounded-lg shadow-sm hover:shadow-md">
            <h3 className="text-lg font-medium text-cyan-800 mb-1">💧 Water Treatment</h3>
            <p className="text-sm text-gray-600">Clean and safe water solutions for your home or office.</p>
          </div>
          <div className="bg-cyan-50 border p-4 rounded-lg shadow-sm hover:shadow-md">
            <h3 className="text-lg font-medium text-cyan-800 mb-1">🛠️ Deep Boring</h3>
            <p className="text-sm text-gray-600">Reliable deep boring services with expert handling.</p>
          </div>
          <div className="bg-cyan-50 border p-4 rounded-lg shadow-sm hover:shadow-md">
            <h3 className="text-lg font-medium text-cyan-800 mb-1">🏠 Home Hardware</h3>
            <p className="text-sm text-gray-600">Wide range of quality hardware products and tools.</p>
          </div>
          <div className="bg-cyan-50 border p-4 rounded-lg shadow-sm hover:shadow-md">
            <h3 className="text-lg font-medium text-cyan-800 mb-1">🚿 Waterproofing</h3>
            <p className="text-sm text-gray-600">Protect your buildings with our expert waterproofing solutions.</p>
          </div>
          <div className="bg-cyan-50 border p-4 rounded-lg shadow-sm hover:shadow-md">
            <h3 className="text-lg font-medium text-cyan-800 mb-1">🏡 Home Solutions</h3>
            <p className="text-sm text-gray-600">We offer all kinds of customized home solutions.</p>
          </div>
          <div className="bg-cyan-50 border p-4 rounded-lg shadow-sm hover:shadow-md">
            <h3 className="text-lg font-medium text-cyan-800 mb-1">📋 Consultancy</h3>
            <p className="text-sm text-gray-600">Professional consultancy for water and construction projects.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
