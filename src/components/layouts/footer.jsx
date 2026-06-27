import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="dashboard-footer">
      <div className="footer-links">
        <Link to="/aboutUs">About Us</Link>
        <a href="#">News</a>
        <Link to="/contactUs">Contact</Link>
        <a href="#">Review</a>
      </div>

      <p className="footer-copy">
        Learn more about our mission, vision, and the team behind our company in the About Us section. Explore our wide range of products and enjoy a seamless shopping experience in the Shop section. We value your feedback, so please share your thoughts and help us improve our services in the Feedback section.
      </p>

      <div className="footer-bottom">
        <p>&copy; 2024 Trinetra Game Studio</p>
        <div className="policy-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <Link to="/contactUs">Contact Us</Link>
        </div>
        <div className="social-links">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
