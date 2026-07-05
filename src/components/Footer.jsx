import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <Link to="/">
            <img src="/images/bestwoodfurniturelogo.png" alt="Best Wood Furniture Logo" className="footer-logo" />
          </Link>
          <p className="footer-desc">
            Built with passion. Made to last. Best Wood Furniture is a Kenyan furniture brand dedicated to crafting high-quality furniture that combines beauty, comfort and durability.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">Fb</a>
            <a href="#" aria-label="Instagram">Ig</a>
            <a href="#" aria-label="Twitter">Tw</a>
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/collections">Collections</Link></li>
            <li><Link to="/custom-furniture">Custom Furniture</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Categories</h4>
          <ul>
            <li><Link to="/shop?category=Beds">Beds</Link></li>
            <li><Link to="/shop?category=Sofas">Sofas</Link></li>
            <li><Link to="/shop?category=TV Consoles">TV Consoles</Link></li>
            <li><Link to="/shop?category=Tables">Tables</Link></li>
            <li><Link to="/shop?category=Sideboards">Sideboards</Link></li>
            <li><Link to="/shop?category=Bookshelves">Bookshelves</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Info</h4>
          <ul>
            <li>
              <Phone size={18} />
              <a href="tel:+254791998680">+254 791 998 680</a>
            </li>
            <li>
              <Mail size={18} />
              <a href="mailto:info@bestwoodfurniture.co.ke">info@bestwoodfurniture.co.ke</a>
            </li>
            <li>
              <MapPin size={18} />
              <span>Kasarani – Roisambu, Nairobi, Kenya</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Best Wood Furniture. All rights reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
