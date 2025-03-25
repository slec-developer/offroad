import React from 'react'
import { Link } from "react-router-dom";

function RightImageDescription({ rowClassName, DescBoxClass, BoxTittle, BoxDescription, RouterLink, BtnTittle }) {
  return (
    <div className={`row p-0 ${rowClassName}`}>
        <div className='col-lg-2 col-md-0 col-sm-0 p-0 m-0'></div>
        <div className={`image_desc_div col-lg-10 col-md-12 col-sm-12 m-0 ${DescBoxClass}`}>
            <h1>{ BoxTittle }</h1>
            <p>{ BoxDescription }</p>
            <Link to={RouterLink} className="black_btn">{BtnTittle}</Link>
        </div>
       
    </div>
  )
}

export default RightImageDescription