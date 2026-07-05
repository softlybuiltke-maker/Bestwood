import React, { useEffect } from 'react';
import { Star } from 'lucide-react';
import './Testimonials.css';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah W.",
      role: "Homeowner, Nairobi",
      text: "The mahogany bed I ordered is absolutely breathtaking. The craftsmanship and attention to detail are incredible. It has transformed my bedroom into a sanctuary.",
      rating: 5
    },
    {
      id: 2,
      name: "David K.",
      role: "Interior Designer",
      text: "I always recommend Best Wood Furniture to my clients. Their pieces are not only beautiful but truly built to last. The modern TV console was a perfect fit for our latest project.",
      rating: 5
    },
    {
      id: 3,
      name: "Grace M.",
      role: "Verified Buyer",
      text: "Excellent customer service and very fast delivery. The teal sectional sofa is even more stunning in person and incredibly comfortable. Highly recommended!",
      rating: 5
    }
  ];

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

    document.querySelectorAll('.testimonial-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section testimonials-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '40px' }}>
          <h2 className="section-title" style={{ fontSize: '2rem' }}>What Our Customers Say</h2>
          <p className="text-muted">Real stories from homes we've furnished.</p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className={`testimonial-card fade-in-up delay-${(index % 3) * 100}`} key={testimonial.id}>
              <div className="testimonial-stars">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--color-star)" color="var(--color-star)" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="author-info">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
