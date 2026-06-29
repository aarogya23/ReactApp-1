import React, { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { heroSlides } from '../../data/storeData'

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const slide = heroSlides[activeIndex]

  const goTo = (index) => {
    if (animating) return
    setAnimating(true)
    setTimeout(() => setAnimating(false), 400)
    setActiveIndex(index)
  }

  const goPrev = () => goTo(activeIndex === 0 ? heroSlides.length - 1 : activeIndex - 1)
  const goNext = () => goTo(activeIndex === heroSlides.length - 1 ? 0 : activeIndex + 1)

  // Auto-play
  useEffect(() => {
    const timer = setInterval(goNext, 5000)
    return () => clearInterval(timer)
  }, [activeIndex])

  return (
    <section className="hero-section">
      <div className="hero-main">
        <div
          className={`hero-banner${animating ? ' hero-banner--fade' : ''}`}
          style={{ background: slide.gradient }}
        >
          {/* Background image with overlay */}
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
            <button className="hero-cta">{slide.cta}</button>
          </div>

          {/* Dot indicators (mobile) */}
          <div className="hero-dots">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                className={`hero-dot${i === activeIndex ? ' active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Sidebar thumbnails (desktop) */}
      <div className="hero-sidebar">
        {heroSlides.map((item, index) => (
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
