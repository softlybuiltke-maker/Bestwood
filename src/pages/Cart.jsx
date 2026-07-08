import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag } from 'lucide-react';
import './Cart.css';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-KE').format(price);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    
    let message = "Hello Best Wood Furniture, I'd like to place an order:\n\n";
    cartItems.forEach(item => {
      message += `- ${item.name} (x${item.quantity}) - KSh ${formatPrice(item.price * item.quantity)}\n`;
    });
    message += `\nTotal: KSh ${formatPrice(getCartTotal())}`;
    
    const whatsappUrl = `https://wa.me/254791998680?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-page empty-cart container section text-center">
        <ShoppingBag size={64} className="empty-cart-icon" />
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any furniture to your cart yet.</p>
        <Link to="/shop" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page container section fade-in">
      <h1 className="title-large">Your Cart</h1>
      
      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p className="cart-item-price">KSh {formatPrice(item.price)}</p>
                <div className="qty-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
              </div>
              <div className="cart-item-actions">
                <p className="cart-item-subtotal">KSh {formatPrice(item.price * item.quantity)}</p>
                <button className="remove-btn" onClick={() => removeFromCart(item.id)} aria-label="Remove item">
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>KSh {formatPrice(getCartTotal())}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span>Calculated at checkout</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>KSh {formatPrice(getCartTotal())}</span>
          </div>
          <button className="btn-primary btn-full checkout-btn" onClick={handleCheckout}>
            Checkout on WhatsApp
          </button>
          <Link to="/shop" className="continue-shopping-link">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}
