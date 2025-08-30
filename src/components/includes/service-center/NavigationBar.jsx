import React, { useRef, useState } from 'react';
import "./../../../assets/css/service-center/navigation-bar.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import AutobotIco from './../../../assets/images/ico/service-center-ico.png';
import AutobotLogo from './../../../assets/images/ico/autobot-logo.png';

function NavigationBar() {
  const navRef = useRef();
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dropdown states
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const toggleNavBar = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    if (newMenuState) {
      navRef.current.classList.add("responsive_nav");
    } else {
      navRef.current.classList.remove("responsive_nav");
    }
  };

  const closeNavBar = () => {
    setIsMenuOpen(false);
    navRef.current.classList.remove("responsive_nav");
    // Close all dropdowns when navigation is closed
    setServicesDropdownOpen(false);
    setMediaDropdownOpen(false);
    setShopDropdownOpen(false);
  };

  // Handle dropdown behavior
  const toggleServicesDropdown = () => setServicesDropdownOpen(!servicesDropdownOpen);
  const openServicesDropdown = () => setServicesDropdownOpen(true);
  const closeServicesDropdown = () => setServicesDropdownOpen(false);

  const toggleMediaDropdown = () => setMediaDropdownOpen(!mediaDropdownOpen);
  const openMediaDropdown = () => setMediaDropdownOpen(true);
  const closeMediaDropdown = () => setMediaDropdownOpen(false);

  const toggleShopDropdown = () => setShopDropdownOpen(!shopDropdownOpen);
  const openShopDropdown = () => setShopDropdownOpen(true);
  const closeShopDropdown = () => setShopDropdownOpen(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (location.pathname === "/") {
//         setScrolling(window.scrollY > 50);
//       } else {
//         setScrolling(true);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [location.pathname]);

  return (
    <header className='service-center-header p-0 m-0'>
      <nav className="w-100 m-0" ref={navRef}>
        <div className="nav_div container d-flex flex-wrap justify-content-start align-items-center">
          <Link to="/" onClick={closeNavBar} className="back-link">
            <i className="fas fa-caret-left fa-3x orange-color"></i>
            <span className="back-text">Back to Main Site</span>
          </Link>
          <Link to="/service-center" className="autobot-router-link">
            <img src={AutobotIco} className="autobot-service-ico" alt="Autobot Offroad PH" />
          </Link>
          
          <Link to="/service-center/about-us" onClick={closeNavBar} className="nav-link">About Us</Link>
          
          {/* Dropdown for Services */}
          <div 
            className="nav-item dropdown" 
            onMouseEnter={openServicesDropdown} 
            onMouseLeave={closeServicesDropdown}
          >
            <Link 
              onClick={toggleServicesDropdown} 
              className="dropdown-toggle nav-link"
            >
              Services
            </Link>
            {servicesDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/services" onClick={closeNavBar}>Service</Link>
                <Link to="/service-center" onClick={closeNavBar}>Service Center</Link>
                <Link to="after-care" onClick={closeNavBar}>After Care</Link>
              </div>
            )}
          </div>

          {/* Dropdown for Media */}
          <div 
            className="nav-item dropdown" 
            onMouseEnter={openMediaDropdown} 
            onMouseLeave={closeMediaDropdown}
          >
            <Link 
              onClick={toggleMediaDropdown} 
              className="dropdown-toggle nav-link"
            >
              Media
            </Link>
            {mediaDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/blog/news" onClick={closeNavBar}>Blog</Link>
                <Link to="/video" onClick={closeNavBar}>Video</Link>
              </div>
            )}
          </div>
          
          {/* Dropdown for Shop */}
          <div 
            className="nav-item dropdown" 
            onMouseEnter={openShopDropdown} 
            onMouseLeave={closeShopDropdown}
          >
            <Link 
              onClick={toggleShopDropdown} 
              className="dropdown-toggle nav-link"
            >
              Shop
            </Link>
            {shopDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="shop" onClick={closeNavBar}>Shop</Link>
                <Link to="/merch" onClick={closeNavBar}>Merchant</Link>
              </div>
            )}
          </div>

          <Link to="/service-center/contact-us" onClick={closeNavBar} className="nav-link">Contact Us</Link>
          
          <button className="nav-btn nav-close-btn" onClick={toggleNavBar}>
            <FaTimes />
          </button>
        </div>
      </nav>

      {/* Show hamburger icon only when menu is closed */}
      {!isMenuOpen && (
        <div className='open-btn-div col-12'>
          <button className="nav-btn nav-open-btn top-0 end-0 m-3" onClick={toggleNavBar}>
            <FaBars />
          </button>
        </div>
      )}
    </header>
  );
}

export default NavigationBar;
