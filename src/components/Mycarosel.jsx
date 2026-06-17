import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Mycarosel = () => {
  return (
    <>
    <Carousel>
            <div>
                    <img src="./pl.webp" />
                    <p className="legend">Legend 1</p>
            </div>
            <div>
                    <img src="./kdb.webp" />
                    <p className="legend">Legend 2</p>
            </div>
            <div>
                    <img src="./images.jpg" />
                    <p className="legend">Legend 3</p>
            </div>
    </Carousel>
    </>
  )
}

export default Mycarosel