import React, { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiDownload, FiShoppingBag, FiBookOpen } from 'react-icons/fi'
import { SiUnrealengine } from 'react-icons/si'
import { MyThemeContext } from '../../App'

const navItems = [
  { to: '/', label: 'Store', icon: FiShoppingBag },
  { to: '/second', label: 'Library', icon: FiBookOpen },
  { to: '#', label: 'Unreal Engine', icon: SiUnrealengine },
  { to: '#', label: 'Fab', icon: null, letter: 'F' },
]

const Sidebar = () => {
  const location = useLocation()
  const { theme } = useContext(MyThemeContext)
  const isDark = theme === 'dark'

  return (
    <aside className="store-sidebar">
      <Link to="/" className="sidebar-logo" aria-label="Trinetra Game Store">
        <img
          src={isDark ? '/white.png' : '/black.png'}
          alt="Trinetra Game Store"
          className="sidebar-logo-img"
        />
      </Link>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = item.to === '/' ? location.pathname === '/' : location.pathname === item.to

          return (
            <Link
              key={item.label}
              to={item.to}
              className={`sidebar-link ${isActive ? 'active' : ''}`}
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
  )
}

export default Sidebar
