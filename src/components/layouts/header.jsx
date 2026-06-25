import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiSearch, FiShoppingCart, FiUser, FiMenu, FiX } from 'react-icons/fi'
import { FaGamepad } from 'react-icons/fa'
import { MyThemeContext } from '../../App'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/second', label: 'Shop' },
  { to: '/services', label: 'Sell Games' },
  { to: '/aboutUs', label: 'About' },
  { to: '/contactUs', label: 'Contact' },
]

const Header = () => {

  // let value = useContext{MythemeContext}A
  const [menuOpen, setMenuOpen] = useState(false)

  let {theme, setTheme}  = useContext(MyThemeContext)

  
  const toggleTheme = () =>{
    if(theme == 'light'){
      setTheme('dark');
    }
    else{
      setTheme('light');
    }
  }

  return (
    <header className={`${theme === 'light' ? 'bg-white border-slate-200' : 'bg-slate-900 border-slate-700'} shadow-sm sticky top-0 z-50 border-b transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className={`flex items-center gap-2 text-xl font-black tracking-tight transition-colors ${theme === 'light' ? 'text-stone-800 hover:text-amber-700' : 'text-white hover:text-amber-400'}`}>
            <FaGamepad className="text-2xl" />
            GameBazaar
          </Link>

          <div className="hidden lg:flex flex-1 max-w-lg mx-8">
            <div className="relative w-full flex">
              <input
                type="search"
                placeholder="Search games, codes, consoles..."
                className={`w-full border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-colors duration-300 ${theme === 'light' ? 'bg-slate-50 text-stone-700 placeholder:text-slate-400 border-slate-200' : 'bg-slate-800 text-slate-100 placeholder:text-slate-500 border-slate-600'}`}
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
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${theme === 'light' ? 'text-slate-600 hover:text-amber-700 hover:bg-amber-50' : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800'}`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="#" className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${theme === 'light' ? 'text-slate-600 hover:text-amber-700 hover:bg-amber-50' : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800'}`}>
              <FiUser className="text-lg" />
              Login
            </Link>
            <Link to="/counter" className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${theme === 'light' ? 'text-slate-600 hover:text-amber-700 hover:bg-amber-50' : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800'}`}>
              <FiUser className="text-lg" />
              Counter
            </Link>
             <Link to="/classroom" className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${theme === 'light' ? 'text-slate-600 hover:text-amber-700 hover:bg-amber-50' : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800'}`}>
              <FiUser className="text-lg" />
              Classroom
            </Link>
            <button onClick={toggleTheme} className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${theme === 'light' ? 'bg-slate-800 text-white hover:bg-slate-700' : 'bg-amber-500 text-slate-900 hover:bg-amber-400'}`}>
              {theme === 'light' ? 'Dark' : 'Light'}
            </button>
            <Link to="#" className={`relative flex items-center gap-1.5 px-3 py-2 rounded-lg transition-all ${theme === 'light' ? 'text-slate-600 hover:text-amber-700 hover:bg-amber-50' : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800'}`}>
              <FiShoppingCart className="text-xl" />
              <span className="absolute -top-0.5 -right-0.5 bg-amber-600 text-white text-xs font-black rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden text-2xl transition-colors ${theme === 'light' ? 'text-slate-700 hover:text-amber-700' : 'text-slate-300 hover:text-amber-400'}`}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {menuOpen && (
          <div className={`md:hidden pb-4 border-t mt-1 pt-4 space-y-3 ${theme === 'light' ? 'border-slate-200' : 'border-slate-700'}`}>
            <div className="flex">
              <input
                type="search"
                placeholder="Search games..."
                className={`w-full border rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-200 transition-colors duration-300 ${theme === 'light' ? 'bg-slate-50 text-stone-700 placeholder:text-slate-400 border-slate-200' : 'bg-slate-800 text-slate-100 placeholder:text-slate-500 border-slate-600'}`}
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
                  className={`px-3 py-2.5 rounded-lg transition-all ${theme === 'light' ? 'text-slate-600 hover:text-amber-700 hover:bg-amber-50' : 'text-slate-300 hover:text-amber-400 hover:bg-slate-800'}`}
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
