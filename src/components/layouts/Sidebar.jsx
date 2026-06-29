import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiDownload, FiShoppingBag, FiBookOpen, FiX } from 'react-icons/fi'
import { SiUnrealengine } from 'react-icons/si'
import { MyThemeContext } from '../../App'

const navItems = [
  { to: '/', label: 'Store', icon: FiShoppingBag },
  { to: '/second', label: 'Library', icon: FiBookOpen },
  { to: '#', label: 'Unreal Engine', icon: SiUnrealengine },
  { to: '#', label: 'Fab', icon: null, letter: 'F' },
]

const Sidebar = ({ mobileOpen, onClose }) => {
  const location = useLocation()
  const { theme } = useContext(MyThemeContext)
  const isDark = theme === 'dark'

  return (
    <>
      {/* Backdrop overlay for mobile */}
      {mobileOpen && (
        <div
          className="sidebar-backdrop"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside className={`store-sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
        {/* Mobile close button */}
        <button
          className="sidebar-close-btn"
          onClick={onClose}
          aria-label="Close menu"
        >
          <FiX />
        </button>

        <Link
          to="/"
          className="sidebar-logo"
          aria-label="Trinetra Game Store"
          onClick={onClose}
        >
          <img
            src={isDark ? '/white.png' : '/black.png'}
            alt="Trinetra Game Store"
            className="sidebar-logo-img"
          />
        </Link>

        {/* Mobile brand text */}
        <span className="sidebar-brand-text">TRINETRA</span>

        <nav className="sidebar-nav">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive =
              item.to === '/'
                ? location.pathname === '/'
                : location.pathname === item.to

            return (
              <Link
                key={item.label}
                to={item.to}
                className={`sidebar-link ${isActive ? 'active' : ''}`}
                onClick={onClose}
              >
                {item.letter ? (
                  <span className="sidebar-letter">{item.letter}</span>
                ) : (
                  <Icon className="sidebar-icon" />
                )}
                <span className="sidebar-label">{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <button className="sidebar-download" aria-label="Downloads">
          <FiDownload />
        </button>
      </aside>
    </>
  )
}

export default Sidebar
