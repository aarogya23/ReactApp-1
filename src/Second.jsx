import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { FiFilter, FiShoppingCart } from 'react-icons/fi'

const games = [
  { title: 'Elden Crown', type: 'Physical Disc', platform: 'PS5', price: '$44.99', rating: '4.9', image: '/kdb.webp' },
  { title: 'Turbo Street X', type: 'Digital Code', platform: 'PC', price: '$18.99', rating: '4.6', image: '/images.jpg' },
  { title: 'Battlefield Nexus', type: 'Pre-owned', platform: 'Xbox', price: '$24.99', rating: '4.7', image: '/pl.webp' },
  { title: 'Pixel Quest Deluxe', type: 'Digital Code', platform: 'Switch', price: '$14.99', rating: '4.8', image: '/images.jpg' },
  { title: 'Goal Masters 26', type: 'Physical Disc', platform: 'PS5', price: '$59.99', rating: '4.5', image: '/pl.webp' },
  { title: 'Night Ops Remastered', type: 'Pre-owned', platform: 'PC', price: '$21.99', rating: '4.4', image: '/kdb.webp' },
]

const filters = ['All', 'Digital Code', 'Physical Disc', 'Pre-owned']

const Second = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredGames = activeFilter === 'All'
    ? games
    : games.filter((game) => game.type === activeFilter)

  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="bg-white text-stone-800 px-6 py-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Marketplace</p>
            <h1 className="mt-3 text-4xl font-black text-stone-800">Games ready to buy</h1>
            <p className="mt-3 text-slate-500 max-w-2xl">
              Browse digital codes, new releases, and verified pre-owned games from trusted sellers.
            </p>
          </div>
          <button className="inline-flex items-center justify-center gap-2 bg-amber-600 text-white font-bold px-5 py-3 rounded-lg hover:bg-amber-700 transition-colors">
            <FiShoppingCart /> Cart: 0
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 text-sm font-bold text-slate-600">
            <FiFilter /> Filter
          </span>
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                activeFilter === filter
                  ? 'bg-amber-600 text-white border-amber-600'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-amber-300'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGames.map((game) => (
            <article key={game.title} className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
              <img src={game.image} alt={game.title} className="h-56 w-full object-cover" />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-black uppercase tracking-wide text-amber-800 bg-amber-50 px-3 py-1 rounded-full">
                    {game.type}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-bold text-amber-500">
                    <FaStar /> {game.rating}
                  </span>
                </div>
                <h2 className="mt-4 text-xl font-black text-stone-800">{game.title}</h2>
                <p className="mt-1 text-sm text-slate-500">{game.platform}</p>
                <div className="mt-5 flex items-center justify-between">
                  <p className="text-2xl font-black text-stone-800">{game.price}</p>
                  <button className="inline-flex items-center gap-2 bg-amber-600 text-white px-4 py-2 rounded-md font-black hover:bg-amber-700 transition-colors">
                    <FiShoppingCart /> Buy
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Second
