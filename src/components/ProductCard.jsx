import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './ProductCard.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE').format(price);
  };

  return (
    <div className="product-card fade-in">
      <Link to={`/product/${product.id}`} className="product-card-image-link">
        <div className="product-card-image">
          <img src={product.image} alt={product.name} loading="lazy" />
          <button className="wishlist-btn" aria-label="Add to Wishlist" onClick={(e) => e.preventDefault()}>
            <Heart size={20} />
          </button>
        </div>
      </Link>
      <div className="product-card-content">
        <Link to={`/product/${product.id}`}>
          <h3 className="product-card-title">{product.name}</h3>
        </Link>
        <div className="product-card-bottom">
          <p className="product-card-price">KSh {formatPrice(product.price)}</p>
          <button 
            className="wishlist-btn-bottom" 
            aria-label="Add to Cart"
            onClick={(e) => {
              e.preventDefault();
              addToCart(product);
              alert("Added to cart!");
            }}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
