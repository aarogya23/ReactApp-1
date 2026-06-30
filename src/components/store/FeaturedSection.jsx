import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { featuredGames } from '../../data/storeData'

const FeaturedSection = ({ games = [], isLoading = false }) => {
  const visibleGames = games.length > 0 ? games : featuredGames

  return (
    <section className={`featured-section${isLoading ? ' store-section-loading' : ''}`}>
      <div className="featured-hero-card">
        <div className="featured-hero-bg">
          <div className="featured-icon featured-icon-1" />
          <div className="featured-icon featured-icon-2" />
          <div className="featured-icon featured-icon-3" />
          <div className="featured-icon featured-icon-4" />
        </div>
        <h2>Free Games to Try</h2>
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
          {visibleGames.map((game) => (
            <a
              key={game.id || game.title}
              className="featured-game-item"
              href={game.gameUrl}
              target="_blank"
              rel="noreferrer"
            >
              {game.image ? (
                <img
                  src={game.image}
                  alt={game.title}
                  className="featured-game-thumb featured-game-thumb-img"
                />
              ) : (
                <div className="featured-game-thumb" style={{ background: game.color }} />
              )}
              <div className="featured-game-info">
                <h3>{game.title}</h3>
                <div className="featured-game-price">
                  {game.discount && (
                    <>
                      <span className="discount-badge">-{game.discount}%</span>
                      <span className="original-price">{game.originalPrice}</span>
                    </>
                  )}
                  <span className="current-price">{game.genre || game.price}</span>
                  {game.genre && <span className="free-price">{game.price}</span>}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection
