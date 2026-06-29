import React, { useContext, useState } from 'react'
import {
  FiArrowLeft,
  FiSearch,
  FiBookmark,
  FiShoppingCart,
  FiSun,
  FiMoon,
  FiMenu,
} from 'react-icons/fi'
import { MyThemeContext } from '../../App'

const navTabs = ['Discover', 'Browse', 'News']

const Header = ({ onMenuOpen }) => {
  const [activeTab, setActiveTab] = useState('Discover')
  const { theme, setTheme } = useContext(MyThemeContext)
  const isDark = theme === 'dark'

  return (
    <header className="store-header-wrap">
      {/* ── Top bar ── */}
      <div className="store-header">
        <div className="header-left">
          {/* Hamburger — mobile only */}
          <button
            className="header-hamburger"
            onClick={onMenuOpen}
            aria-label="Open menu"
            id="hamburger-btn"
          >
            <FiMenu />
          </button>

          {/* Back arrow — desktop only */}
          <button className="header-back" aria-label="Go back">
            <FiArrowLeft />
          </button>

          {/* Logo */}
          <img
            src={isDark ? '/white.png' : '/black.png'}
            alt="Trinetra"
            className="header-logo"
          />

          {/* Search */}
          <div className="header-search">
            <FiSearch className="search-icon" />
            <input
              type="search"
              placeholder="Search store…"
              id="store-search-input"
            />
          </div>
        </div>

        {/* Desktop nav tabs — inline */}
        <nav className="header-tabs" aria-label="Store navigation">
          {navTabs.map((tab) => (
            <button
              key={tab}
              className={`header-tab ${activeTab === tab ? 'active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Action icons */}
        <div className="header-actions">
          <button className="header-icon-btn" aria-label="Wishlist">
            <FiBookmark />
          </button>
          <button className="header-icon-btn" aria-label="Cart">
            <FiShoppingCart />
          </button>
          <span className="header-divider" />
          <button
            className="header-icon-btn theme-toggle-btn"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {isDark ? <FiSun /> : <FiMoon />}
          </button>
          <button className="header-profile" aria-label="Profile">
            <span>K</span>
            <span className="online-dot" />
          </button>
        </div>
      </div>

      {/* ── Mobile tab strip (Discover / Browse / News) ── */}
      <div className="header-mobile-tabs" role="tablist" aria-label="Browse tabs">
        {navTabs.map((tab) => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            className={`header-mobile-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
    </header>
  )
}

export default Header
