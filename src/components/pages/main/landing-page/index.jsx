import React from 'react'
import { Link } from "react-router-dom";
import './../../../../assets/css/landing_page.css'
import homeBgVideo from './../../../../assets/images/content/home-bg.mp4'
import SectionTitle from './../../../global/SectionTitle'
import LeftSmallDescription from './../../../global/LeftSmallDescription'
import LeftImageDescription from './../../../global/LeftImageDescription'
import RightImageDescription from './../../../global/RightImageDescription'
import BlackRouteBtn from './../../../global/BlackRouteBtn'
import FeaturedBuildCarousel from './../../../global/FeaturedBuildCarousel'
import ShoppingListModification from './../../../global/ShoppingListModification'
import ShoppingListMaintenance from './../../../global/ShoppingListMaintenance'

import AutobotBG from './../../../../assets/images/ico/autobot-bg.png'
import FirstBlog from './../../../../assets/images/content/MAS-25-Teaser-2.jpg'
import SecondBlog from './../../../../assets/images/content/Timeline-Cover-1.png'
import ThirdBlog from './../../../../assets/images/content/Luminox-Teaser-4-1.png'
import PhilMap from './../../../../assets/images/content/map.png'

import ServiceOne from './../../../../assets/images/content/services-1.jpg'
import ServiceTwo from './../../../../assets/images/content/services-2.jpg'
import ServiceThree from './../../../../assets/images/content/services-3.jpg'
import ServiceFour from './../../../../assets/images/content/services-4.jpg'
import ServiceFive from './../../../../assets/images/content/services-5.jpg'
import ServiceSix from './../../../../assets/images/content/services-6.jpg'
import ServiceSeven from './../../../../assets/images/content/services-7.jpg'
import ServiceEight from './../../../../assets/images/content/services-8.jpg'

import MerchOne from './../../../../assets/images/merch/Camping-Gear-7-1.png'
import MerchTwo from './../../../../assets/images/merch/DSC09145-1.png'
import MerchThree from './../../../../assets/images/merch/Rectangle-36.png'

// Import products data
import productsData from './../../../../assets/json/products.json'

const servicesData = [
  {
    imageSrc: ServiceOne,
    RouterLink: "/service-center/after-care",
    BtnTittle: "Custom Builds & Fabrication"
  },
  {
    imageSrc: ServiceSeven,
    RouterLink: "/service-center/after-care",
    BtnTittle: "Performance & Upgrades"
  },
  {
    imageSrc: ServiceThree,
    RouterLink: "/service-center/after-care",
    BtnTittle: "Suspension, Wheels & Tires"
  },
  // {
  //   imageSrc: ServiceFour,
  //   RouterLink: "/service-center/after-care",
  //   BtnTittle: "Fabrication Services"
  // },
  // {
  //   imageSrc: ServiceFive,
  //   RouterLink: "/service-center/after-care",
  //   BtnTittle: "Tire and Wheels"
  // },
  // {
  //   imageSrc: ServiceSix,
  //   RouterLink: "/service-center/after-care",
  //   BtnTittle: "4x4 Parts and Accesories"
  // },
  // {
  //   imageSrc: ServiceSeven,
  //   RouterLink: "/service-center/after-care",
  //   BtnTittle: "Performance Upgrades"
  // },
  {
    imageSrc: ServiceEight,
    RouterLink: "/service-center/after-care",
    BtnTittle: "Maintenance, Repairs & Inspections"
  },
];

