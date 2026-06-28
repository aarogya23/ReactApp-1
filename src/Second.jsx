import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiFilter, FiShoppingCart } from 'react-icons/fi'

const games = [
  { title: 'Elden Crown', type: 'Physical Disc', platform: 'PS5', price: '$44.99', rating: '4.9', color: '#1a1a2e' },
  { title: 'Turbo Street X', type: 'Digital Code', platform: 'PC', price: '$18.99', rating: '4.6', color: '#0a3d62' },
  { title: 'Battlefield Nexus', type: 'Pre-owned', platform: 'Xbox', price: '$24.99', rating: '4.7', color: '#4a1010' },
  { title: 'Pixel Quest Deluxe', type: 'Digital Code', platform: 'Switch', price: '$14.99', rating: '4.8', color: '#2c003e' },
  { title: 'Goal Masters 26', type: 'Physical Disc', platform: 'PS5', price: '$59.99', rating: '4.5', color: '#1a0505' },
  { title: 'Night Ops Remastered', type: 'Pre-owned', platform: 'PC', price: '$21.99', rating: '4.4', color: '#3d5a3d' },
]

const filters = ['All', 'Digital Code', 'Physical Disc', 'Pre-owned']

const Second = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredGames = activeFilter === 'All'
    ? games
    : games.filter((game) => game.type === activeFilter)

  return (
    <div className="store-page library-page">
      <div className="library-header">
        <div>
          <p className="library-eyebrow">Library</p>
          <h1>Your Games</h1>
          <p className="library-sub">Browse digital codes, new releases, and verified pre-owned games.</p>
        </div>
        <button className="library-cart-btn">
          <FiShoppingCart /> Cart: 0
        </button>
      </div>

      <div className="library-filters">
        <span className="library-filter-label">
          <FiFilter /> Filter
        </span>
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`library-filter-btn ${activeFilter === filter ? 'active' : ''}`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="library-grid">
        {filteredGames.map((game) => (
          <article key={game.title} className="library-card">
            <div className="library-card-poster" style={{ background: game.color }} />
            <div className="library-card-body">
              <div className="library-card-meta">
                <span className="library-tag">{game.type}</span>
                <span className="library-rating">
                  <FaStar /> {game.rating}
                </span>
              </div>
              <h2>{game.title}</h2>
              <p className="library-platform">{game.platform}</p>
              <div className="library-card-footer">
                <p className="library-price">{game.price}</p>
                <button className="library-buy-btn">
                  <FiShoppingCart /> Buy
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Second
