import React from 'react'
import { Link } from "react-router-dom";

function BlackRouteBtn({RouterLink, BtnTittle}) {
  return (
    <Link to={RouterLink} className="black_btn">{BtnTittle}</Link>
  )
}

export default BlackRouteBtn