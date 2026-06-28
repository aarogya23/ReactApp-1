import React, { useState } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { heroSlides } from '../../data/storeData'

const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const slide = heroSlides[activeIndex]

  const goPrev = () => setActiveIndex((i) => (i === 0 ? heroSlides.length - 1 : i - 1))
  const goNext = () => setActiveIndex((i) => (i === heroSlides.length - 1 ? 0 : i + 1))

  return (
    <section className="hero-section">
      <div className="hero-main">
        <div className="hero-banner" style={{ background: slide.gradient }}>
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
          <div className="hero-characters">
            <div className="hero-char hero-char-1" />
            <div className="hero-char hero-char-2" />
            <div className="hero-char hero-char-3" />
          </div>
        </div>
      </div>

      <div className="hero-sidebar">
        {heroSlides.map((item, index) => (
          <button
            key={item.id}
            className={`hero-sidebar-item ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="hero-thumb" style={{ background: item.gradient }} />
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
