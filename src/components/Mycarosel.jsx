import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const slides = [
  {
    image: '/pl.webp',
    title: 'Weekend Mega Sale',
    text: 'Save on sports, racing, action, and adventure games.',
  },
  {
    image: '/kdb.webp',
    title: 'Verified Pre-owned Picks',
    text: 'Find inspected discs and cartridges at better prices.',
  },
  {
    image: '/images.jpg',
    title: 'Sell Games Fast',
    text: 'List old titles and turn your library into wallet credit.',
  },
]

const Mycarosel = () => {
  return (
    <div className="dashboard-carousel">
      <div className="carousel-glow left" />
      <div className="carousel-glow right" />
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <button className="carousel-arrow carousel-arrow-left" onClick={clickHandler} disabled={!hasPrev} aria-label="Previous slide">
            <FiChevronLeft />
          </button>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <button className="carousel-arrow carousel-arrow-right" onClick={clickHandler} disabled={!hasNext} aria-label="Next slide">
            <FiChevronRight />
          </button>
        )}
      >
        {slides.map((slide) => (
          <div key={slide.title} className="dashboard-slide">
            <img src={slide.image} alt={slide.title} className="carousel-image-motion" />
            <div className="slide-caption">
              <div>
                <h2>{slide.title}</h2>
                <p>{slide.text}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Mycarosel
