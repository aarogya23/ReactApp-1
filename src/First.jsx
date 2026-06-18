import React from 'react'
import { Link } from 'react-router-dom'
import { FaShieldAlt, FaTruck, FaExchangeAlt } from 'react-icons/fa'
import Mycarosel from './components/Mycarosel'

const featuredGames = [
  {
    title: 'Cyber Rift 2099',
    platform: 'PC / PS5',
    price: '$49.99',
    badge: 'New',
    image: '/pl.webp',
  },
  {
    title: 'Kingdom Arena Ultimate',
    platform: 'Xbox / PC',
    price: '$39.99',
    badge: 'Best Seller',
    image: '/kdb.webp',
  },
  {
    title: 'Street Racer Legends',
    platform: 'PS5 / Switch',
    price: '$29.99',
    badge: 'Deal',
    image: '/images.jpg',
  },
]

const benefits = [
  { icon: <FaShieldAlt />, title: 'Verified sellers', text: 'Every listing is checked before it goes live.' },
  { icon: <FaExchangeAlt />, title: 'Easy trade-ins', text: 'Sell used discs, codes, and accessories fast.' },
  { icon: <FaTruck />, title: 'Quick delivery', text: 'Digital codes and local shipping options available.' },
]

const First = () => {
  return (
    <main className="bg-white text-stone-800">
      <section className="bg-white border-b border-slate-200">
        <Mycarosel />
      </section>

      <section className="bg-white text-stone-800 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">Hot Picks</p>
              <h2 className="mt-2 text-3xl font-black text-stone-800">Featured games for sale</h2>
            </div>
            <Link to="/second" className="text-amber-700 font-bold hover:text-amber-800">View all games</Link>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGames.map((game) => (
              <article key={game.title} className="border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <img src={game.image} alt={game.title} className="h-52 w-full object-cover" />
                <div className="p-5">
                  <span className="inline-block bg-amber-50 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">{game.badge}</span>
                  <h3 className="mt-4 text-xl font-black text-stone-800">{game.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{game.platform}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-2xl font-black text-stone-800">{game.price}</p>
                    <button className="bg-amber-600 text-white px-4 py-2 rounded-md font-bold hover:bg-amber-700 transition-colors">
                      Add
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-50 text-stone-800 px-6 py-14">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="bg-white border border-slate-200 rounded-lg p-6">
              <div className="text-3xl text-amber-700">{benefit.icon}</div>
              <h3 className="mt-4 text-lg font-black text-stone-800">{benefit.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-6">{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default First
