import React, { useState, useEffect } from 'react'
import { imgsList } from '../../../../config'
import './index.css'

const Slider = function (imgs) {
  const images = imgs.length ? imgs : imgsList
  const [currentIndex, setCurrentIndex] = useState(0)
  let interval

  useEffect(() => {
    autoPlay()
    return () => clearInterval(interval)
  }, [currentIndex])

  const handleMouseLeave = function (e) {
    autoPlay()
  }

  const handleMouseEnter = function (e) {
    clearInterval(interval)
  }

  function autoPlay () {
    interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length)
    }, 1500)
  }

  return (
    <div className="carousel">
      <div className="carousel-inner" style={{ transform: `translateX(-${(currentIndex * 100) / images.length}%)`, width: images.length * 100 + '%' }}>
        {images.map((image, index) => (
          <div
            onMouseEnter={ () => handleMouseEnter() }
            onMouseLeave={ () => handleMouseLeave() }
            key={index}
            className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt="" />
          </div>
        ))}
      </div>
      <ul className="number-list">
       {images.map((img, index) => (
        <li
          key ={index}
          className = { index === currentIndex ? 'active' : ''}
          onClick = {() => setCurrentIndex(index)}
        >
        {(index + 1)}
        </li>
       ))}
</ul>

    </div>
  )
}
export default Slider
