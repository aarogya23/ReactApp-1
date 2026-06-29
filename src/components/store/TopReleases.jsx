import React from 'react'
import { FiChevronLeft, FiChevronRight, FiChevronRight as FiArrow } from 'react-icons/fi'
import { topReleases } from '../../data/storeData'

const TopReleases = () => {
  return (
    <section className="releases-section">
      <div className="releases-header">
        <h2>
          Top New Releases <FiArrow className="releases-arrow" />
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
        {topReleases.map((game) => (
          <article key={game.title} className="release-card">
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
            <p className="release-type">Base Game</p>
            <h3 className="release-title">{game.title}</h3>
            <p className="release-price">{game.price}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default TopReleases
