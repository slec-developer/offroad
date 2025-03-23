import React from 'react'
import './../../../assets/css/landing_page.css'
import homeBgVideo from './../../../assets/images/content/home-bg.mp4'
import SectionTitle from './../../global/SectionTitle'
import LeftSmallDescription from './../../global/LeftSmallDescription'
import AutobotBG from './../../../assets/images/ico/autobot-bg.png'

function index() {
  return (
    <>
      <div className="container-fluid home_section">
        <video autoPlay loop muted playsInline className="background-video">
          <source src={homeBgVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <div className='row p-0 m-0'>
            <div className="col-12">
              <img src={AutobotBG} className="w-25 h-auto"/>
            </div>
          </div>
          <LeftSmallDescription DescBoxClass="transparent_black" />
        </div>
        
      </div>
      <SectionTitle tittle="SERVICES"/>
      <div className="container-fluid services_section" >
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <SectionTitle tittle="FEATURED BUILD"/>
      <div className="container-fluid featured_build_section" >
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <SectionTitle tittle="BLOG"/>
      <div className="container-fluid blog_section" >
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <SectionTitle tittle="SHOP HERE"/>
      <div className="container-fluid shop_here_section" >
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <SectionTitle tittle="SERVICE CENTER"/>
      <div className="container-fluid service_center_section" >
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <SectionTitle tittle="MERCH"/>
      <div className="container-fluid merch_section" >
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
      <SectionTitle tittle="POWERED BY"/>
      <div className="container-fluid powered_by_section" >
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    </>
  )
}

export default index