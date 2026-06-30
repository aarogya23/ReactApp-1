import React from 'react'
import { FiChevronLeft, FiChevronRight, FiChevronRight as FiArrow } from 'react-icons/fi'
import { topReleases } from '../../data/storeData'

const TopReleases = ({ games = [], isLoading = false }) => {
  const visibleGames = games.length > 0 ? games : topReleases

  return (
    <section className={`releases-section${isLoading ? ' store-section-loading' : ''}`}>
      <div className="releases-header">
        <h2>
          Free to Play Games <FiArrow className="releases-arrow" />
        </h2>
        <div className="carousel-controls">
          <button aria-label="Previous">
            <FiChevronLeft />
          </button>
          <button aria-label="Next">
            <FiChevronRight />
          </button>
        </div>
      </div>

      <div className="releases-grid">
        {visibleGames.map((game) => (
          <a
            key={game.id || game.title}
            className="release-card"
            href={game.gameUrl}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className="release-poster"
              style={game.image ? {} : { background: game.color }}
            >
              {game.image && (
                <img
                  src={game.image}
                  alt={game.title}
                  className="release-poster-img"
                />
              )}
              <div className="release-poster-shine" />
            </div>
            <p className="release-type">{game.genre || 'Base Game'}</p>
            <h3 className="release-title">{game.title}</h3>
            <p className="release-price">{game.platform || game.price}</p>
          </a>
        ))}
      </div>
    </section>
  )
}

export default TopReleases
