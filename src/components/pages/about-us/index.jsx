import React from 'react'
import './../../../assets/css/landing_page.css'
import LeftSmallDescription from './../../global/LeftSmallDescription'

function about() {
  return (
    <>
    <div className="container-fluid home_section">
        <LeftSmallDescription 
              DescBoxClass="transparent_black" 
              BoxTittle="Quality built since ‘07"
              BoxDescription="Where innovation meets adventure. Autobot Autoworks is the ultimate destination for off-road modifications, turning SUVs and 4x4s into unstoppable beasts. From full-build transformations to top-tier custom paint and detailing, we make sure your rig is always adventure-ready—on and off the road."
              RouterLink="/about-us"
              BtnTittle="More"
          />
      </div>
    </>
  )
}

export default about