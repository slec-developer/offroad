import React, { useRef, useState } from 'react';
import "./../../../assets/css/navigation-bar.css";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import AutobotIco from './../../../assets/images/ico/autobot-ico.png';
import AutobotLogo from './../../../assets/images/ico/autobot-logo.png';

function NavigationBar() {
  const navRef = useRef();
  const location = useLocation();
  // const [scrolling, setScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dropdown
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [collectionDropdownOpen, setCollectionDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const showNavBar = () => {
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
    setCollectionDropdownOpen(false);
    setMediaDropdownOpen(false);
    setShopDropdownOpen(false);
  };

  // Handle dropdown behavior
  const toggleServicesDropdown = () => setServicesDropdownOpen(!servicesDropdownOpen);
  const openServicesDropdown = () => setServicesDropdownOpen(true);
  const closeServicesDropdown = () => setServicesDropdownOpen(false);

  const toggleCollectionDropdown = () => setCollectionDropdownOpen(!collectionDropdownOpen);
  const openCollectionDropdown = () => setCollectionDropdownOpen(true);
  const closeCollectionDropdown = () => setCollectionDropdownOpen(false);

  const toggleMediaDropdown = () => setMediaDropdownOpen(!mediaDropdownOpen);
  const openMediaDropdown = () => setMediaDropdownOpen(true);
  const closeMediaDropdown = () => setMediaDropdownOpen(false);

  const toggleShopDropdown = () => setShopDropdownOpen(!shopDropdownOpen);
  const openShopDropdown = () => setShopDropdownOpen(true);
  const closeShopDropdown = () => setShopDropdownOpen(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (location.pathname === "/") {
  //       setScrolling(window.scrollY > 50);
  //     } else {
  //       setScrolling(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [location.pathname]);

  return (
    <header className={`main-header p-0 m-0 scrolled`}>
      <nav className="w-100 m-0" ref={navRef}>
        <div className="nav_div container-fluid d-flex flex-wrap justify-content-center align-items-center">
          <Link to="/" onClick={closeNavBar} className="nav-link">Home</Link>
          <Link to="/about-us" onClick={closeNavBar} className="nav-link">About Us</Link>
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
                <Link to="/services" onClick={closeNavBar} className="dropdown-item">Service</Link>
                <Link to="/service-center" onClick={closeNavBar} className="dropdown-item">Service Center</Link>
                <Link to="/service-center/after-care" onClick={closeNavBar} className="dropdown-item">After Care</Link>
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
              className="dropdown-toggle nav-link"
            >
              Collection
            </Link>
            {collectionDropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/collection" onClick={closeNavBar} className="dropdown-item">Featured Project</Link>
                <Link to="/featured-build" onClick={closeNavBar} className="dropdown-item">Featured Build</Link>
              </div>
            )}
          </div>

          <Link to="/" className="autobot-router-link">
            <img src={ AutobotLogo } className="autobot-ico" alt="Autobot Offroad PH" />
          </Link>

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
                <Link to="/blog/news" onClick={closeNavBar} className="dropdown-item">Blog</Link>
                <Link to="/video" onClick={closeNavBar} className="dropdown-item">Video</Link>
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
                <Link to="/service-center/shop" onClick={closeNavBar} className="dropdown-item">Shop</Link>
                <Link to="/merch" onClick={closeNavBar} className="dropdown-item">Merchant</Link>
              </div>
            )}
          </div>

          <Link to="/service-center/contact-us" onClick={closeNavBar} className="nav-link">Contact Us</Link>
          <Link to="/register" onClick={closeNavBar} className="nav-link">Register</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavBar}>
            <FaTimes />
          </button>
        </div>
      </nav>

      <div className='open-btn-div'>
        {!isMenuOpen && (
          <button className="nav-btn nav-open-btn" onClick={showNavBar}>
            <FaBars />
          </button>
        )}
      </div>
    </header>
  );
}

export default NavigationBar;
