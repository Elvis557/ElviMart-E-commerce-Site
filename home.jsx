import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link, NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'animate.css';
import ChatbotComponent from './Chatbot';

function Home() {
  return (
    <>
        {/* Navbar */}
        {/* Navbar */}
<nav className="navbar navbar-expand-lg bg-white sticky-top shadow-sm py-3">
  <div className="container">
  <Link
  className="navbar-brand d-flex align-items-center"
  to="/"
  style={{ textDecoration: 'none' }}
>
  <img
    src="el.png"
    alt="ElviMart Logo"
    style={{ height: '42px', marginRight: '10px' }}
  />
  <span
    style={{
      fontSize: '2rem',
      fontWeight: 900,
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#1b6ec2',
      letterSpacing: '0.5px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      position: 'relative',
    }}
  >
    ElviMart
    <span
      style={{
        display: 'inline-block',
        width: '10px',
        height: '10px',
        backgroundColor: '#0d6efd',
        borderRadius: '50%',
        animation: 'pulseDot 1.5s infinite ease-in-out',
      }}
    ></span>
  </span>
</Link>


    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarContent"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarContent">
      <ul className="navbar-nav ms-auto align-items-lg-center">
        {["Home", "Products", "About", "Contact" ].map((page, idx) => (
          <li className="nav-item mx-2" key={idx}>
            <NavLink
              exact
              to={`/${page.toLowerCase() === "home" ? "" : page.toLowerCase()}`}
              className="nav-link fw-semibold text-dark"
              activeClassName="active"
            >
              {page}
            </NavLink>
          </li>
        ))}
        
        <li className="nav-item">
          <Link to="/login" className="btn btn-outline-primary ms-3 rounded-pill px-3">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="btn btn-primary ms-2 rounded-pill px-3">
            Register
          </Link>
        </li>
        

        
      </ul>
    </div>
  </div>
</nav>

{/* Hero Section */}
<div
  className="position-relative text-white d-flex align-items-center justify-content-center"
  style={{
    height: "100vh",
    backgroundImage: "url('https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1600')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    overflow: "hidden",
  }}
>
  {/* Overlay */}
  <div
    className="position-absolute w-100 h-100"
    style={{
      background: "rgba(0, 0, 0, 0.5)",
      backdropFilter: "blur(6px)",
      zIndex: 1,
    }}
  />

  {/* Hero Content */}
  <div className="container position-relative z-2 text-center px-3 pt-2">
    <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
      Embrace the Future of Shopping
    </h1>
    <p className="lead mb-4 animate__animated animate__fadeInUp " >
      Discover premium electronics, fashion, and lifestyle essentials at ElviMart.
    </p>
    <div className="d-flex justify-content-center gap-3 flex-wrap pt-2">
      <Link to="/products" className="btn btn-lg btn-primary px-4 rounded-pill shadow-lg">
        Shop Now
      </Link>
      <Link to="/about" className="btn btn-lg btn-outline-light px-4 rounded-pill shadow-sm ">
        Learn More
      </Link>
    </div>

    {/* Features Row */}
    <div className="row justify-content-center text-white mt-5">
  {[
    { icon: "bi-truck", title: "Fast Delivery", color: "primary" },
    { icon: "bi-shield-check", title: "Secure Payments", color: "info" },
    { icon: "bi-stars", title: "Top Rated", color: "warning" },
  ].map((feature, idx) => (
    <div
      className="col-10 col-md-3 text-center mb-5 animate__animated animate__fadeInUp"
      key={idx}
      style={{
        animationDelay: `${idx * 0.15}s`,
        animationDuration: "0.7s",
        padding: "0 10px",
      }}
    >
      <div
        className="mx-auto d-flex align-items-center justify-content-center"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(255, 255, 255, 0.07)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow: "0 0 14px rgba(0, 123, 255, 0.2), 0 0 30px rgba(0, 123, 255, 0.08)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          marginBottom: "1.2rem",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.08)";
          e.currentTarget.style.boxShadow =
            "0 0 22px rgba(0, 123, 255, 0.4), 0 0 45px rgba(0, 123, 255, 0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow =
            "0 0 14px rgba(0, 123, 255, 0.2), 0 0 30px rgba(0, 123, 255, 0.08)";
        }}
      >
        <i className={`bi ${feature.icon} fs-3 text-${feature.color}`}></i>
      </div>
      <h5 className="fw-semibold mb-2" style={{ fontSize: "1.15rem" }}>
        {feature.title}
      </h5>
      <p
        className="text-light fw-light"
        style={{ fontSize: "0.95rem", opacity: 0.85, marginBottom: "0" }}
      >
        Excellence you can count on.
      </p>
    </div>
  ))}
</div>

  </div>
</div>
     
      {/* Contact Info Section */}
      <section
  className="py-5"
  style={{
    backgroundColor: '#f9f9f9', // Light gray background for soft contrast
    borderRadius: '15px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)', // Soft shadow for depth
  }}
>
  <div className="container text-center">
    <h3 className="mb-5 fw-bold text-primary display-5" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      Get in Touch with Us
    </h3>
    <div className="row justify-content-center g-4">
      {/* Email Section */}
      <div className="col-md-4">
  <div
    className="d-flex justify-content-center align-items-center flex-column p-4 rounded-3"
    style={{
      background: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'scale(1.05)';
      e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'scale(1)';
      e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }}
  >
    <i className="bi bi-envelope fs-2 text-primary mb-3"></i>
    <a
      href="mailto:elmart10101@gmail.com"
      className="mb-0 text-dark fs-5 fw-light text-decoration-none"
    >
      elmart10101@gmail.com
    </a>
  </div>
