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
            <div style={{ width: '100%', maxWidth: '400px' }}>
              <strong>Address</strong>
              <p style={{ marginBottom: '10px' }}>
                Kasarani – Roisambu, Nairobi, Kenya
              </p>
              <a 
                href="https://maps.app.goo.gl/drXW6h1ZFzkcY8YN8?g_st=awb" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  width: '100%',
                  height: '180px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid var(--color-gray-border)',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1 }} />
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63825.26792612255!2d36.85873998246419!3d-1.2212952864696131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f15d7426f58ad%3A0xb377a33edb38740c!2sKasarani%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1714571990432!5m2!1sen!2ske" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, pointerEvents: 'none' }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                ></iframe>
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-white)',
                  padding: '6px 16px',
                  borderRadius: '20px',
                  fontSize: '0.8rem',
                  fontWeight: 'bold',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
                  zIndex: 2
                }}>
                  View on Map
                </div>
              </a>
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
