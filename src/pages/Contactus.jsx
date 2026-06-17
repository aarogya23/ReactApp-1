import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="bg-white min-h-screen">

      {/* ── HEADING ── */}
      <div className="py-12 px-6 text-center border-b border-gray-100">
        <p className="text-indigo-500 text-xs font-semibold tracking-widest uppercase mb-2">
          Get In Touch
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-3 text-gray-400 text-sm max-w-lg mx-auto">
          We'd love to hear from you. Reach out and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* ── ADDRESS + FORM ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 flex flex-col lg:flex-row gap-12 items-start">

        {/* LEFT — Address / Contact Info */}
        <div className="lg:w-2/5 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Our Office</h2>
            <div className="mt-2 w-12 h-1 bg-indigo-500 rounded-full" />
            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              Come visit us or get in touch through any of the channels below.
              Our team is ready to assist you Monday through Friday.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <ContactInfo
              icon={<FaMapMarkerAlt />}
              title="Address"
              detail="Thamel, Kathmandu 44600, Nepal"
            />
            <ContactInfo
              icon={<FaPhoneAlt />}
              title="Phone"
              detail="+977 01-4XXXXXX"
            />
            <ContactInfo
              icon={<FaEnvelope />}
              title="Email"
              detail="hello@yourcompany.com"
            />
            <ContactInfo
              icon={<FaClock />}
              title="Working Hours"
              detail="Sun – Fri: 9:00 AM – 6:00 PM"
            />
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="lg:w-3/5 w-full bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-1">Send a Message</h2>
          <p className="text-sm text-gray-400 mb-6">Fill out the form and we'll get back to you shortly.</p>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white resize-none"
            />
            <button
              onClick={handleSubmit}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm px-8 py-3 rounded-xl transition-colors self-start"
            >
              {sent ? '✅ Message Sent!' : 'Send Message →'}
            </button>
          </div>
        </div>
      </div>

      {/* ── FULL WIDTH MAP ── */}
      <div className="w-full h-[420px]">
        <iframe
          title="Our Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.6820500824986!2d85.30855!3d27.71551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18fcb77fd4bd%3A0x58099b1d73da4d6b!2sThamel%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1680000000000"
          width="100%"
          height="100%"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

    </section>
  )
}

function ContactInfo({ icon, title, detail }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-lg shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</p>
        <p className="text-sm font-medium text-gray-700 mt-0.5">{detail}</p>
      </div>
    </div>
  )
}

export default ContactUs