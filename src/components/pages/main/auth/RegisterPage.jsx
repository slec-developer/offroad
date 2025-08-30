import React from 'react'
import { Link } from "react-router-dom";
import './../../../../assets/css/register-page.css'

function RegisterPage() {
  return (
    <div className="register-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12 text-center">
              <div className="hero-content">
                <div className="coming-soon-badge">
                  <span>COMING SOON</span>
                </div>
                <h1 className="hero-title">
                  Registration System
                  <span className="highlight"> Coming Soon</span>
                </h1>
                <p className="hero-subtitle">
                  { "We're working hard to bring you an amazing registration experience. Stay tuned for updates and be the first to know when we launch!" }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">What to Expect</h2>
              <p className="section-subtitle">
                Our registration system will include amazing features to enhance your experience
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-user-shield"></i>
                </div>
                <h3 className="feature-title">Secure Registration</h3>
                <p className="feature-description">
                  Advanced security measures to protect your personal information and ensure safe account creation.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="feature-title">Mobile Friendly</h3>
                <p className="feature-description">
                  Responsive design that works perfectly on all devices - desktop, tablet, and mobile.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="feature-card">
                <div className="feature-icon">
                  <i className="fas fa-bolt"></i>
                </div>
                <h3 className="feature-title">Fast & Easy</h3>
                <p className="feature-description">
                  Streamlined registration process that takes just a few minutes to complete.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10 col-12 text-center">
              <div className="contact-content">
                <h3 className="contact-title">Have Questions?</h3>
                <p className="contact-subtitle">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
                <div className="contact-buttons">
                  <Link to="/service-center/contact-us" className="btn contact-btn primary">
                    <i className="fas fa-envelope me-2"></i>
                    Contact Us
                  </Link>
                  <Link to="/service-center/about-us" className="btn contact-btn secondary">
                    <i className="fas fa-info-circle me-2"></i>
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage