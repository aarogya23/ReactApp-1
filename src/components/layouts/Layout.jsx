import React from 'react'
import Headers from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
import Mycarosel from '../Mycarosel'
import Home from '../../pages/Home'

const Layout = () => {
  return (
    
    <>
    <Headers />
    <section style={{minHeight:"80vh"}}>
        <Outlet />
        
    </section>
    


    <Footer />
    </>
  )
}

export default Layout