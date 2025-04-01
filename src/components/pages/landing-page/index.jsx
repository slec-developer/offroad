import React from 'react'
import { Link } from "react-router-dom";
import './../../../assets/css/landing_page.css'
import homeBgVideo from './../../../assets/images/content/home-bg.mp4'
import SectionTitle from './../../global/SectionTitle'
import LeftSmallDescription from './../../global/LeftSmallDescription'
import LeftImageDescription from './../../global/LeftImageDescription'
import RightImageDescription from './../../global/RightImageDescription'
import BlackRouteBtn from './../../global/BlackRouteBtn'
import FeaturedBuildCarousel from './../../global/FeaturedBuildCarousel'
import ShoppingListModification from '../../global/ShoppingListModification'
import ShoppingListMaintenance from '../../global/ShoppingListMaintenance'

import AutobotBG from './../../../assets/images/ico/autobot-bg.png'
import FirstBlog from './../../../assets/images/content/march-madness.jpg'
import SecondBlog from './../../../assets/images/content/blog-1.jpg'
import ThirdBlog from './../../../assets/images/content/blog-2.jpg'
import PhilMap from './../../../assets/images/content/map.png'

import ServiceOne from './../../../assets/images/content/services-1.jpg'
import ServiceTwo from './../../../assets/images/content/services-2.jpg'
import ServiceThree from './../../../assets/images/content/services-3.jpg'
import ServiceFour from './../../../assets/images/content/services-4.jpg'
import ServiceFive from './../../../assets/images/content/services-5.jpg'
import ServiceSix from './../../../assets/images/content/services-6.jpg'
import ServiceSeven from './../../../assets/images/content/services-7.jpg'
import ServiceEight from './../../../assets/images/content/services-8.jpg'

import MerchOne from './../../../assets/images/merch/merch-1.jpg'
import MerchTwo from './../../../assets/images/merch/merch-2.jpg'
import MerchThree from './../../../assets/images/merch/merch-3.jpg'

const servicesData = [
  {
    imageSrc: ServiceOne,
    RouterLink: "/services",
    BtnTittle: "Off-road Vehicle Customization"
  },
  {
    imageSrc: ServiceTwo,
    RouterLink: "/services",
    BtnTittle: "Vehicle Maintenance and Repairs"
  },
  {
    imageSrc: ServiceThree,
    RouterLink: "/services",
    BtnTittle: "Suspension Upgrades"
  },
  {
    imageSrc: ServiceFour,
    RouterLink: "/services",
    BtnTittle: "Fabrication Services"
  },
  {
    imageSrc: ServiceFive,
    RouterLink: "/services",
    BtnTittle: "Tire and Wheels"
  },
  {
    imageSrc: ServiceSix,
    RouterLink: "/services",
    BtnTittle: "4x4 Parts and Accesories"
  },
  {
    imageSrc: ServiceSeven,
    RouterLink: "/services",
    BtnTittle: "Performance Upgrades"
  },
  {
    imageSrc: ServiceEight,
    RouterLink: "/services",
    BtnTittle: "Vehicle Inspection"
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
              BoxTittle="Quality built since ‘07"
              BoxDescription="Where innovation meets adventure. Autobot Autoworks is the ultimate destination for off-road modifications, turning SUVs and 4x4s into unstoppable beasts. From full-build transformations to top-tier custom paint and detailing, we make sure your rig is always adventure-ready—on and off the road."
              RouterLink="/about-us"
              BtnTittle="More"
          />
        </div>
        
      </div>
      <SectionTitle tittle="SERVICES"/>
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
                  BoxTittle="MARCH MADNESS SALE"
                  BoxDescription="This March, Autobot Offroad is bringing the ultimate upgrade season with insane deals on off-road essentials, accessories, and performance mods! Whether you're looking for a full build, suspension upgrades, or lighting enhancements, now’s the time to level up your rig without breaking the bank."
                  RouterLink="/about-us"
                  BtnTittle="More"
              />
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 p-0'>
            <div className="row p-0 m-0">
              <div className='col-12 p-0 m-0 blog-right-box'>
                  <img src={SecondBlog} className="" alt="March Madness" />
                  <div className="blog-overlay-2">
                    <RightImageDescription 
                          DescBoxClass="transparent_black" 
                          BoxTittle="TOYOTA x AUTOBOT"
                          BoxDescription="Autobot Offroad is proud to collaborate with Toyota in bringing back an iconic legend—the Toyota Tamaraw. Blending heritage with innovation, this build is engineered for modern utility, durability, and adventure."
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
                          BoxTittle="MARLBORO x AUTOBOT"
                          BoxDescription="Marlboro teams up with Autobot Offroad to transform three Ford Raptor Next-Gens into Marlboro Red beasts, built for adventure. With custom wheels, rugged tires, and premium off-road upgrades, these one-of-a-kind Raptors are up for grabs in an exclusive Marlboro raffle!"
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
            BoxTittle="Quality built since ‘07"
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
            BoxTittle="Quality built since ‘07"
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
                            <Link to="/services" className="merch_btn">LINEAR COLLECTION</Link>
                        </div>
                    </div>
                    <div className='col-lg-6 col-md-12 col-sm-12 p-0 m-0'>
                      <div className='row m-0 p-0'>
                        <div className='merch-box-col col-12 m-0 p-0'>
                            <img src={MerchTwo} alt="Merch" className="merch_img rounded-lg m-0 object-cover zoom-in" />
                              <div className='merch-overlay '>
                                <Link to="/services" className="merch_btn">SUNSET DRIFT COLLECTION</Link>
                            </div>
                        </div>
                        <div className='merch-box-col col-12 m-0 p-0'>
                            <img src={MerchThree} alt="Merch" className="merch_img rounded-lg m-0 object-cover zoom-in" />
                              <div className='merch-overlay '>
                                  <Link to="/services" className="merch_btn">MONO COLLECTION</Link>
                              </div>
                        </div>
                      </div>
                    </div>
                </div>

          </div>
        </div>
      </div>
      <SectionTitle tittle="POWERED BY"/>
      <div className="container-fluid powered_by_section" >
        <div className='row m-0'>
            <div className='col-12 p-5 d-flex justify-content-center align-items-center'>
              <img src={PhilMap} className='ph_map img-fluid' alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default index