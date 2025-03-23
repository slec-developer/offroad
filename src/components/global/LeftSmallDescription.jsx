import React from 'react'
import { Link } from "react-router-dom";

function LeftSmallDescription({ rowClassName, DescBoxClass }) {
  return (
    <div className={`row p-0 m-0 ${rowClassName}`}>
        <div className={`small_desc_div col-lg-5 col-md-12 col-sm-12 m-0 ${DescBoxClass}`}>
            <h1>Quality built since ‘07</h1>
            <p>
                Where innovation meets adventure. Autobot Autoworks is the ultimate destination for off-road modifications, turning SUVs and 4x4s into unstoppable beasts. From full-build transformations to top-tier custom paint and detailing, we make sure your rig is always adventure-ready—on and off the road.
            </p>
            <Link to="/about-us" className="black_btn">More</Link>
        </div>
        <div className='col-lg-7 col-md-0 col-sm-0 p-0 m-0'>
        
        </div>
    </div>
  )
}

export default LeftSmallDescription