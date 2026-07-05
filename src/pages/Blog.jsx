import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

export default function Blog() {
  const blogs = [
    {
      id: 1,
      image: '/images/sofa_cream_studio.jpg',
      date: '02 May 2024',
      title: 'How to Choose the Perfect Sofa for Your Living Room',
      link: '#'
    },
    {
      id: 2,
      image: '/images/restaged_19_white_round_tables.jpg',
      date: '15 May 2024',
      title: 'Benefits of Solid Wood Furniture',
      link: '#'
    },
    {
      id: 3,
      image: '/images/sofa_wood_studio.jpg',
      date: '01 Jun 2024',
      title: 'Wood Care Tips to Make Furniture Last Longer',
      link: '#'
    }
  ];

  return (
    <div className="blog-page">
      <div className="container section">
        <div className="blog-header">
          <h1 className="title-large">Our Blog</h1>
          <p className="text-muted">Tips, ideas and inspiration for your home & lifestyle.</p>
        </div>
        
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div className={`blog-card fade-in delay-${index * 100}`} key={blog.id}>
              <Link to={blog.link} className="blog-image">
                <img src={blog.image} alt={blog.title} loading="lazy" />
              </Link>
              <div className="blog-content">
                <span className="blog-date">{blog.date}</span>
                <Link to={blog.link}>
                  <h3 className="blog-title">{blog.title}</h3>
                </Link>
                <Link to={blog.link} className="blog-read-more">Read More &rarr;</Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="blog-footer text-center" style={{ marginTop: '40px' }}>
          <button className="btn-primary">View All Blogs</button>
        </div>
      </div>
    </div>
  );
}
