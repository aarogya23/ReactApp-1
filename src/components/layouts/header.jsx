import React, { useContext, useState } from 'react'
import {
  FiArrowLeft,
  FiSearch,
  FiBookmark,
  FiGift,
  FiShoppingCart,
  FiUsers,
  FiSun,
  FiMoon,
} from 'react-icons/fi'
import { MyThemeContext } from '../../App'

const navTabs = ['Discover', 'Browse', 'News']

const Header = () => {
  const [activeTab, setActiveTab] = useState('Discover')
  const { theme, setTheme } = useContext(MyThemeContext)
  const isDark = theme === 'dark'

  return (
    <header className="store-header">
      <div className="header-left">
        <button className="header-back" aria-label="Go back">
          <FiArrowLeft />
        </button>
        <img
          src={isDark ? '/white.png' : '/black.png'}
          alt="Trinetra Game Store"
          className="header-logo"
        />
        <div className="header-search">
          <FiSearch className="search-icon" />
          <input type="search" placeholder="Search store" />
        </div>
      </div>

      <nav className="header-tabs">
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

      <div className="header-actions">
        <button className="header-icon-btn" aria-label="Wishlist">
          <FiBookmark />
        </button>
        <button className="header-icon-btn" aria-label="Gifts">
          <FiGift />
        </button>
        <button className="header-icon-btn" aria-label="Cart">
          <FiShoppingCart />
        </button>
        <span className="header-divider" />
        <button className="header-icon-btn" aria-label="Friends">
          <FiUsers />
        </button>
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
    </header>
  )
}

export default Header
