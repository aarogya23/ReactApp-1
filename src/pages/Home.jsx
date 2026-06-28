import React from 'react'
import HeroCarousel from '../components/store/HeroCarousel'
import FeaturedSection from '../components/store/FeaturedSection'
import TopReleases from '../components/store/TopReleases'
import BottomBanner from '../components/store/BottomBanner'

const Home = () => {
  return (
    <div className="store-page">
      <HeroCarousel />
      <FeaturedSection />
      <BottomBanner />
      <TopReleases />
    </div>
  )
}

export default Home
