import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaGamepad } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-white text-slate-600 pt-12 pb-6 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-black text-stone-800 mb-3">
            <FaGamepad /> GameBazaar
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            A trusted marketplace for buying new games, selling used titles, trading codes, and finding gamer gear.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold text-stone-800 mb-3">Marketplace</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-amber-700 transition-colors">Home</Link></li>
            <li><Link to="/second" className="hover:text-amber-700 transition-colors">Shop Games</Link></li>
            <li><Link to="/services" className="hover:text-amber-700 transition-colors">Sell Games</Link></li>
            <li><Link to="/aboutUs" className="hover:text-amber-700 transition-colors">About</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-stone-800 mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/contactUs" className="hover:text-amber-700 transition-colors">Contact</Link></li>
            <li><a href="#" className="hover:text-amber-700 transition-colors">Buyer Protection</a></li>
            <li><a href="#" className="hover:text-amber-700 transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-amber-700 transition-colors">Seller Rules</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-stone-800 mb-3">Stay Connected</h3>
          <p className="text-sm text-slate-400 mb-4">Follow launches, discounts, trade-in events, and tournaments.</p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="text-slate-500 hover:text-amber-700 transition-colors"><FaFacebook /></a>
            <a href="#" className="text-slate-500 hover:text-amber-700 transition-colors"><FaTwitter /></a>
            <a href="#" className="text-slate-500 hover:text-amber-700 transition-colors"><FaInstagram /></a>
            <a href="#" className="text-slate-500 hover:text-amber-700 transition-colors"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10">
        <hr className="border-slate-200" />
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} GameBazaar. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Made by Trinetra</p>
      </div>
    </footer>
  )
}

export default Footer
