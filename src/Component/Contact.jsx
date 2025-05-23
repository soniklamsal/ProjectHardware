import React from 'react';

export default function Contact() {
  return (
    <div>
      <section id="contact" className="bg-cyan-100 rounded-lg shadow-md p-8 max-w-3xl mx-auto mb-8">
        <h2 className="text-3xl font-semibold mb-6 text-cyan-800 text-center">Contact Us</h2>
        <div className="space-y-6 text-gray-700 text-lg">
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-cyan-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 10h1l2 7 6-13 3 8 3-7"></path>
            </svg>
            <span>
              Phone:{' '}
              <a className="text-cyan-700 hover:underline">
                +977-9851159411
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-cyan-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M16 12h1a4 4 0 0 0 4-4v-1"></path>
              <path d="M3 12v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M8 16h8"></path>
              <path d="M12 16v4"></path>
            </svg>
            <span>
              Email:{' '}
              <a href="mailto:info@kathmanduwater.com" className="text-cyan-700 hover:underline">
                mainaliprakash74@gmail.com
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <svg className="w-6 h-6 text-cyan-700" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 10c0 6-9 13-9 13S3 16 3 10a9 9 0 1 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>Location: Kathmandu, Nepal</span>
          </div>
        </div>
      </section>
    </div>
  );
}
