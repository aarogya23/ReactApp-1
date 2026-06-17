import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white text-gray-800 shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Main Header Row */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight text-blue-600 hover:text-blue-500 transition-colors duration-200">
            Store Front
          </Link>

          {/* Search Bar — hidden on small screens */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full flex">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full bg-gray-100 text-gray-800 placeholder:text-gray-400 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-r-lg transition-colors duration-200 flex items-center gap-1">
                <FiSearch className="text-lg" />
                <span className="hidden lg:inline">Search</span>
              </button>
            </div>
          </div>

          {/* Desktop Nav Actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/aboutUs" className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200">
              
              About Us
            </Link>
             <Link to="/contactUs" className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200">
              
              Contact Us
            </Link>
             <Link to="/services" className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200">
              
              Our Services
            </Link>
            <Link to="#" className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200">
              <FiUser className="text-lg" />
              Login
            </Link>
            <Link to="#" className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200">
              Sign Up
            </Link>
            <Link to="#" className="relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200 ml-1">
              <FiShoppingCart className="text-xl" />
              {/* Cart Badge */}
              <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-1 pt-4 space-y-3">
            {/* Mobile Search */}
            <div className="flex">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full bg-gray-100 text-gray-800 placeholder:text-gray-400 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors duration-200">
                <FiSearch className="text-lg" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col gap-1">
              <Link to="/" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200">
                Home
              </Link>
              <Link to="/second" onClick={() => setMenuOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-all duration-200">
                Products
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex gap-2 pt-2 border-t border-gray-200">
              <Link to="#" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 border border-gray-300 hover:bg-gray-100 transition-all duration-200">
                <FiUser /> Login
              </Link>
              <Link to="#" className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200">
                Sign Up
              </Link>
              <Link to="#" className="relative flex items-center justify-center px-4 py-2.5 rounded-lg text-gray-600 border border-gray-300 hover:bg-gray-100 transition-all duration-200">
                <FiShoppingCart className="text-lg" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}

export default Header