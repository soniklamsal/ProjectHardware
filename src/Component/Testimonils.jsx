import React from 'react';

export default function Testimonils() {
  return (
    <div>
      <section id="testimonials" className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-center text-cyan-700">Happy Customers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4 rounded-md shadow">
            <p>"The best boring service I have used in Kathmandu! Fast and reliable."</p>
            <p className="text-sm mt-2 text-right">– Suman R.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-md shadow">
            <p>"Their water treatment system made our drinking water crystal clear."</p>
            <p className="text-sm mt-2 text-right">– Maya K.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
