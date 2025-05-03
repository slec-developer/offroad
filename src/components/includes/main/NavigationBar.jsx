import React, { useRef, useState, useEffect } from 'react';
import "./../../../assets/css/navigation-bar.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import AutobotIco from './../../../assets/images/ico/autobot-ico.png';
import AutobotLogo from './../../../assets/images/ico/autobot-logo.png';

function NavigationBar() {
  const navRef = useRef();
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  // Dropdown
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [collectionDropdownOpen, setCollectionDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  // Handle dropdown behavior
  const toggleServicesDropdown = () => setServicesDropdownOpen(!collectionDropdownOpen);
  const openServicesDropdown = () => setServicesDropdownOpen(true);
  const closeServicesDropdown = () => setServicesDropdownOpen(false);

  const toggleCollectionDropdown = () => setCollectionDropdownOpen(!collectionDropdownOpen);
  const openCollectionDropdown = () => setCollectionDropdownOpen(true);
  const closeCollectionDropdown = () => setCollectionDropdownOpen(false);

  const toggleMediaDropdown = () => setMediaDropdownOpen(!mediaDropdownOpen);
  const openMediaDropdown = () => setMediaDropdownOpen(true);
  const closeMediaDropdown = () => setMediaDropdownOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setScrolling(window.scrollY > 50);
      } else {
        setScrolling(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header className={`p-0 m-0 ${scrolling ? "scrolled" : ""}`}>
      <nav className="w-100 m-0" ref={navRef}>
        <div className="nav_div container pt-5 d-flex flex-wrap justify-content-center align-items-center">
          <Link to="/" onClick={showNavBar}>Home</Link>
          <Link to="/about-us" onClick={showNavBar}>About Us</Link>
          {/* Dropdown for Services */}
          <div 
            className="nav-item dropdown" 
            onMouseEnter={openServicesDropdown} 
            onMouseLeave={closeServicesDropdown}
          >
            <Link 
              onClick={toggleServicesDropdown} 
              className="dropdown-toggle"
            >
            Services
            </Link>
            {servicesDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/services"   onClick={showNavBar}>Service</Link>
                <Link to="/service-center" onClick={showNavBar}>Service Center</Link>
              </div>
            )}
          </div>
          {/* Dropdown for Collection */}
          <div 
            className="nav-item dropdown" 
            onMouseEnter={openCollectionDropdown} 
            onMouseLeave={closeCollectionDropdown}
          >
            <Link 
              onClick={toggleCollectionDropdown} 
              className="dropdown-toggle"
            >
              Collection
            </Link>
            {collectionDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/collection"   onClick={showNavBar}>Featured Project</Link>
                <Link to="/featured-build" onClick={showNavBar}>Featured Build</Link>
              </div>
            )}
          </div>

          <Link to="/" className="autobot-router-link">
            <img src={scrolling ? AutobotLogo : AutobotIco} className="autobot-ico" alt="Autobot Offroad PH" />
          </Link>

          {/* Dropdown for Collection */}
          <div 
            className="nav-item dropdown" 
            onMouseEnter={openMediaDropdown} 
            onMouseLeave={closeMediaDropdown}
          >
            <Link 
              onClick={toggleMediaDropdown} 
              className="dropdown-toggle"
            >
              Media
            </Link>
            {mediaDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/blog/news"   onClick={showNavBar}>Blog</Link>
                <Link to="/video" onClick={showNavBar}>Video</Link>
              </div>
            )}
          </div>
          <Link to="/merchant" onClick={showNavBar}>Shop</Link>
          <Link to="/contact" onClick={showNavBar}>Contact Us</Link>
          <Link to="/register" onClick={showNavBar}>Register</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </div>
      </nav>

      <div className='open-btn-div col-12'>
        <button className="nav-btn nav-open-btn top-0 end-0 m-3" onClick={showNavBar}>
          <FaBars />
        </button>
      </div>
    </header>
  );
}

export default NavigationBar;
