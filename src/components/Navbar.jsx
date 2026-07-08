import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const { getCartCount } = useCart();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="/images/bestwoodfurniturelogo.png" alt="Best Wood Furniture Logo" className="logo-img" />
        </Link>
        
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/shop" className={isActive('/shop') ? 'active' : ''} onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/collections" className={isActive('/collections') ? 'active' : ''} onClick={() => setIsOpen(false)}>Collections</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/custom-furniture" className={isActive('/custom-furniture') ? 'active' : ''} onClick={() => setIsOpen(false)}>Custom Furniture</Link>
          <Link to="/blog" className={isActive('/blog') ? 'active' : ''} onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setIsOpen(false)}>Contact</Link>
          <button className="search-btn" aria-label="Search" onClick={() => setIsOpen(false)}>
            <Search size={18} />
          </button>
        </div>

        <div className="navbar-right">
          <Link to="/cart" className="cart-icon-btn" aria-label="Cart">
            <ShoppingBag size={24} />
            {getCartCount() > 0 && <span className="cart-badge">{getCartCount()}</span>}
          </Link>
          <a 
            href="https://wa.me/254791998680?text=Hello%20Best%20Wood%20Furniture%2C%20I'm%20interested%20in%20your%20products."
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on WhatsApp
          </a>
          <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
