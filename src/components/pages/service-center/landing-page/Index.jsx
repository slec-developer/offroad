import React from 'react'
import './../../../../assets/css/service-center/landing-page.css'

function Index() {
  return (
    <>
        <div className="container-fluid home_section">
            <video autoPlay loop muted playsInline className="background-video">
                <source src="/assets/video/sc-landing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="overlay">
               
            </div>
        </div>
    </>
  )
}

export default Index