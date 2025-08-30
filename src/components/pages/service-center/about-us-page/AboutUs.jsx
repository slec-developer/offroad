import React from 'react'
import { Link } from 'react-router-dom'
import './../../../../assets/css/service-center/about-us-page.css'
import OrangeRouteBtn from './../../../global/OrangeRouteBtn'

function AboutUs() {
  return (
    <>
      {/* First Section - Hero with Parallax Background */}
      <div className="container-fluid about-hero-section">
        <div className="about-hero-overlay">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-lg-8 text-center">
              <h1 className="about-hero-title">ABOUT AUTOBOT OFFROAD</h1>
              <p className="about-hero-subtitle">
                Your trusted partner in automotive excellence and off-road adventures
              </p>
              <OrangeRouteBtn
                BtnClassName="about-cta-btn sp-wide fw-bold shadow-sm"
                RouterLink="/service-center/after-care"
                BtnTittle="OUR SERVICES"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Vision & Mission */}
      <div className="container-fluid vision-mission-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center mb-5">
              <h2 className="section-title">OUR CORE VALUES</h2>
            </div>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 mb-4">
              <div className="value-card mission-card">
                <div className="value-icon">
                  <i className="fas fa-bullseye"></i>
                </div>
                <h3 className="value-title">MISSION</h3>
                <p className="value-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac aliquet nibh. 
                  Integer a lobortis elit. Nulla facilisi. Cras tincidunt arcu non purus efficitur 
                  auctor vitae ut nulla. Vivamus elementum lectus sit amet eleifend blandit. 
                  Ut ligula odio, ullamcorper vitae velit eu, posuere ullamcorper sapien. 
                  Praesent eget efficitur ex. Suspendisse sodales magna ac ex tincidunt accumsan. 
                  Morbi euismod maximus turpis, vitae vulputate mi porttitor a in sed nisl orci. 
                  Sed vitae aliquam eros. Sed accumsan ut magna. efficitur tristique. 
                  Pellentesque vehicula efficitur nisi eu condimentum.
                </p>
              </div>
            </div>
            
            <div className="col-12 col-lg-6 mb-4">
              <div className="value-card vision-card">
                <div className="value-icon">
                  <i className="fas fa-eye"></i>
                </div>
                <h3 className="value-title">VISION</h3>
                <p className="value-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac aliquet nibh. 
                  Integer a lobortis elit. Nulla facilisi. Cras tincidunt arcu non purus efficitur 
                  auctor vitae ut nulla. Vivamus elementum lectus sit amet eleifend blandit. 
                  Ut ligula odio, ullamcorper vitae velit eu, posuere ullamcorper sapien. 
                  Praesent eget efficitur ex. Suspendisse sodales magna ac ex tincidunt accumsan. 
                  Morbi euismod maximus turpis, vitae vulputate mi porttitor a in sed nisl orci. 
                  Sed vitae aliquam eros. Sed accumsan ut magna. efficitur tristique. 
                  Pellentesque vehicula efficitur nisi eu condimentum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section - Feature with Parallax Background */}
      <div className="container-fluid about-feature-section">
        <div className="about-feature-overlay">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-lg-8 text-center">
              <h2 className="feature-title">EXPERIENCE THE AUTOBOT DIFFERENCE</h2>
              <p className="feature-description">
                With years of experience and a passion for automotive excellence, 
                our team of certified technicians and mechanics are dedicated to 
                providing you with the highest quality service and care for your vehicle.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutUs