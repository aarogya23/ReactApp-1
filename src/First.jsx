import React from 'react'
import { FiHeart } from 'react-icons/fi'
import Mycarosel from './components/Mycarosel'

const gameSections = [
  {
    title: 'Action Games',
    games: [
      { title: 'Call of Duty: Warzone', price: 'Rs 4999', image: '/pl.webp' },
      { title: 'Days Gone', price: 'Rs 5499', image: '/images.jpg' },
      { title: 'Ghost of Tsushima', price: 'Rs 3999', image: '/kdb.webp' },
    ],
  },
  {
    title: 'RPG Games',
    games: [
      { title: 'Horizon Zero', price: 'Rs 2999', image: '/images.jpg' },
      { title: 'God of War', price: 'Rs 3499', image: '/kdb.webp' },
      { title: 'Elden Ring', price: 'Rs 4499', image: '/pl.webp' },
    ],
  },
  {
    title: 'Sports Games',
    games: [
      { title: 'EA FC 24', price: 'Rs 3999', image: '/pl.webp' },
      { title: 'NBA 2K24', price: 'Rs 3499', image: '/images.jpg' },
      { title: 'Cricket Champions', price: 'Rs 2999', image: '/kdb.webp' },
    ],
  },
]

const First = () => {
  return (
    <main className="dashboard-home">
      <section className="hero-carousel-section">
        <Mycarosel />
      </section>

      {gameSections.map((section) => (
        <section key={section.title} className="game-section">
          <h2>{section.title}</h2>
          <div className="game-grid">
            {section.games.map((game) => (
              <article key={game.title} className="game-card">
                <button className="wishlist-button" aria-label={`Add ${game.title} to wishlist`}>
                  <FiHeart />
                </button>
                <img src={game.image} alt={game.title} />
                <div className="game-card-info">
                  <h3>{game.title}</h3>
                  <p>{game.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </main>
  )
}

export default First
