import React from 'react'
import LeftIcon from './../../assets/images/ico/gradient-left.png'
import RightIcon from './../../assets/images/ico/gradient-right.png'

function SectionTitle ({ tittle }) {
  return (
    <div className="section_tittle_div">
      <img src={LeftIcon} alt="Left Icon" className="icon left-icon" />
      <h1>{tittle}</h1>
      <img src={RightIcon} alt="Right Icon" className="icon right-icon" />
    </div>
  )
}

export default SectionTitle