import React from 'react'
import { Link } from "react-router-dom";

function RedRouteBtn({RouterLink, BtnTittle, BtnClassName}) {
  return (
    <Link to={RouterLink} className={`red_btn text-center ${BtnClassName}`}>{BtnTittle}</Link>
  )
}

export default RedRouteBtn