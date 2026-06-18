import React from 'react'
import { FaBullseye, FaEye, FaLightbulb, FaHandshake } from 'react-icons/fa'

const stats = [
  { label: 'Verified Listings', value: '8K+' },
  { label: 'Active Gamers', value: '12K+' },
  { label: 'Trade-ins Completed', value: '4.5K+' },
  { label: 'Cities Served', value: '25+' },
]

function AboutUs() {
  return (
    <section className="min-h-screen bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <span className="text-xs font-bold tracking-widest uppercase text-slate-500">
              Who We Are
            </span>
            <h1 className="mt-3 text-3xl lg:text-4xl font-black text-stone-800 leading-tight">
              Built for gamers who buy, sell, and trade smarter.
            </h1>
            <div className="mt-4 w-14 h-1 bg-amber-600 rounded-full" />
          </div>

          <p className="text-lg text-slate-600 leading-relaxed">
            GameBazaar connects players, collectors, and local sellers in one marketplace for new releases, pre-owned games, digital codes, consoles, and accessories.
          </p>

          <div className="flex flex-col gap-5">
            <DetailItem
              icon={<FaBullseye />}
              title="Our Mission"
              description="Make game buying and selling simple, secure, and affordable for every player."
            />
            <DetailItem
              icon={<FaEye />}
              title="Our Vision"
              description="Create Nepal's most trusted gaming marketplace for digital and physical titles."
            />
            <DetailItem
              icon={<FaLightbulb />}
              title="Our Promise"
              description="Verified listings, clear pricing, helpful support, and fair trade-in offers."
            />
            <DetailItem
              icon={<FaHandshake />}
              title="Community First"
              description="We support local sellers, collectors, streamers, and everyday gamers."
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-slate-50 rounded-lg px-5 py-4 border border-slate-200">
                <p className="text-3xl font-black text-stone-800">{stat.value}</p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 w-full">
          <div className="overflow-hidden rounded-lg shadow-xl w-full h-[520px]">
            <img
              src="/kdb.webp"
              alt="Game marketplace community"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function DetailItem({ icon, title, description }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 text-xl shrink-0">
        {icon}
      </div>
      <div>
        <h2 className="font-bold text-slate-800 text-base">{title}</h2>
        <p className="text-sm text-slate-500 mt-0.5 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default AboutUs
