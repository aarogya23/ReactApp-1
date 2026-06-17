import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 pt-12 pb-6 border-t border-gray-200">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-blue-600 mb-3">Store Front</h2>
          <p className="text-sm leading-relaxed text-gray-500">
            Your one-stop shop for premium products. Quality you can trust, prices you'll love.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-blue-600 transition-colors duration-200">Home</a></li>
            <li><a href="/second" className="hover:text-blue-600 transition-colors duration-200">Products</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">About Us</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors duration-200">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Stay Connected</h3>
          <p className="text-sm text-gray-500 mb-4">Follow us on social media for updates and offers.</p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors duration-200"><FaFacebook /></a>
            <a href="#" className="text-gray-500 hover:text-sky-500 transition-colors duration-200"><FaTwitter /></a>
            <a href="#" className="text-gray-500 hover:text-pink-500 transition-colors duration-200"><FaInstagram /></a>
            <a href="#" className="text-gray-500 hover:text-red-500 transition-colors duration-200"><FaYoutube /></a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 mt-10">
        <hr className="border-gray-300" />
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 mt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Store Front. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Made by Trinetra</p>
      </div>
    </footer>
  )
}

export default Footer