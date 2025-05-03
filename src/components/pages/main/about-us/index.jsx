import React from 'react'
import './../../../../assets/css/about-us.css'

import FirstCont from './../../../../assets/images/content/about-us-cont-1.jpg'
import SecondCont from './../../../../assets/images/content/about-us-cont-2.jpg'
import ThirdCont from './../../../../assets/images/content/about-us-cont-3.jpg'
import FourthCont from './../../../../assets/images/content/about-us-cont-4.jpg'

function about() {
  return (
    <>
    <div className="container-fluid aboutus_home_section">
    </div>
    <div className="container-fluid aboutus_content_section">
      <div className="row">
        <div className='col-12 w-100 m-0 p-0'>
            <h2>ABOUT US</h2>

            <p>utobot Autoworks Offroad began from the ground up—starting as a car wash, then expanding into a paint shop, before discovering our true passion: off-road vehicle modification.</p>
            
            <p>Founded in 2006 in Quezon City by <strong>Randy Ronald M. Lao</strong>, Autobot Autoworks Offroad started as a small business built on hard work, vision, and an unrelenting passion for automotive customization. His dedication and commitment to excellence shaped 
            </p>

            <p>Autobot into what it is today—a name synonymous with quality, innovation, and world-class craftsmanship.
            From 2009 to 2015, we catered to sedans and supercars, specializing in paint jobs and body modifications. But as our love for 4×4 and off-road builds grew, we shifted our focus to crafting rugged, high-performance machines built for any terrain.
            As the industry evolved, so did we. We embraced challenges, continuously learned, and pushed the limits of automotive customization. Our relentless pursuit of innovation brought us to the Las Vegas SEMA Show, which we have attended every year since 2014, allowing us to bring global expertise back to the Philippines.
            </p>

            <p>Our passion and dedication—not just from our founder, but from the entire Autobot team—have earned us multiple awards at the Manila Auto Salon, including consecutive wins. In 2024, we dominated once again—winning Best of Show and Best in Paint with our entry, the Project Secret Weapon Ford Ranger Next-Gen.
            Now, in August 2025, we celebrate 18 years of strength in the automotive industry. More than just a business, Autobot Autoworks Offroad is built by a team of highly skilled and passionate individuals—people who take pride in every quality build, custom rig, and transformation we create for our clients.</p>
        </div>
        <div className='col-12 w-100 m-0 mt-5 p-0 d-flex flex-column align-items-center text-center'>
            <img src={FirstCont} className="w-100 h-auto" alt="Randy Ronald M. Lao" />
            <i className='mt-3'>In-photo: Randy Ronald M. Lao, CEO, Founder Autobot Offroad</i>
        </div>
        <div className='col-12 w-100 m-0 mt-5 p-0 d-flex flex-column align-items-center text-center'>
            <img src={SecondCont} className="w-100 h-auto" alt="Randy Ronald M. Lao" />
            <i className='mt-3'>In-photo from left to right: Kevin Justo, Randy Ronald Lao, Ken Lao, Benedict Rapanan, and Mac Lao (Winning Best in Paint Moment)</i>
        </div>
        <div className='col-12 w-100 m-0 mt-5 p-0 d-flex flex-column align-items-center text-center'>
            <img src={ThirdCont} className="w-100 h-auto" alt="Randy Ronald M. Lao" />
            <i className='mt-3'>Manila Auto Salon 2024 Winning Best in Paint and Best of Show</i>
        </div>
        <div className='col-12 w-100 m-0 mt-5 p-0'>
          <div className='row p-0 m-0'>
            <div className='col-lg-6 col-md-12 col-sm-12 order-2 order-md-1 m-0 p-5'>
              <h2>EXPANDING OUR REACH</h2>

              <p>Driven by our commitment to world-class service and innovation, Autobot Autoworks Offroad is expanding beyond Quezon City. We are proud to bring our expertise to Autobot Qatar, Autobot Nueva Ecija, Autobot Cagayan de Oro, Autobot Davao, and many more locations as we continue to grow.</p>

              <p>Our mission is clear: to deliver top-tier off-road customization and service to more enthusiasts worldwide.
              Fueled by passion, driven by innovation. Together, we remain Autobot Strong.
              #FueledByGod #AutobotStrong</p>

            </div>
            <div className='col-lg-6 col-md-12 col-sm-12 order-1 order-md-2 m-0 p-0'>
              <img src={FourthCont} className="w-100 h-auto" alt="Randy Ronald M. Lao" />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default about