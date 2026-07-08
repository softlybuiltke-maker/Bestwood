import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Truck, ShieldCheck, RefreshCcw, ShoppingCart } from 'lucide-react';
import { products } from '../products';
import { useCart } from '../context/CartContext';
import './ProductDetails.css';

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="container section text-center">
        <h2>Product not found</h2>
        <Link to="/shop" className="btn-primary" style={{ marginTop: '20px' }}>Back to Shop</Link>
      </div>
    );
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE').format(price);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Best Wood Furniture, I'm interested in the ${product.name} (x${quantity}) priced at KSh ${formatPrice(product.price * quantity)}.`
  );

  return (
    <div className="product-details-page">
      <div className="breadcrumb-nav">
        <div className="container">
          <Link to="/">Home</Link> &gt; <Link to="/shop">Shop</Link> &gt; <Link to="/collections">Collections</Link> &gt; <Link to="/about">About Us</Link> &gt; <Link to="/custom-furniture">Custom Furniture</Link> &gt; <Link to="/blog">Blog</Link> &gt; <Link to="/contact">Contact</Link>
        </div>
      </div>

      <div className="container section product-main">
        <div className="product-gallery fade-in">
          <div className="main-image-container">
            <img src={product.image} alt={product.name} className="main-image" />
          </div>
          <div className="thumbnail-row">
            <div className="thumbnail active"><img src={product.image} alt="Thumb 1" /></div>
            <div className="thumbnail"><img src={product.image} alt="Thumb 2" /></div>
            <div className="thumbnail"><img src={product.image} alt="Thumb 3" /></div>
            <div className="thumbnail"><img src={product.image} alt="Thumb 4" /></div>
            <div className="thumbnail"><img src={product.image} alt="Thumb 5" /></div>
          </div>
        </div>
        
        <div className="product-info fade-in delay-100">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-price">KSh {formatPrice(product.price)}</p>

          <div className="product-description">
            <p>{product.description} Crafted from premium solid wood. Designed for comfort, durability and timeless style.</p>
          </div>

          <table className="product-specs-table">
            <tbody>
              <tr>
                <td className="spec-label">Material:</td>
                <td className="spec-value">{product.material}</td>
              </tr>
              <tr>
                <td className="spec-label">Finish:</td>
                <td className="spec-value">Natural Finish</td>
              </tr>
              <tr>
                <td className="spec-label">Size:</td>
                <td className="spec-value">{product.dimensions}</td>
              </tr>
              <tr>
                <td className="spec-label">Assembly:</td>
                <td className="spec-value">Carpenter Assembly</td>
              </tr>
              <tr>
                <td className="spec-label">Availability:</td>
                <td className="spec-value">{product.availability}</td>
              </tr>
            </tbody>
          </table>

          <div className="quantity-selector">
            <span className="qty-label">Quantity:</span>
            <div className="qty-controls">
               <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
               <span>{quantity}</span>
               <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
            <button 
              className="btn-primary" 
              style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
              onClick={() => {
                addToCart(product, quantity);
                alert("Added to cart!");
              }}
            >
              <ShoppingCart size={20} />
              Add to Cart
            </button>
            <a 
              href={`https://wa.me/254791998680?text=${whatsappMessage}`}
              className="btn-primary"
              style={{ flex: 1, backgroundColor: '#25D366', borderColor: '#25D366', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WA" width="20" />
            </a>
          </div>

          <div className="product-features-row">
            <div className="feature-icon-item">
              <Truck size={24} />
              <div>
                <strong>Free Delivery</strong>
                <span>Across Kasarani</span>
              </div>
            </div>
            <div className="feature-icon-item">
              <ShieldCheck size={24} />
              <div>
                <strong>Secure Payment</strong>
                <span>100% Secure</span>
              </div>
            </div>
            <div className="feature-icon-item">
              <ShieldCheck size={24} />
              <div>
                <strong>1 Year Warranty</strong>
                <span>On All Products</span>
              </div>
            </div>
            <div className="feature-icon-item">
              <RefreshCcw size={24} />
              <div>
                <strong>Easy Returns</strong>
                <span>7 Days Return</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
