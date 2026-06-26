import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import First from './First'
import Second from './Second'
import LetConstVar from './pages/LetConstVar'
import RevisionLayout from './components/layouts/RevisionLayout'
import PageNotFound from './pages/PageNotFound'
import Layout from './components/layouts/Layout'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/Contactus'
import Services from './pages/Services'
import Counter from './hooks/Counter'
import Classroom from './pages/Classroom'
import DataFetch from './hooks/DataFetch'
import Post from './hooks/Post'
const MyRouter = () => {
  return (
    <Router>    
        <Routes>   
          <Route element={<Layout />} >       
            <Route path='/' element={<First />} />
            <Route path='/second' element={<Second />} />

            

            <Route path='/revision' element={<RevisionLayout />} >
                <Route path='topic1' element={<LetConstVar />} />
                <Route path='First' element={<First />} />
            </Route>

            <Route path='*' element={<PageNotFound />} />

            <Route path='/home' element={<Home/>} />
            <Route path='/aboutUs' element={<AboutUs/>} />
            <Route path='/contactUs' element={<ContactUs/>} />
            <Route path='/services' element={<Services/>} />

            <Route path='counter' element={<Counter/>} />
            <Route path='classroom' element={<Classroom/>} />
            <Route path='datafetch' element={<DataFetch/>} />
            <Route path='/post/:id' element={<Post/>} />
            </Route>  
        </Routes>    
    </Router>
  )
}

export default MyRouter