function index() {
  

  
  return (
    <>
      <div className="container-fluid home_section">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={homeBgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className='autobot-bg-row row p-0 m-0'>
            <div className="col-12 pb-3">
              <img src={AutobotBG} className="autobot-bg rotate-once"/>
            </div>
          </div>
          <LeftSmallDescription 
              DescBoxClass="" 
              BoxTittle="Quality built since '07"
              BoxDescription="Where innovation meets adventure. Autobot Autoworks is the ultimate destination for off-road modifications, turning SUVs and 4x4s into unstoppable beasts. From full-build transformations to top-tier custom paint and detailing, we make sure your rig is always adventure-ready—on and off the road."
              RouterLink="/about-us"
              BtnTittle="More"
          />
        </div>
      </div>
      <div className="container-fluid services_section p-0" >
        <div className='service-box-row row p-0 m-0'>

            {servicesData.map((service, index) => (
              <div key={index} className='service-box-col col-lg-6 col-md-6 col-sm-12 m-0 p-0'>
                <img src={service.imageSrc} alt={`Service ${index + 1}`} />
                  <div className='services-overlay'>
                    <BlackRouteBtn
                      RouterLink={service.RouterLink}
                      BtnTittle={service.BtnTittle}
                    />
                  </div>
              </div>
            ))}

        </div>
      </div>
      <SectionTitle tittle="FEATURED BUILD"/>
      
      <div className="container-fluid featured_build_section" >
       
        <FeaturedBuildCarousel />
        <div className="fb-overlay ">
          <LeftSmallDescription 
              rowClassName="fb_lsd_box_row"
              DescBoxClass="" 
              BoxTittle="Project Secret Weapon"
              BoxDescription="Autobot Autoworks takes the spotlight with Project Secret Weapon, a fully customized Ford Ranger that dominated the show. From its flawless paint to its aggressive off-road build, this rig is pure innovation and performance."
              RouterLink="/featured-project"
              BtnTittle="Read more"
          />  
        </div>
      </div>
      <SectionTitle tittle="BLOG"/>
      <div className="container-fluid blog_section p-0" >
        <div className="blog-outer-div row p-0 m-0">
          <div className='blog-first-div col-lg-6 col-md-6 col-sm-12 p-0'>
            <img src={FirstBlog} className="first-blog-img w-100 h-auto" alt="March Madness" />
            <div className="blog-overlay">
              <LeftImageDescription 
                  DescBoxClass="transparent_black" 
                  BoxTittle="Autobot Offroad Is About to Go Wild at Manila Auto Salon 2025"
                  BoxDescription="Autobot Offroad’s pulling up to Manila Auto Salon 2025 — and trust, this ain’t your usual car show flex. We’re talking next-level rigs, built different, and ready to break necks. This year, we’re ditching the “same old” and dropping fresh, mind-blowing builds that’ll make you question what’s even possible on four wheels. The Autobot crew’s been grinding nonstop — late nights, busted knuckles, and pure passion — all to cook up something insane for y’all. So yeah… get ready. We’re not just showing rigs — we’re dropping jaws. See you at SMX, fam."
                  RouterLink="/about-us"
                  BtnTittle="More"
              />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
            <div className="row p-0 m-0">
              <div className='col-12 p-0 m-0 blog-right-box bg-primary'>
                  <img src={SecondBlog} className="" alt="March Madness" />
                  <div className="blog-overlay-2">
                    <RightImageDescription 
                          DescBoxClass="transparent_black" 
                          BoxTittle="Autobot Jamboree 2025 x BFGoodrich: Where the Trail Gets Real"
                          BoxDescription="Autobot Offroad is back with Jamboree 2025, teaming up with BFGoodrich for the wildest ride yet. Expect new activities, tougher challenges, and big surprises that’ll push every rig — and every driver — to the limit."
                          RouterLink="/about-us"
                          BtnTittle="More"
                      />
                  </div>
              </div>
              <div className='col-12 p-0 m-0 blog-right-box'>
                  <img src={ThirdBlog} className="" alt="March Madness" />
                  <div className="blog-overlay-2">
                    <RightImageDescription 
                          DescBoxClass="transparent_black" 
                          BoxTittle="Luminox x Autobot Offroad"
                          BoxDescription="From October 24–26, Greenhills came alive as Autobot Offroad and Luminox unveiled their collab watch a fusion of rugged style and precision performance. Celebrities and influencers like Ion Perez, Jak Roberto, Klea Pineda, and more joined the celebration, making it a weekend of grit, style, and adventure"
                          RouterLink="/about-us"
                          BtnTittle="More"
                      />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SectionTitle tittle="SHOP HERE"/>
      <div className="container-fluid shop_here_section" >

          <div className='container'>
            <div className="row w-100 h-auto">
                <div className='col-12'>
                  <ShoppingListModification />
                </div>
                <div className='col-12 mt-5'>
                  <ShoppingListMaintenance />
                </div>
            </div>   
          </div>

      </div>
      <SectionTitle tittle="SERVICE CENTER"/>
      <div className="container-fluid service_center_section" >
        <LeftSmallDescription 
            rowClassName="lsd_box_row"
            DescBoxClass="transparent_black" 
            BoxTittle="Quality built since '07"
            BoxDescription="Where innovation meets adventure. Autobot Autoworks is the ultimate destination for off-road modifications, turning SUVs and 4x4s into unstoppable beasts. From full-build transformations to top-tier custom paint and detailing, we make sure your rig is always adventure-ready—on and off the road."
            RouterLink="/about-us"
            BtnTittle="More"
        />
      </div>
      <SectionTitle tittle="MERCH"/>
      <div className="container-fluid merch_section" >
        <LeftSmallDescription 
            rowClassName="lsd_box_row"
            DescBoxClass="transparent_black" 
            BoxTittle="Quality built since '07"
            BoxDescription="Where innovation meets adventure. Autobot Autoworks is the ultimate destination for off-road modifications, turning SUVs and 4x4s into unstoppable beasts. From full-build transformations to top-tier custom paint and detailing, we make sure your rig is always adventure-ready—on and off the road."
            RouterLink="/about-us"
            BtnTittle="More"
        />
        <div className='row m-0 p-0'>
          <div className='merch_col col-12 bg-white'>

                <div className='merch_row row m-0 p-0'>
                    <div className='merch-box-col col-lg-6 col-md-12 col-sm-12 p-0 m-0'>
                        <img src={MerchOne} alt="Merch" className="merch_img rounded-lg m-0 object-cover zoom-in" />
                        <div className='merch-overlay '>
                            <Link to="/services" className="merch_btn">BASECAMP COLLECTION</Link>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 p-0 m-0'>
                      <div className='row m-0 p-0'>
                        <div className='merch-box-col col-12 m-0 p-0'>
                            <img src={MerchTwo} alt="Merch" className="merch_img rounded-lg m-0 object-cover zoom-in" />
                              <div className='merch-overlay '>
                                <Link to="/services" className="merch_btn">ROAM FREE VOL II</Link>
                            </div>
                        </div>
                        <div className='merch-box-col col-12 m-0 p-0'>
                            <img src={MerchThree} alt="Merch" className="merch_img rounded-lg m-0 object-cover zoom-in" />
                              <div className='merch-overlay '>
                                  <Link to="/services" className="merch_btn">FAIRWAY & FOUR WHEEL</Link>
                              </div>
                        </div>
                      </div>
                    </div>
                </div>

          </div>
        </div>
      </div>
      <SectionTitle tittle="BRANCH"/>
      <div className="container-fluid powered_by_section" >
        <div className="powered-by-content">
          <div className="powered-by-header">
            <h2 className="powered-by-title">Our Network Across the Philippines</h2>
            <p className="powered-by-subtitle">From Luzon to Mindanao, Autobot Autoworks powers automotive excellence nationwide</p>
          </div>
          
          <div className='row m-0'>
            <div className='col-12 p-5 d-flex justify-content-center align-items-center'>
              <div className="map-container">
                <img src={PhilMap} className='ph_map img-fluid' alt="Philippines Map with Autobot Branch Locations" />
                <div className="map-overlay">
                  <div className="branch-info">
                    <h3>Strategic Locations</h3>
                    <p>Multiple branches serving every region</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="powered-by-footer">
            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-number">18+</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Branch Locations</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1000+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index