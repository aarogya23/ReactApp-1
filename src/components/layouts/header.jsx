import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu, FiMoon, FiSearch, FiShoppingCart, FiSun, FiUser, FiX } from 'react-icons/fi'
import { FaFire } from 'react-icons/fa'
import { MyThemeContext } from '../../App'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '#', label: 'AskAi' },
  { to: '/second', label: 'Library' },
  { to: '#', label: 'Wishlist' },
]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { theme, setTheme } = useContext(MyThemeContext)
  const isDark = theme === 'dark'

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  return (
    <header className="dashboard-header">
      <div className="dashboard-nav">
        <Link to="/" className="studio-logo" onClick={() => setMenuOpen(false)}>
          <FaFire className="studio-logo-icon" />
          <span>
            <strong>Trinetra</strong>
            <small>Game Studio</small>
          </span>
        </Link>

        <nav className="desktop-links">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="nav-link">
              {link.label}
            </Link>
          ))}
          <Link to="#" className="nav-link cart-link">
            Cart
            <span className="cart-badge">1</span>
          </Link>
        </nav>

        <div className="header-actions">
          <div className="search-box">
            <input type="search" placeholder="Search for games..." />
            <button>Search</button>
          </div>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <FiSun /> : <FiMoon />}
          </button>

          <button className="profile-button" aria-label="Profile">
            <FiUser />
          </button>
        </div>

        <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-panel">
          <div className="search-box">
            <input type="search" placeholder="Search for games..." />
            <button>
              <FiSearch />
            </button>
          </div>
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} className="nav-link" onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link to="#" className="nav-link cart-link" onClick={() => setMenuOpen(false)}>
            <FiShoppingCart /> Cart <span className="cart-badge">1</span>
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header
