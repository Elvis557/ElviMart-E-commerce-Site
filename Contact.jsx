import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    title: 'Customer Inquiry',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_p0psnue',
        'template_hwjadql',
        formRef.current,
        '3Cd20i8ZnHzaWI0Mb'
      )
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Message sent successfully!',
            confirmButtonColor: '#3085d6',
          });
          setFormData({ name: '', email: '', message: '', title: 'Customer Inquiry' });
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Message failed to send. Try again later.',
            text: error.text,
            confirmButtonColor: '#d33',
          });
        }
      );
  };

  return (
    <>
      {/* Contact Section */}
      <div className="bg-light py-5">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h1
              className="fw-bold text-dark display-4"
              whileHover={{ scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Contact Us
            </motion.h1>
            <p className="lead text-muted">
              We'd love to hear from you! Reach out to us anytime, and we'll get back to you soon.
            </p>
          </div>

          {/* Contact Form + Info */}
          <div className="row justify-content-center">
            <div className="col-md-6">
              <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                className="shadow-lg p-4 bg-white rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <input type="hidden" name="title" value={formData.title} />
                <input type="hidden" name="time" value={new Date().toLocaleString()} />

                <div className="mb-4">
                  <label htmlFor="name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-100 shadow-lg rounded-pill">
                  Send Message
                </button>
              </motion.form>
            </div>

            <div className="col-md-6 mt-4 mt-md-0">
              <div className="card shadow-lg p-4 rounded-lg bg-white">
                <h4 className="text-primary mb-4">Contact Information</h4>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-telephone-fill fs-4 text-primary me-3"></i>
                  <p className="mb-0 text-dark"><strong>Phone:</strong> +233 53 697 0715</p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-envelope-fill fs-4 text-success me-3"></i>
                  <p className="mb-0 text-dark"><strong>Email:</strong> elmart10101@gmail.com</p>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt-fill fs-4 text-danger me-3"></i>
                  <p className="mb-0 text-dark"><strong>Address:</strong> Despite St., Accra, Ghana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-5 pt-5">
        <h2 className="text-center fw-bold mb-4 text-primary border-bottom pb-3">Frequently Asked Questions</h2>
        <div className="container">
          <div className="accordion" id="faqAccordion">
            {[
              {
                icon: 'bi-clock-history',
                color: 'text-info',
                question: 'What is the response time for customer inquiries?',
                answer: 'We aim to respond within 24–48 hours. For urgent issues, we recommend calling directly.'
              },
              {
                icon: 'bi-truck',
                color: 'text-warning',
                question: 'How can I track my order on ElviMart?',
                answer: 'Log into your account or use the tracking link sent via email after your purchase to check your order status.'
              },
              {
                icon: 'bi-camera-video',
                color: 'text-danger',
                question: 'Can I collaborate or advertise with ElBlogs?',
                answer: 'Absolutely! We welcome sponsorships, partnerships, and influencer collaborations. Contact us with your proposal.'
              },
              {
                icon: 'bi-credit-card',
                color: 'text-success',
                question: 'What payment options are available?',
                answer: 'We accept Mobile Money (MTN, Vodafone), debit/credit cards, and PayPal (coming soon).'
              },
              {
                icon: 'bi-box-arrow-in-left',
                color: 'text-secondary',
                question: 'What is your return or refund policy?',
                answer: 'Returns are accepted within 7 days of delivery. Items must be in original condition. Refunds are processed within 3–5 business days.'
              },
              {
                icon: 'bi-globe',
                color: 'text-primary',
                question: 'Do you ship internationally?',
                answer: 'Currently, we ship only within Ghana. International shipping will be available soon—stay tuned!'
              },
              {
                icon: 'bi-person-lines-fill',
                color: 'text-dark',
                question: 'Can I change my account information?',
                answer: 'Yes! Just head to your dashboard and click on the "Edit Profile" button to update your info.'
              },
              {
                icon: 'bi-gift',
                color: 'text-pink',
                question: 'Do you offer gift wrapping or special packaging?',
                answer: 'Yes, during checkout you can select our premium packaging and gift wrap option for an extra fee.'
              }
            ].map((faq, index) => (
              <div key={index} className="accordion-item border rounded mb-3 shadow-sm">
                <h2 className="accordion-header" id={`faq${index}`}>
                  <button
                    className="accordion-button collapsed bg-white fw-semibold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${index}`}
                    aria-expanded="false"
                    aria-controls={`collapse${index}`}
                  >
                    <i className={`bi ${faq.icon} me-2 ${faq.color}`}></i>
                    {faq.question}
                  </button>
                </h2>
                <div
                  id={`collapse${index}`}
                  className="accordion-collapse collapse"
                  aria-labelledby={`faq${index}`}
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body text-muted">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline Styles */}
      <style>{`
        .accordion-button:hover {
          background-color: #f8f9fc;
          color: #0d6efd;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .accordion-button i {
          font-size: 1.3rem;
        }

        .accordion-item {
          border-left: 4px solid #0d6efd;
          border-radius: 12px;
        }

        .accordion-body {
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .accordion-button:focus {
          box-shadow: none;
        }
      `}</style>
    </>
  );
};

export default Contact;
