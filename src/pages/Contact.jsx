import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const whatsappNumber = "254791998680";
  
  return (
    <div className="contact-page">
      <div className="container section contact-hero">
        <div className="contact-info fade-in">
          <h1 className="title-large">Get in Touch</h1>
          <p className="description">
            We'd love to hear from you. Reach out for any queries, custom orders, or support.
          </p>
          
          <div className="info-item">
            <Phone className="info-icon" />
            <div>
              <strong>Phone / WhatsApp</strong>
              <span>+254 791 998 680</span>
            </div>
          </div>
          
          <div className="info-item">
            <Mail className="info-icon" />
            <div>
              <strong>Email</strong>
              <span>info@bestwoodfurniture.com</span>
            </div>
          </div>
          
          <div className="info-item">
            <MapPin className="info-icon" />
            <div>
              <strong>Address</strong>
              <span>123, Wood Street, Furniture City, Kenya</span>
            </div>
          </div>
          
          <div className="social-follow">
            <strong>Follow Us</strong>
            <div className="social-icons">
               <a href="#" aria-label="Facebook" className="social-icon">Fb</a>
               <a href="#" aria-label="Instagram" className="social-icon">Ig</a>
               <a href="#" aria-label="Twitter" className="social-icon">Tw</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
