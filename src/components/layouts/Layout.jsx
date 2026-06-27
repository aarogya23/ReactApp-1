import React, { useContext } from 'react'
import Headers from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
import { MyThemeContext } from '../../App'

const Layout = () => {
  const { theme } = useContext(MyThemeContext)

  return (
    <div className={`app-shell ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
      <Headers />
      <section className="min-h-[80vh]">
        <Outlet />
      </section>
      <Footer />
    </div>
  )
}

export default Layout
