import React, { useState, useEffect } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <nav
        className={`bg-white ${
          isScrolled ? 'shadow-md' : ''
        } border-b border-gray-200 py-2.5 fixed top-0 w-full z-50 transition-all duration-500 ease-in-out`}
      >
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-900">
              Kathmandu Water Treatment
            </span>
          </a>

          {/* Contact & Burger Menu Button */}
          <div className="flex items-center lg:order-2">
            <a
              href="#contact"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
            >
              Contact
            </a>
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none lg:hidden ml-3"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <HiOutlineX className="w-6 h-6" />
              ) : (
                <HiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Navigation Menu */}
          <div
            className={`w-full lg:flex lg:w-auto lg:order-1 ${
              menuOpen ? '' : 'hidden'
            }`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li><a href="#about" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-purple-700">About</a></li>
              <li><a href="#services" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-purple-700">Services</a></li>
              <li><a href="#products" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-purple-700">Products</a></li>
              <li><a href="#photos" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-purple-700">Photos</a></li>
              <li><a href="#testimonials" className="block py-2 pr-4 pl-3 text-gray-700 hover:text-purple-700">Testimonials</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
