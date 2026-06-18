import React from 'react'
import { Link } from 'react-router-dom'
import { FaGamepad } from 'react-icons/fa'

const PageNotFound = () => {
  return (
    <main className="min-h-[70vh] bg-white text-stone-800 flex items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <FaGamepad className="mx-auto text-6xl text-amber-700" />
        <p className="mt-6 text-slate-500 font-bold uppercase tracking-widest">404</p>
        <h1 className="mt-3 text-4xl font-black text-stone-800">This game page is missing</h1>
        <p className="mt-4 text-slate-500">
          The listing may have sold out, moved, or never existed.
        </p>
        <Link to="/second" className="mt-8 inline-flex bg-amber-600 text-white font-black px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
          Browse Games
        </Link>
      </div>
    </main>
  )
}

export default PageNotFound
