import React, { useContext, useEffect } from 'react'
import Sidebar from './Sidebar'
import Header from './header'
import { Outlet } from 'react-router-dom'
import { MyThemeContext } from '../../App'

const Layout = () => {
  const { theme } = useContext(MyThemeContext)
  const isDark = theme === 'dark'

  useEffect(() => {
    document.body.classList.remove('theme-dark', 'theme-light')
    document.body.classList.add(isDark ? 'theme-dark' : 'theme-light')
  }, [isDark])

  return (
    <div className={`store-shell ${isDark ? 'theme-dark' : 'theme-light'}`}>
      <Sidebar />
      <div className="store-main">
        <Header />
        <main className="store-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
