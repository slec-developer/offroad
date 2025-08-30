import React from 'react'
import { Link } from "react-router-dom";

function OrangeRouteBtn({RouterLink, BtnTittle, BtnClassName}) {
  return (
    <Link to={RouterLink} className={`orange_btn text-center ${BtnClassName}`}>{BtnTittle}</Link>
  )
}

export default OrangeRouteBtn