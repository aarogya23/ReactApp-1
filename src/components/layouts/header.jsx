import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi'
import { FaGamepad } from 'react-icons/fa'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/second', label: 'Shop' },
  { to: '/services', label: 'Sell Games' },
  { to: '/aboutUs', label: 'About' },
  { to: '/contactUs', label: 'Contact' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-white text-stone-800 shadow-sm sticky top-0 z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-xl font-black tracking-tight text-stone-800 hover:text-amber-700 transition-colors">
            <FaGamepad className="text-2xl" />
            GameBazaar
          </Link>

          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full flex">
              <input
                type="search"
                placeholder="Search games, codes, consoles..."
                className="w-full bg-slate-50 text-stone-700 placeholder:text-slate-400 border border-slate-200 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-r-lg transition-colors flex items-center gap-1 font-bold">
                <FiSearch className="text-lg" />
                <span>Search</span>
              </button>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-amber-700 hover:bg-amber-50 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link to="#" className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:text-amber-700 hover:bg-amber-50 transition-all">
              <FiUser className="text-lg" />
              Login
            </Link>
            <Link to="#" className="relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-600 hover:text-amber-700 hover:bg-amber-50 transition-all">
              <FiShoppingCart className="text-xl" />
              <span className="absolute -top-0.5 -right-0.5 bg-amber-600 text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-slate-700 hover:text-amber-700 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200 mt-1 pt-4 space-y-3">
            <div className="flex">
              <input
                type="search"
                placeholder="Search games..."
                className="w-full bg-slate-50 text-stone-700 placeholder:text-slate-400 border border-slate-200 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-r-lg transition-colors">
                <FiSearch className="text-lg" />
              </button>
            </div>

            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-slate-600 hover:text-amber-700 hover:bg-amber-50 transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
