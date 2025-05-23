import React from 'react';

// Import all images
import work1 from '../images/work1.jpg';
import work2 from '../images/work2.jpg';
import work3 from '../images/work3.jpg';
import work4 from '../images/work4.jpg';
import work5 from '../images/work5.jpg';
import work6 from '../images/work6.jpg';
import work7 from '../images/work7.jpg';
import work8 from '../images/work8.jpg';
import work9 from '../images/work9.jpg';
import work10 from '../images/work10.jpg';

// All image imports in one array
const images = [work1, work2, work3, work4, work5, work6, work7, work8, work9, work10];

export default function Photos() {
  return (
    <section id="photos" className="py-10 bg-gray-50">
      <h2 className="text-center mb-8 font-sans text-2xl font-semibold">
        Our Work Photos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-7xl mx-auto px-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Work Photo ${index + 1}`}
            className="w-[250px] h-[180px] sm:w-full sm:h-[150px] rounded-lg object-cover shadow-md mx-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
}
