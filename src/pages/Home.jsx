import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Award, HeartHandshake } from 'lucide-react';
import Hero3D from '../components/Hero3D';
import ProductCard from '../components/ProductCard';
import { products } from '../products';
import './Home.css';

export default function Home() {
  const featuredProducts = products.slice(0, 8);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const categoryCards = [
    { name: 'Living Room', image: '/images/sofa_cream_studio.jpg', link: '/shop?category=Sofas' },
    { name: 'Bedroom', image: '/images/bed_wood_studio.jpg', link: '/shop?category=Beds' },
    { name: 'Dining Room', image: '/images/restaged_19_white_round_tables.jpg', link: '/shop?category=Tables' },
    { name: 'Office Furniture', image: '/images/desk_studio.jpg', link: '/shop?category=Tables' },
    { name: 'Outdoor', image: '/images/nesttables_studio.jpg', link: '/shop' },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-text fade-in">
            <span className="hero-eyebrow">CRAFTED WITH PASSION</span>
            <h1 className="hero-title">Timeless<br />Furniture.<br /><i>Built for Life.</i></h1>
            <p className="hero-subtitle">Premium solid wood furniture, handcrafted to bring elegance, comfort, and durability to your space.</p>
            <div className="hero-cta">
              <Link to="/collections" className="btn-primary">Shop Collection</Link>
              <a href="https://wa.me/254791998680?text=Hello%20Best%20Wood%20Furniture%2C%20I'd%20like%20to%20know%20more%20about%20your%20furniture." className="btn-outline" target="_blank" rel="noopener noreferrer">
                Order on WhatsApp
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width="18" style={{marginLeft: '4px'}} />
              </a>
            </div>
          </div>
          
          <div className="hero-visual fade-in delay-200">
             <div className="hero-badge">
               <span className="badge-small">SOLID WOOD</span>
               <span className="badge-large">Natural<br/>Beauty</span>
             </div>
             
             {/* Decorative Leaf SVG */}
             <svg className="hero-leaf-svg" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M50 100C50 100 20 70 20 40C20 10 50 0 50 0C50 0 80 10 80 40C80 70 50 100 50 100Z" stroke="#A58054" strokeWidth="2"/>
               <path d="M50 100L50 0" stroke="#A58054" strokeWidth="2"/>
               <path d="M50 70C35 60 25 50 20 40" stroke="#A58054" strokeWidth="2"/>
               <path d="M50 50C35 40 25 30 20 20" stroke="#A58054" strokeWidth="2"/>
               <path d="M50 70C65 60 75 50 80 40" stroke="#A58054" strokeWidth="2"/>
               <path d="M50 50C65 40 75 30 80 20" stroke="#A58054" strokeWidth="2"/>
             </svg>

             <div className="hero-3d-wrapper">
                <Hero3D />
             </div>
          </div>
        </div>
        
        {/* Features Bar */}
        <div className="container">
          <div className="features-bar fade-in delay-300">
            <div className="feature-item">
              <Award className="feature-icon" />
              <div className="feature-text">
                <strong>Premium Materials</strong>
                <span>Quality you can feel</span>
              </div>
            </div>
            <div className="feature-item">
              <ShieldCheck className="feature-icon" />
              <div className="feature-text">
                <strong>Handcrafted</strong>
                <span>Skilled craftsmanship</span>
              </div>
            </div>
            <div className="feature-item">
              <ShieldCheck className="feature-icon" />
              <div className="feature-text">
                <strong>Built to Last</strong>
                <span>Durable & strong</span>
              </div>
            </div>
            <div className="feature-item">
              <Truck className="feature-icon" />
              <div className="feature-text">
                <strong>Fast Delivery</strong>
                <span>Across Kasarani</span>
              </div>
            </div>
            <div className="feature-item">
              <HeartHandshake className="feature-icon" />
              <div className="feature-text">
                <strong>Customer Satisfaction</strong>
                <span>Our top priority</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section categories-section">
        <div className="container animate-on-scroll fade-in-up">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <h2 className="section-title" style={{ fontSize: '2rem' }}>Shop by Category</h2>
            <p className="text-muted">Explore our most loved furniture categories.</p>
          </div>
          <div className="categories-grid-images">
            {categoryCards.map((cat, index) => (
              <Link to={cat.link} className={`category-image-card delay-${(index % 5) * 100}`} key={cat.name}>
                <div className="category-image-wrapper">
                   <img src={cat.image} alt={cat.name} loading="lazy" />
                </div>
                <span className="category-image-name">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section">
        <div className="container">
          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <div className={`animate-on-scroll fade-in-up delay-${(index % 4) * 100}`} key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
