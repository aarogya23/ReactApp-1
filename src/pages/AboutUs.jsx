import React from 'react'
import { FaBullseye, FaEye, FaLightbulb } from 'react-icons/fa'

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'Happy Clients', value: '500+' },
  { label: 'Projects Completed', value: '1,200+' },
  { label: 'Team Members', value: '50+' },
]

function AboutUs() {
  return (
    <section className="min-h-screen bg-white py-16 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">

        {/* LEFT — Text Content */}
        <div className="flex-1 flex flex-col gap-8">

          {/* Eyebrow + Heading */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-indigo-500">
              Who We Are
            </span>
            <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
              About Us
            </h2>
            <div className="mt-4 w-14 h-1 bg-indigo-500 rounded-full" />
          </div>

          {/* Intro */}
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a passionate team dedicated to crafting thoughtful digital experiences.
            Founded on the belief that great design solves real problems, we partner with
            businesses to turn complex challenges into elegant, human-centered solutions.
          </p>

          {/* Details */}
          <div className="flex flex-col gap-5">
            <DetailItem
              icon={<FaBullseye />}
              title="Our Mission"
              description="To empower every client with tools and strategies that drive meaningful, lasting growth."
            />
            <DetailItem
              icon={<FaEye />}
              title="Our Vision"
              description="A world where technology feels intuitive, accessible, and genuinely useful to everyone."
            />
            <DetailItem
              icon={<FaLightbulb />}
              title="Our Values"
              description="Transparency, creativity, collaboration, and a relentless commitment to quality in everything we do."
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mt-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-indigo-50 rounded-2xl px-5 py-4 border border-indigo-100"
              >
                <p className="text-3xl font-extrabold text-indigo-600">{stat.value}</p>
                <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-3 mt-2">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors">
              Meet the Team
            </button>
            <button className="border border-gray-300 hover:border-indigo-400 text-gray-700 hover:text-indigo-600 text-sm font-semibold px-6 py-3 rounded-xl transition-colors">
              Our Work →
            </button>
          </div>
        </div>

        {/* RIGHT — Single Image */}
        <div className="flex-1 w-full">
          <div className="overflow-hidden rounded-3xl shadow-xl w-full h-[520px]">
            <img
              src="/kdb.webp"
              alt="About us"
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
      <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-xl shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 text-base">{title}</h3>
        <p className="text-sm text-gray-500 mt-0.5 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default AboutUs