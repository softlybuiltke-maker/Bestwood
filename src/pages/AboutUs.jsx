import React from 'react';
import { Check } from 'lucide-react';
import './AboutUs.css';

export default function AboutUs() {
  return (
    <div className="about-us-page">
      <div className="container section about-hero">
        <div className="about-text fade-in">
          <div className="about-badge">
            <span>ABOUT US</span>
            <div className="badge-line"></div>
          </div>
          <h1 className="title-large" style={{ fontSize: '3rem', marginBottom: '24px' }}>
            Built with Passion.<br />Made to Last.
          </h1>
          <p className="description">
            At Best Wood Furniture, we believe furniture is more than just wood — it's part of your life. 
            Every piece we create is crafted with care, precision, and passion.
          </p>
          
          <ul className="about-features">
            <li><Check size={18} className="text-gold" /> Premium Quality Materials</li>
            <li><Check size={18} className="text-gold" /> Skilled Artisans</li>
            <li><Check size={18} className="text-gold" /> Timeless Designs</li>
            <li><Check size={18} className="text-gold" /> Customer First Approach</li>
          </ul>
          
          <button className="btn-primary" style={{ marginTop: '20px' }}>
            Know More About Us
          </button>
        </div>
        
        <div className="about-image fade-in delay-200">
          <img src="/images/bed_wood_studio.jpg" alt="Craftsman working on wood" />
        </div>
      </div>
    </div>
  );
}
