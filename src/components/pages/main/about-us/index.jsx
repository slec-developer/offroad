import React from 'react'
import './../../../../assets/css/about-us.css'

import FirstCont from './../../../../assets/images/content/about-us-cont-1.jpg'
import SecondCont from './../../../../assets/images/content/about-us-cont-2.jpg'
import ThirdCont from './../../../../assets/images/content/about-us-cont-3.jpg'
import FourthCont from './../../../../assets/images/content/about-us-cont-4.jpg'

function About() {
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid aboutus_home_section">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">ABOUT AUTOBOT</h1>
            <p className="hero-subtitle">Building Dreams, One Vehicle at a Time</p>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="container-fluid aboutus_content_section">
        <div className="container">
          <div className="row">
            {/* Main About Content */}
            <div className='col-12'>
              <div className="about-main-content">
                <h2 className="about-main-title">ABOUT US</h2>
                
                <div className="about-text-content">
                  <p className="about-paragraph">
                    Autobot Autoworks Offroad began from the ground up—starting as a car wash, then expanding into a paint shop, before discovering our true passion: off-road vehicle modification.
                  </p>
                  
                  <p className="about-paragraph">
                    Founded in 2006 in Quezon City by <strong>Randy Ronald M. Lao</strong>, Autobot Autoworks Offroad started as a small business built on hard work, vision, and an unrelenting passion for automotive customization. His dedication and commitment to excellence shaped Autobot into what it is today—a name synonymous with quality, innovation, and world-class craftsmanship.
                  </p>

                  <p className="about-paragraph">
                    From 2009 to 2015, we catered to sedans and supercars, specializing in paint jobs and body modifications. But as our love for 4×4 and off-road builds grew, we shifted our focus to crafting rugged, high-performance machines built for any terrain.
                  </p>

                  <p className="about-paragraph">
                    As the industry evolved, so did we. We embraced challenges, continuously learned, and pushed the limits of automotive customization. Our relentless pursuit of innovation brought us to the Las Vegas SEMA Show, which we have attended every year since 2014, allowing us to bring global expertise back to the Philippines.
                  </p>

                  <p className="about-paragraph">
                    Our passion and dedication—not just from our founder, but from the entire Autobot team—have earned us multiple awards at the Manila Auto Salon, including consecutive wins. In 2024, we dominated once again—winning Best of Show and Best in Paint with our entry, the Project Secret Weapon Ford Ranger Next-Gen.
                  </p>

                  <p className="about-paragraph">
                    Now, in August 2025, we celebrate 18 years of strength in the automotive industry. More than just a business, Autobot Autoworks Offroad is built by a team of highly skilled and passionate individuals—people who take pride in every quality build, custom rig, and transformation we create for our clients.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Gallery Section */}
            <div className='col-12'>
              <div className="about-gallery">
                <div className="gallery-item">
                  <img src={FirstCont} className="gallery-image" alt="Randy Ronald M. Lao" />
                  <div className="image-caption">
                    <i>In-photo: Randy Ronald M. Lao, CEO, Founder Autobot Offroad</i>
                  </div>
                </div>

                <div className="gallery-item">
                  <img src={SecondCont} className="gallery-image" alt="Team Photo" />
                  <div className="image-caption">
                    <i>In-photo from left to right: Kevin Justo, Randy Ronald Lao, Ken Lao, Benedict Rapanan, and Mac Lao (Winning Best in Paint Moment)</i>
                  </div>
                </div>

                <div className="gallery-item">
                  <img src={ThirdCont} className="gallery-image" alt="Award Ceremony" />
                  <div className="image-caption">
                    <i>Manila Auto Salon 2024 Winning Best in Paint and Best of Show</i>
                  </div>
                </div>
              </div>
            </div>

            {/* Expansion Section */}
            <div className='col-12'>
              <div className="expansion-section">
                <div className='row'>
                  <div className='col-lg-6 col-md-12 col-sm-12 order-2 order-md-1'>
                    <div className="expansion-content">
                      <h2 className="expansion-title">EXPANDING OUR REACH</h2>
                      
                      <div className="expansion-text">
                        <p className="about-paragraph">
                          Driven by our commitment to world-class service and innovation, Autobot Autoworks Offroad is expanding beyond Quezon City. We are proud to bring our expertise to Autobot Qatar, Autobot Nueva Ecija, Autobot Cagayan de Oro, Autobot Davao, and many more locations as we continue to grow.
                        </p>

                        <p className="about-paragraph">
                          Our mission is clear: to deliver top-tier off-road customization and service to more enthusiasts worldwide.
                        </p>

                        <p className="about-paragraph">
                          Fueled by passion, driven by innovation. Together, we remain Autobot Strong.
                        </p>

                        <div className="about-tagline">
                          <span className="tagline-text">#FueledByGod #AutobotStrong</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className='col-lg-6 col-md-12 col-sm-12 order-1 order-md-2'>
                    <div className="expansion-image">
                      <img src={FourthCont} className="w-100 h-auto" alt="Expansion" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About