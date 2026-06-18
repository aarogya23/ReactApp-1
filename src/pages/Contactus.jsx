import React, { useState } from 'react'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa'

function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (event) => setForm({ ...form, [event.target.name]: event.target.value })

  const handleSubmit = (event) => {
    event.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="bg-white min-h-screen">
      <div className="py-12 px-6 text-center border-b border-slate-100">
        <p className="text-slate-500 text-xs font-bold tracking-widest uppercase mb-2">
          Support Desk
        </p>
        <h1 className="text-3xl lg:text-4xl font-black text-stone-800">Contact GameBazaar</h1>
        <p className="mt-3 text-slate-500 text-sm max-w-lg mx-auto">
          Need help with an order, seller account, trade-in, or digital code? Our team is ready.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16 flex flex-col lg:flex-row gap-12 items-start">
        <div className="lg:w-2/5 flex flex-col gap-8">
          <div>
            <h2 className="text-2xl font-black text-stone-800">Gamer Support Hub</h2>
            <div className="mt-2 w-12 h-1 bg-amber-600 rounded-full" />
            <p className="mt-4 text-slate-500 text-sm leading-relaxed">
              Reach us for buying questions, seller verification, shipping help, refund requests, and trade-in support.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <ContactInfo icon={<FaMapMarkerAlt />} title="Address" detail="Thamel, Kathmandu 44600, Nepal" />
            <ContactInfo icon={<FaPhoneAlt />} title="Phone" detail="+977 01-4XXXXXX" />
            <ContactInfo icon={<FaEnvelope />} title="Email" detail="support@gamebazaar.com" />
            <ContactInfo icon={<FaClock />} title="Support Hours" detail="Sun - Fri: 9:00 AM - 6:00 PM" />
          </div>
        </div>

        <div className="lg:w-3/5 w-full bg-slate-50 rounded-lg p-8 shadow-sm border border-slate-100">
          <h2 className="text-xl font-black text-stone-800 mb-1">Send a Message</h2>
          <p className="text-sm text-slate-500 mb-6">Tell us what happened and we will reply with the next step.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-200 bg-white"
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-200 bg-white"
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Order ID, seller issue, or trade-in topic"
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-200 bg-white"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Describe your question"
              rows={5}
              className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-200 bg-white resize-none"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-black text-sm px-8 py-3 rounded-lg transition-colors self-start">
              {sent ? 'Message Sent' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <div className="w-full h-[420px]">
        <iframe
          title="GameBazaar Location"
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
      <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 text-lg shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{title}</p>
        <p className="text-sm font-semibold text-slate-700 mt-0.5">{detail}</p>
      </div>
    </div>
  )
}

export default ContactUs
