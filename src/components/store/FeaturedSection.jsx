import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { featuredGames } from '../../data/storeData'

const FeaturedSection = () => {
  return (
    <section className="featured-section">
      <div className="featured-hero-card">
        <div className="featured-hero-bg">
          <div className="featured-icon featured-icon-1">🕹️</div>
          <div className="featured-icon featured-icon-2">🔥</div>
          <div className="featured-icon featured-icon-3">🥊</div>
          <div className="featured-icon featured-icon-4">🏎️</div>
        </div>
        <h2>Discover Something New</h2>
        <button className="featured-cta">View More</button>
      </div>

      <div className="featured-games">
        <div className="featured-games-header">
          <span />
          <div className="carousel-controls">
            <button aria-label="Previous">
              <FiChevronLeft />
            </button>
            <button aria-label="Next">
              <FiChevronRight />
            </button>
          </div>
        </div>

        <div className="featured-games-grid">
          {featuredGames.map((game) => (
            <article key={game.title} className="featured-game-item">
              <div className="featured-game-thumb" style={{ background: game.color }} />
              <div className="featured-game-info">
                <h3>{game.title}</h3>
                <div className="featured-game-price">
                  {game.discount && (
                    <>
                      <span className="discount-badge">-{game.discount}%</span>
                      <span className="original-price">{game.originalPrice}</span>
                    </>
                  )}
                  <span className="current-price">{game.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
