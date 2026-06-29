import React, { useContext, useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Header from './header'
import MobileTabBar from './MobileTabBar'
import { Outlet, useLocation } from 'react-router-dom'
import { MyThemeContext } from '../../App'

const Layout = () => {
  const { theme } = useContext(MyThemeContext)
  const isDark = theme === 'dark'
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Apply theme class to body
  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-light')
    document.body.classList.add(isDark ? 'theme-dark' : 'theme-light')
  }, [isDark])

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <div className={`store-shell ${isDark ? 'theme-dark' : 'theme-light'}`}>
      {/* Desktop sidebar */}
      <Sidebar mobileOpen={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="store-main">
        <Header onMenuOpen={() => setMenuOpen(true)} />

        <main className="store-content">
          <Outlet />
        </main>

        {/* Bottom tab bar — mobile only */}
        <MobileTabBar />
      </div>
    </div>
  )
}

export default Layout
