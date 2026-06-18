import React from 'react'
import {
  FaGamepad,
  FaTags,
  FaShieldAlt,
  FaTruck,
  FaCoins,
  FaHeadset,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: <FaGamepad />,
    title: 'Game Marketplace',
    description: 'Buy new releases, pre-owned discs, digital codes, consoles, and gaming accessories from verified sellers.',
  },
  {
    icon: <FaTags />,
    title: 'Sell Your Games',
    description: 'List used games with photos, platform details, condition, and your asking price in minutes.',
  },
  {
    icon: <FaShieldAlt />,
    title: 'Buyer Protection',
    description: 'Every order is backed by listing checks, payment safety, and support for disputed purchases.',
  },
  {
    icon: <FaTruck />,
    title: 'Local Delivery',
    description: 'Choose digital delivery, pickup, or shipping depending on the seller and product type.',
  },
  {
    icon: <FaCoins />,
    title: 'Trade-in Offers',
    description: 'Turn old titles into wallet credit and use it toward new games, gear, or subscriptions.',
  },
  {
    icon: <FaHeadset />,
    title: 'Gamer Support',
    description: 'Get help with orders, seller setup, code activation, returns, and marketplace questions.',
  },
]

function Services() {
  return (
    <section className="bg-white min-h-screen">
      <div className="py-12 px-6 text-center border-b border-slate-100">
        <p className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-2">
          Buy And Sell
        </p>
        <h1 className="text-3xl lg:text-4xl font-black text-stone-800">Marketplace Services</h1>
        <p className="mt-3 text-slate-500 text-sm max-w-lg mx-auto">
          Everything needed to discover games, sell used titles, trade safely, and keep your library fresh.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>

      <div className="mx-6 lg:mx-20 mb-16 bg-slate-50 border border-slate-200 rounded-lg px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-black text-stone-800">Ready to sell your games?</h2>
          <p className="text-slate-500 text-sm mt-1">
            Create a listing, set the price, and reach gamers looking for their next title.
          </p>
        </div>
        <Link to="/contactUs" className="bg-amber-600 text-white font-black text-sm px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors shrink-0">
          Contact Seller Support
        </Link>
      </div>
    </section>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="group bg-white border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col gap-4">
      <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 text-2xl group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h2 className="text-lg font-black text-stone-800">{title}</h2>
        <p className="text-sm text-slate-500 mt-2 leading-relaxed">{description}</p>
      </div>
      <span className="text-amber-700 text-sm font-bold mt-auto group-hover:underline cursor-pointer">
        Learn more
      </span>
    </div>
  )
}

export default Services
