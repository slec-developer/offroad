import React from 'react'
import { Link } from "react-router-dom";
import './../../../assets/css/service-center/footer.css'
import AutobotFooter from './../../../assets/images/ico/autobot-footer.png'

function Footer() {
  return (
    <div className="container-fluid service-footer-section m-0" id="scroll-section1">
        <div className="row p-0 m-0 footer-first-row">
          <div className="footer-links footer-first-col col-lg-3 col-md-12 col-sm-12">
            <ul>
              <li>
                <img src={AutobotFooter} className="footer-logo"/>
              </li>
              <li>
                <p className="mt-3">#65 Road 20, Brgy. Bahay Toro, Project 8, Quezon City, Philippines 1106</p>
              </li>
            </ul>
          </div>
          <div className="footer-links footer-second-col col-lg-3 col-md-12 col-sm-12">
            <ul>
              <li>
                <strong className="text-white">QUICK LINKS</strong>
              </li>
              <li><Link to="/service-center/shop">SHOP</Link></li>
              <li><Link to="/video">VIDEOS</Link></li>
              <li><Link to="/service-center/shop">AFFORDABLE MAGS AND TIRES</Link></li>
            </ul>
          </div>
          <div className="footer-links footer-third-col col-lg-3 col-md-12 col-sm-12">
            <ul>
              <li>
                <strong className="text-white">LEARN</strong>
              </li>
              <li><Link to="/service-center/about-us">ABOUT US</Link></li>
              <li><Link to="/blog/news">BLOGS</Link></li>
              <li><Link to="">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-links footer-fourth-col col-lg-3 col-md-12 col-sm-12">
            <ul>
              <li>
                <strong className="text-white">SUPPORT</strong>
              </li>
              <li><Link to="/service-center/after-care">SERVICES</Link></li>
              <li><Link to="/merch">MERCH</Link></li>
              <li><Link to="/service-center">SERVICE CENTER</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-second-row row m-0">
          <div className='footer-first-col col-lg-6 col-md-6 col-sm-12'>
            <a className='text-white'>Copyright © 2021 Autobot Offroad. All rights reserved</a>
          </div>
          <div className='footer-second-col col-lg-6 col-md-6 col-sm-12'>
            <Link to="/">Terms and Condition</Link> | <Link to="/">Privacy Policy</Link>
          </div>
        </div>
    </div>
  )
}

export default Footer