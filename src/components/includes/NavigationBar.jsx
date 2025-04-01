import React, { useRef, useState, useEffect  } from 'react'
import "./../../assets/css/navigation_bar.css"; // 
import { Link, useLocation  } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';
import AutobotIco from './../../assets/images/ico/autobot-ico.png';
import AutobotLogo from './../../assets/images/ico/autobot-logo.png';


function NavigationBar() {
  const navRef = useRef()
  const location = useLocation(); // Get the current route
  const [scrolling, setScrolling] = useState(false);

  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }

  

  useEffect(() => {
    const handleScroll = () => {
      if (location.pathname === "/") {
        setScrolling(window.scrollY > 50); // Add background when scrolled
      } else {
        setScrolling(true); // Remove background at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header className={`p-0 m-0 ${scrolling ? "scrolled" : ""}`}>
      <nav className="w-100" ref={navRef}>
        <div className="container d-flex flex-wrap justify-content-center align-items-center">
          <Link to="/" onClick={showNavBar}>Home</Link>
          <Link to="/about-us" onClick={showNavBar}>About Us</Link>
          <Link to="/services" onClick={showNavBar}>Services</Link>
          <Link to="/collection" onClick={showNavBar}>Collection</Link>
          <Link to="/" className="autobot-router-link">
            <img src={scrolling ? AutobotLogo : AutobotIco} className="autobot-ico" alt="Autobot Offroad PH" />
          </Link>
          <Link to="/" onClick={showNavBar}>Media</Link>
          <Link to="/about-us" onClick={showNavBar}>Shop</Link>
          <Link to="/services" onClick={showNavBar}>Contact Us</Link>
          <Link to="/contact" onClick={showNavBar}>Register</Link>
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
  )
}

export default NavigationBar