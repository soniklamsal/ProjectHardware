import React from 'react';
import workImage from '../images/work5.jpg'; // update if necessary

export default function About() {
  return (
    <section className="bg-gray-50 py-16" id="about">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image section */}
          <div className="rounded-lg overflow-hidden shadow-md border">
            <img 
              src={workImage} 
              alt="Our Storefront" 
              className="w-full h-[350px] object-cover"
            />
          </div>

          {/* Text content section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-4">
              We are a local business committed to providing essential products and exceptional service to our customers. From hardware and paints to water solutions, our store offers a wide range of trusted brands.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Built on years of trust and dedication, we take pride in being a reliable name in the community. Whether you are a homeowner, contractor, or builder—we’re here to help you succeed.
            </p>
            <a 
              href="#contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded shadow transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
