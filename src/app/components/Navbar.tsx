"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 添加滚动监听以实现透明到半透明的过渡效果
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white backdrop-blur-md shadow-sm' 
        : 'bg-white/5 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
     

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-1 bg-amber-50 backdrop-blur-sm px-3 py-2 rounded-full">
              <Link href="/" className="px-3 py-2 text-xl font-medium text-gray-800 hover:text-black rounded-full hover:bg-white/70 transition-all">
                Hero
              </Link>
              <Link href="#about" className="px-3 py-2 text-xl font-medium text-gray-800 hover:text-black rounded-full hover:bg-white/70 transition-all">
                About
              </Link>
              <Link href="#projects" className="px-3 py-2 text-xl  font-medium text-gray-800 hover:text-black rounded-full hover:bg-white/70 transition-all">
                Projects
              </Link>
              <Link href="#skills" className="px-3 py-2 text-xl font-medium text-gray-800 hover:text-black rounded-full hover:bg-white/70 transition-all">
                Skills
              </Link>
              <Link href="#contact" className="px-3 py-2 text-xl  font-medium text-gray-800 hover:text-black rounded-full hover:bg-white/70 transition-all">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/80 backdrop-blur-md rounded-b-xl mx-4 mt-1 shadow-lg">
            <Link
              href="/"
              className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Hero
            </Link>
            <Link
              href="#about"
              className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;  