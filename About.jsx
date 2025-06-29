import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div
      className="text-light py-5"
      style={{
        background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)',
        minHeight: '100vh',
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      {/* Hero Section */}
      <div className="container text-center mb-5">
        <div className="p-5 rounded shadow-xl glass-dark animate__animated animate__fadeInDown">
          <h1 className="fw-bold display-4 text-accent">
            About <Link to="/home" className="text-accent text-decoration-none">ElviMart</Link>
          </h1>
          <p className="lead mt-3 text-light fs-5">
            Your one-stop destination for everything from electronics to lifestyle.
            At ElviMart, we believe shopping should be simple, reliable, and joyful.
          </p>
        </div>
      </div>

      {/* Mission, Vision, Story */}
      <div className="container mb-5">
        <div className="row g-4">
          {[
            {
              title: '🚀 Our Mission',
              text: 'To provide top-quality products at unbeatable prices, making everyday shopping seamless and enjoyable for everyone.',
            },
            {
              title: '🌍 Our Vision',
              text: 'To become a globally recognized brand that transforms online shopping through innovation, trust, and customer care.',
            },
            {
              title: '📖 Our Story',
              text: 'Founded in 2025, ElviMart started with a simple goal: bring quality products to your door with just a click. We’ve grown ever since, powered by you.',
            },
          ].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="p-4 rounded glass-dark h-100 card-glow animate__animated animate__fadeInUp">
                <h4 className="text-accent mb-3 fs-4">{item.title}</h4>
                <p className="fs-6">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container mb-5">
        <h2 className="text-center mb-4 text-accent display-6">Why Shop With ElviMart?</h2>
        <div className="row text-center">
          {[
            { icon: 'bi-truck', text: 'Fast & Free Delivery' },
            { icon: 'bi-shield-check', text: 'Secure Payments' },
            { icon: 'bi-stars', text: 'Top Quality Brands' },
            { icon: 'bi-headset', text: '24/7 Support' },
          ].map((item, i) => (
            <div className="col-md-3 mb-4" key={i}>
              <div className="glass-dark rounded py-4 px-3 card-glow h-100 animate__animated animate__zoomIn">
                <i className={`bi ${item.icon} fs-1 text-accent mb-2 icon-hover`}></i>
                <p className="fw-semibold fs-5">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="container text-center">
        <div className="p-4 rounded glass-dark shadow animate__animated animate__fadeInUp">
          <h4 className="mb-3 fs-4">Ready to experience ElviMart?</h4>
          <a href="/Products" className="btn btn-accent btn-lg shadow-sm" aria-label="Start Shopping at ElviMart">
            Start Shopping
          </a>
        </div>
      </div>

      {/* Custom Styles */}
      <style>{`
        @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css');

        .glass-dark {
          background: rgba(10, 20, 40, 0.5);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #ffffffdd;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .glass-dark:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }

        .text-accent {
          color: #00bfff;
        }

        .btn-accent {
          background: linear-gradient(to right, #00bfff, #1e90ff);
          color: #000;
          border: none;
        }

        .btn-accent:hover {
          background: linear-gradient(to right, #1e90ff, #00bfff);
        }

        a.text-accent:hover {
          text-decoration: underline;
        }

        .card-glow:hover {
          box-shadow: 0 0 20px rgba(0, 191, 255, 0.4);
        }

        .icon-hover:hover {
          color: #1e90ff;
          transition: color 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default About;
