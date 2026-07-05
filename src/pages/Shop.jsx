import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../products';
import './Shop.css';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat && categories.includes(cat)) {
      setSelectedCategory(cat);
    }
  }, [location]);

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="shop-page">
      <div className="shop-header">
        <div className="container">
          <h1 className="title-large">Shop All Furniture</h1>
          <p className="breadcrumb">Home &gt; Shop</p>
        </div>
      </div>
      
      <div className="container shop-container">
        <aside className="shop-sidebar">
          <div className="sidebar-widget">
            <h3 className="widget-title">Categories</h3>
            <ul className="category-list">
              {categories.map(category => (
                <li key={category}>
                  <button 
                    className={selectedCategory === category ? 'active' : ''}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </aside>
        
        <main className="shop-main">
          <div className="shop-controls">
            <p className="results-count">Showing 1-{filteredProducts.length} of {filteredProducts.length} results</p>
            <div className="sort-dropdown">
               Sort by: <strong>Featured</strong>
            </div>
          </div>
          
          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
