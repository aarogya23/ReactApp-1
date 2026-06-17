import React from 'react'
import {
  FaFutbol,
  FaRunning,
  FaTrophy,
  FaUsers,
  FaTicketAlt,
  FaShoppingBag,
} from 'react-icons/fa'

const services = [
  {
    icon: <FaFutbol />,
    title: 'Football Training',
    description:
      'Professional coaching sessions for all skill levels — from beginner drills to advanced tactical training on the pitch.',
  },
  {
    icon: <FaRunning />,
    title: 'Sports Fitness & Conditioning',
    description:
      'Personalized fitness programs designed to improve stamina, speed, and agility for peak athletic performance.',
  },
  {
    icon: <FaTrophy />,
    title: 'Tournament Organization',
    description:
      'We plan and manage local and national football tournaments, handling fixtures, referees, and prize ceremonies.',
  },
  {
    icon: <FaUsers />,
    title: 'Team Management',
    description:
      'Full team registration, squad management, and performance tracking services for clubs and academies.',
  },
  {
    icon: <FaTicketAlt />,
    title: 'Match Ticketing',
    description:
      'Easy online ticketing for live matches and sports events — secure booking, seat selection, and e-tickets.',
  },
  {
    icon: <FaShoppingBag />,
    title: 'Sports Merchandise',
    description:
      'Official jerseys, boots, accessories, and fan gear — all available in our store with fast delivery.',
  },
]

function Services() {
  return (
    <section className="bg-white min-h-screen">

      {/* ── HEADING ── */}
      <div className="py-12 px-6 text-center border-b border-gray-100">
        <p className="text-indigo-500 text-xs font-semibold tracking-widest uppercase mb-2">
          What We Provide
        </p>
        <h2 className="text-xl lg:text-2xl font-bold text-gray-900">Our Services</h2>
        <p className="mt-3 text-gray-400 text-sm max-w-lg mx-auto">
          From training to tournaments, we provide everything your team needs to compete, grow, and win.
        </p>
      </div>

      {/* ── SERVICES GRID ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div className="mx-6 lg:mx-20 mb-16 bg-indigo-600 rounded-3xl px-8 py-12 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white">Ready to get started?</h2>
          <p className="text-indigo-200 text-sm mt-1">
            Let's talk about your project and find the best solution for you.
          </p>
        </div>
        <button className="bg-white text-indigo-600 font-semibold text-sm px-8 py-3 rounded-xl hover:bg-indigo-50 transition-colors shrink-0">
          Contact Us →
        </button>
      </div>

    </section>
  )
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="group bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all duration-300 flex flex-col gap-4">
      <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-2 leading-relaxed">{description}</p>
      </div>
      <span className="text-indigo-500 text-sm font-medium mt-auto group-hover:underline cursor-pointer">
        Learn more →
      </span>
    </div>
  )
}

export default Services