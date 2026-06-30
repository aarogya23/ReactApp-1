import React, { useEffect, useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { heroSlides } from '../../data/storeData'

const apiGradients = [
  'linear-gradient(135deg, #101820 0%, #1f4f46 45%, #d0a83f 100%)',
  'linear-gradient(135deg, #181c25 0%, #5d3147 48%, #e88f3f 100%)',
  'linear-gradient(135deg, #111827 0%, #27506d 52%, #8dc6ff 100%)',
  'linear-gradient(135deg, #151515 0%, #47502f 48%, #d6c35c 100%)',
  'linear-gradient(135deg, #16131d 0%, #3b5f7a 50%, #c7e7e1 100%)',
]

const toHeroSlide = (game, index) => ({
  id: game.id,
  title: game.title,
  tagline: `${game.genre} / ${game.platform}`,
  description: game.shortDescription,
  cta: 'Play Free',
  gradient: apiGradients[index % apiGradients.length],
  accent: '#ffb000',
  image: game.thumbnail || game.image,
  gameUrl: game.gameUrl,
})

const HeroCarousel = ({ games = [], isLoading = false }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const slides = games.length > 0 ? games.map(toHeroSlide) : heroSlides
  const slide = slides[activeIndex] || slides[0]

  const goTo = (index) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => setAnimating(false), 400)
    setActiveIndex(index)
  }

  const goPrev = () => goTo(activeIndex === 0 ? slides.length - 1 : activeIndex - 1)
  const goNext = () => goTo(activeIndex === slides.length - 1 ? 0 : activeIndex + 1)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((currentIndex) => (
        currentIndex === slides.length - 1 ? 0 : currentIndex + 1
      ))
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  useEffect(() => {
    setActiveIndex(0)
  }, [games])

  const openGame = () => {
    if (slide.gameUrl) {
      window.open(slide.gameUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section className={`hero-section${isLoading ? ' store-section-loading' : ''}`}>
      <div className="hero-main">
        <div
          className={`hero-banner${animating ? ' hero-banner--fade' : ''}`}
          style={{ background: slide.gradient }}
        >
          {slide.image && (
            <div
              className="hero-bg-image"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
          )}
          <div className="hero-speed-lines" />
          <div className="hero-content">
            <div className="hero-logo-badge" style={{ color: slide.accent }}>
              {slide.title.split(' ')[0]}
              {slide.title.includes(' ') && (
                <strong>{slide.title.split(' ').slice(1).join(' ')}</strong>
              )}
            </div>
            <p className="hero-tagline">{slide.tagline}</p>
            <p className="hero-description">{slide.description}</p>
            <button className="hero-cta" onClick={openGame}>{slide.cta}</button>
          </div>

          <div className="hero-dots">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`hero-dot${index === activeIndex ? ' active' : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="hero-sidebar">
        {slides.map((item, index) => (
          <button
            key={item.id}
            className={`hero-sidebar-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => goTo(index)}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="hero-thumb hero-thumb-img"
              />
            ) : (
              <div className="hero-thumb" style={{ background: item.gradient }} />
            )}
            <span className="hero-thumb-title">{item.title}</span>
          </button>
        ))}

        <div className="hero-nav-arrows">
          <button onClick={goPrev} aria-label="Previous">
            <FiChevronLeft />
          </button>
          <button onClick={goNext} aria-label="Next">
            <FiChevronRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroCarousel
