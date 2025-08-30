import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';
import { FaSearch, FaShoppingCart, FaTruck, FaBoxOpen, FaRegClock, FaPlane, FaUser} from 'react-icons/fa';
import AutobotLogo from './../../../assets/images/ico/autobot-ico.png';
import PhilippineFlag from './../../../assets/images/ico/ph-flag.png'; // You need to add this image to your assets
import './NavBar.css';

function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  const announcements = [
    { icon: <FaBoxOpen style={{ marginRight: 6 }} />, text: 'Metro Manila orders ship 7-10 business days | Provincial orders within 7-12 days.' },
    { icon: <FaTruck style={{ marginRight: 6 }} />, text: 'Pre-order items ship within 30 days.' },
    { icon: <FaPlane style={{ marginRight: 6 }} />, text: 'International Shipping is back!' },
    { icon: <FaRegClock style={{ marginRight: 6 }} />, text: 'No operation on April 17-20, 2025!' },
  ];

  return (
    <div className="navbar-wrapper">
      <div className="announcement-bar" aria-live="polite">
        <div className="announcement-marquee">
          {[...announcements].map((item, idx) => (
            <p key={idx} className="announcement-item">
              {item.icon}{item.text}
            </p>
          ))}
        </div>
      </div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <button
            className="navbar-toggle"
            aria-expanded={isOpen}
            aria-controls="merchant-menu"
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="burger" />
          </button>
          <div id="merchant-menu" className={`navbar-left ${isOpen ? 'open' : ''}`}>
            <Link to="/" className="nav-link">HOME</Link>
            <Link to="/collection" className="nav-link">COLLECTION</Link>
            <Link to="/about-us" className="nav-link">ABOUT US</Link>
          </div>
          
          <Link to="/merchant" className="navbar-brand" aria-label="Autobot Offroad home">
            <img src={AutobotLogo} alt="Autobot Offroad" className="logo" />
          </Link>
          
          <div className="navbar-right">
            <img
              src={PhilippineFlag}
              alt="PH Flag"
              style={{ width: 24, height: 24, borderRadius: '50%', objectFit: 'cover' }}
              title="Philippines"
            />
             <button className="nav-icon">
              <FaSearch size={20} />
            </button>
            <button className="nav-icon">
              <FaUser size={20} />
            </button>
            <button className="nav-icon">
              <FaShoppingCart size={20} />
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavigationBar;
