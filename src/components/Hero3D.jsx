import React, { useState, useEffect } from 'react';
import './HeroSlider.css';

const images = [
  '/images/sofa_cream_studio.jpg',
  '/images/bed_wood_studio.jpg',
  '/images/restaged_19_white_round_tables.jpg',
  '/images/desk_studio.jpg'
];

export default function Hero3D() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero-slider">
      {images.map((src, index) => (
        <div 
          key={src}
          className={`hero-slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={src} alt={`Furniture slide ${index + 1}`} />
        </div>
      ))}
      <div className="hero-slider-indicators">
        {images.map((_, index) => (
          <button 
            key={index} 
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
