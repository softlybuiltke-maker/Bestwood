import React from 'react';
import { Link } from 'react-router-dom';
import './Collections.css';

export default function Collections() {
  const collections = [
    { title: 'Living Room Collection', subtitle: 'Explore More', image: '/images/sofa_cream_studio.jpg', link: '/shop?category=Sofas' },
    { title: 'Bedroom Collection', subtitle: 'Explore Now', image: '/images/bed_wood_studio.jpg', link: '/shop?category=Beds' },
    { title: 'Dining Room Collection', subtitle: 'Explore More', image: '/images/restaged_19_white_round_tables.jpg', link: '/shop?category=Tables' },
    { title: 'Office Collection', subtitle: 'Explore Now', image: '/images/desk_studio.jpg', link: '/shop?category=Tables' }
  ];

  return (
    <div className="collections-page">
      <div className="container section text-center">
        <h1 className="title-large">Our Collections</h1>
        <p className="text-muted mb-40">Handpicked furniture collections for every space and style.</p>
        
        <div className="collections-grid">
          {collections.map((col, index) => (
            <Link to={col.link} className={`collection-card fade-in delay-${index * 100}`} key={col.title}>
              <div className="collection-image-wrapper">
                <img src={col.image} alt={col.title} loading="lazy" />
              </div>
              <div className="collection-overlay">
                <h3>{col.title}</h3>
                <p>{col.subtitle} &rarr;</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