</div>
      {/* Phone Section */}
      <div className="col-md-4">
        <div
          className="d-flex justify-content-center align-items-center flex-column p-4 rounded-3"
          style={{
            background: '#ffffff', // White background for the card
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Soft shadow
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'scale(1.05)';
            e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
          }}
        >
          <i className="bi bi-telephone fs-2 text-success mb-3"></i>
          <Link to='/Contact' className="mb-0 text-dark fs-5 fw-light text-decoration-none">+233 53 697 0715</Link>
        </div>
      </div>

      {/* Location Section */}
      <div className="col-md-4">
  <div
    className="d-flex justify-content-center align-items-center flex-column p-4 rounded-3"
    style={{
      background: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'scale(1.05)';
      e.target.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'scale(1)';
      e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }}
  >
    <i className="bi bi-geo-alt fs-2 text-danger mb-3"></i>
    <a
      href="https://www.google.com/maps/place/East+Legon,+Accra,+Ghana"
      target="_blank"
      rel="noopener noreferrer"
      className="mb-0 text-dark fs-5 fw-light text-decoration-none text-center"
    >
      East Legon, Accra, Ghana
    </a>
  </div>
</div>

    </div>
  </div>
</section>

{/* Chatbot Section */}

<ChatbotComponent />

      {/* Footer Section */}
      <footer className="bg-dark text-light pt-5">
  <div className="container">
    <div className="row text-center text-md-start">
      {/* Brand Info */}
      <div className="col-md-3 mb-4">
        <a href='/' className="fw-bold text-primary">ElviMart</a>
        <p>Bringing you the best products at unbeatable prices. Shop smart, shop ElviMart!</p>
      </div>

      {/* Navigation Links */}
      <div className="col-md-2 mb-4">
        <h5 className="fw-semibold">Quick Links</h5>
        <ul className="list-unstyled">
          <li><Link to='/' className="text-light text-decoration-none d-block py-1 hover-link">Home</Link></li>
          <li><a href="/products" className="text-light text-decoration-none d-block py-1 hover-link">Products</a></li>
          <li><a href="/about" className="text-light text-decoration-none d-block py-1 hover-link">About</a></li>
          <li><a href="/contact" className="text-light text-decoration-none d-block py-1 hover-link">Contact</a></li>
        </ul>
      </div>

      {/* Contact Info */}
      <div className="col-md-3 mb-4">
        <h5 className="fw-semibold">Contact Us</h5>
        <a href="mailto:elmart10101@gmail.com" className="mb-1 text-decoration-none" ><i className="bi bi-envelope me-2"></i> elmart10101@gmail.com</a><br />
        <Link to='/Contact' className="text-decoration-none"><i className="bi bi-telephone me-2 "></i> +233 53 697 0715</Link>
      </div>

      {/* Newsletter Signup */}
      <div className="col-md-4 mb-4">
        <h5 className="fw-semibold">Stay Updated</h5>
        <form>
          <div className="input-group my-2">
            <input type="email" className="form-control" placeholder="Your email" />
            <button className="btn btn-primary" type="submit">Subscribe</button>
          </div>
        </form>
        <p className="small text-muted">Get the latest deals and updates straight to your inbox.</p>
      </div>
    </div>

    <hr className="border-secondary" />

    <div className="row align-items-center">
      {/* Social Icons */}
      <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-light me-3 fs-4 hover-icon"><i className="bi bi-facebook"></i></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-light me-3 fs-4 hover-icon"><i className="bi bi-twitter"></i></a>
        <a href="https://www.instagram.com/elvimart25/#" target="_blank" rel="noreferrer" className="text-light me-3 fs-4 hover-icon"><i className="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/in/elvi-mart-167469361/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bor8bQlJUSnaUhrwKM4B%2FmQ%3D%3D" target="_blank" rel="noreferrer" className="text-light me-3 fs-4 hover-icon"><i className="bi bi-linkedin"></i></a>
      </div>

      {/* Payment Options */}
      <div className="col-md-6 text-center text-md-end">
  <span className="me-2">We accept:</span>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
    alt="Visa"
    width="40"
    className="me-1"
  />
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png"
    alt="Mastercard"
    width="40"  
    className="me-1"
  />
  <img
    src="https://momo.mtn.com/wp-content/uploads/sites/15/2022/11/MoMo-Logo-Clear-Space-RGB-Stacked-01-1.png?resize=82%2C82"
    alt="MTN MoMo"
    width="40"
    className="me-1"
  />
 
</div>

    </div>

    <div className="text-center pt-4 pb-2">
      <small>&copy; {new Date().getFullYear()} <strong>ElviMart</strong>. All rights reserved.</small>
    </div>
  </div>

  <style jsx>{`
    .hover-link:hover {
      color: #0d6efd;
      transition: color 0.3s ease;
    }

    .hover-icon:hover {
      color: #0d6efd;
      transform: scale(1.2);
      transition: all 0.3s ease;
    }

    input::placeholder {
      font-style: italic;
    }
  `}</style>
</footer>

    </>
  );
}

export default Home;
