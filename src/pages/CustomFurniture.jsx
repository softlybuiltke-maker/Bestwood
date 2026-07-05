import React from 'react';
import { Check } from 'lucide-react';
import './CustomFurniture.css';

export default function CustomFurniture() {
  return (
    <div className="custom-furniture-page">
      <div className="container section custom-hero">
        <div className="custom-text fade-in">
          <h1 className="title-large">Custom Furniture</h1>
          <p className="subtitle">Your Vision. Our Craftsmanship.</p>
          <p className="description">
            We create custom furniture tailored to your style, space, and needs. 
            Choose your design, material and size — we'll build it just for you.
          </p>
          
          <ul className="custom-features">
            <li><Check size={18} className="text-gold" /> Custom Size & Design</li>
            <li><Check size={18} className="text-gold" /> Wide Range of Materials</li>
            <li><Check size={18} className="text-gold" /> Expert Craftsmanship</li>
            <li><Check size={18} className="text-gold" /> Timely Delivery</li>
          </ul>
          
          <a 
            href="https://wa.me/254791998680?text=Hello%20Best%20Wood%20Furniture%2C%20I'm%20interested%20in%20custom%20furniture."
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Start Custom Order on WhatsApp
          </a>
        </div>
        
        <div className="custom-image fade-in delay-200">
          <img src="/images/restaged_02_wood_desk.jpg" alt="Custom Furniture Sketch" />
        </div>
      </div>

      <div className="container section how-it-works">
        <h2 className="section-title">How It Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <div>
              <h3>Share Your Idea</h3>
              <p>Send us your design, size and preferences.</p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <div>
              <h3>Get Quotation</h3>
              <p>We'll share the best price and timelines.</p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <div>
              <h3>Confirm Order</h3>
              <p>Approve and we start crafting.</p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <div>
              <h3>Delivered to You</h3>
              <p>Safe delivery to your doorstep.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
