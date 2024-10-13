import React from "react";
import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({ cartItemCount }) => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-black text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";
  return (
    <nav className="bg-teal-700">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Shoplet
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/contact" className={linkClass}>
                  Contact
                </NavLink>
                <NavLink to="/checkout" className="relative top-2">
                  <FaShoppingCart className="w-6 h-6 text-white" />

                  {cartItemCount > 0 && (
                    <span className="absolute bottom-7 left-4 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                      {cartItemCount}
                    </span>
                  )}
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
