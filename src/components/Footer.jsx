import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-teal-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <span className="hidden md:block text-white text-xl font-bold ml-2">
                Shoplet
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className="text-white text-sm px-3 py-1">
                  Home
                </NavLink>
                <NavLink to="/contact" className="text-white text-sm px-3 py-1">
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-white text-xs py-2">
          © 2024 Shoplet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
