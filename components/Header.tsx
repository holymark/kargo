"use client"
import { ChevronDown, Globe, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isTrackingOpen, setTrackingOpen] = useState(false);
  const [isShippingOpen, setShippingOpen] = useState(false);

  const trackingRef = useRef<HTMLLIElement>(null);
  const shippingRef = useRef<HTMLLIElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        trackingRef.current &&
        !trackingRef.current.contains(event.target as Node)
      ) {
        setTrackingOpen(false);
      }
      if (
        shippingRef.current &&
        !shippingRef.current.contains(event.target as Node)
      ) {
        setShippingOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);
  const toggleTracking = () => {
    setTrackingOpen(!isTrackingOpen);
    setShippingOpen(false); // Close Shipping if open
  };
  const toggleShipping = () => {
    setShippingOpen(!isShippingOpen);
    setTrackingOpen(false); // Close Tracking if open
  };

  return (
    <header className="bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/">
          <div className="logo flex items-center space-x-2 text-2xl font-semibold text-red-700">
            <span className="font-extrabold">Kargo</span>
          </div>
        </Link>
        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`z-10 lg:flex lg:space-x-8 items-center text-gray-900 font-medium transition-all duration-300 absolute lg:static top-16 left-0 lg:top-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none ${isMenuOpen ? "block" : "hidden"
            }`}
        >
          {/* Tracking Dropdown */}
          <li ref={trackingRef} className="relative">
            <button
              className="flex items-center justify-between w-full lg:w-auto px-6 py-3 lg:px-0 lg:py-0 hover:text-red-600 transition focus:outline-none"
              onClick={toggleTracking}
            >
              <span>Tracking</span>
              <ChevronDown className="w-5 h-5" />
            </button>
            {isTrackingOpen && (
              <div className="absolute mt-2 bg-white border border-gray-200 shadow-xl rounded-lg w-full lg:w-80 p-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Enter Tracking Number
                </label>
                <input
                  type="text"
                  placeholder="e.g., 12345"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring focus:ring-red-300"
                />
                <button
                  type="submit"
                  className="w-full mt-4 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
                >
                  Track Package
                </button>
              </div>
            )}
          </li>

          {/* Shipping Dropdown */}
          <li ref={shippingRef} className="relative">
            <button
              className="flex items-center justify-between w-full lg:w-auto px-6 py-3 lg:px-0 lg:py-0 hover:text-red-600 transition focus:outline-none"
              onClick={toggleShipping}
            >
              <span>Waybilling</span>
              <ChevronDown className="w-5 h-5" />
            </button>
            {isShippingOpen && (
              <div className="absolute mt-2 bg-white border border-gray-200 shadow-xl rounded-lg w-full lg:w-64 p-6">
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="/book-now"
                      className="block text-sm text-gray-700 hover:text-red-600 transition"
                    >
                      Waybill Form
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>

          {/* Support Link */}
          <li>
            <Link
              href="/support"
              className="block px-6 py-3 lg:px-0 lg:py-0 hover:text-red-600 transition"
            >
              Support
            </Link>
          </li>
        </ul>

        {/* Country Flag Section */}
        <div className="country-flag hidden lg:flex items-center space-x-2">
          <Globe className="w-5 h-5 text-black" />
          <select className="border border-gray-300 rounded-md py-1 px-2 text-sm bg-white focus:outline-none focus:ring focus:ring-red-300">
            <option value="us">English</option>
            <option value="hausa">Hausa</option>
            <option value="igbo">Igbo</option>
            <option value="yoruba">Yoruba</option>
          </select>
        </div>
      </nav>
    </header>
  );
};

export default Header;
