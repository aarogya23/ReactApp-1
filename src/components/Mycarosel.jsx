import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const slides = [
  {
    image: '/pl.webp',
    title: 'Weekend Mega Sale',
    text: 'Save on sports, racing, action, and adventure games.',
  },
  {
    image: '/kdb.webp',
    title: 'Verified Pre-owned Picks',
    text: 'Find inspected discs and cartridges at better prices.',
  },
  {
    image: '/images.jpg',
    title: 'Sell Games Fast',
    text: 'List old titles and turn your library into wallet credit.',
  },
]

const Mycarosel = () => {
  return (
    <div className="carousel-frame relative overflow-hidden">
      <div className="carousel-side-rail left-0" />
      <div className="carousel-side-rail right-0" />
      <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
        {slides.map((slide) => (
          <div key={slide.title} className="relative h-[520px] bg-white">
            <img src={slide.image} alt={slide.title} className="h-full w-full object-cover opacity-90 carousel-image-motion" />
            <div className="absolute inset-0 flex items-end">
              <div className="w-full bg-gradient-to-t from-white via-white/80 to-transparent px-6 pb-16 pt-32 text-left">
                <div className="max-w-7xl mx-auto carousel-copy-motion">
                  <h2 className="text-4xl lg:text-6xl font-black text-stone-800">{slide.title}</h2>
                  <p className="mt-4 max-w-xl text-lg text-slate-600">{slide.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Mycarosel
