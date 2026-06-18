import React from 'react'
import Headers from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    
    <>
    <Headers />
    <section className="min-h-[80vh]">
        <Outlet />
        
    </section>
    


    <Footer />
    </>
  )
}

export default Layout
