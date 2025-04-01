import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../assets/css/shopping-list.css"
import { Link } from "react-router-dom";

import Shop1 from "./../../assets/images/shop/shop-1.jpg"
import Shop2 from "./../../assets/images/shop/shop-2.jpg"
import Shop3 from "./../../assets/images/shop/shop-3.jpg"
import Shop4 from "./../../assets/images/shop/shop-4.png"

const productList = [
  {
    imageSrc: Shop1,
    RouterLink: "/",
    productName: "OME BP 51 FRONT AND REAR SUSPENSION"
  },
  {
    imageSrc: Shop2,
    RouterLink: "/about-us",
    productName: "PROFENDER TUNESERIES"
  },
  {
    imageSrc: Shop3,
    RouterLink: "/services",
    productName: "KING COILSPRINGS"
  },
  {
    imageSrc: Shop4,
    RouterLink: "/featured-project",
    productName: "DBA BIG BRAKE KIT"
  },
  {
    imageSrc: Shop1,
    RouterLink: "/",
    productName: "OME BP 51 FRONT AND REAR SUSPENSION"
  },
  {
    imageSrc: Shop3,
    RouterLink: "/services",
    productName: "KING COILSPRINGS"
  },
  {
    imageSrc: Shop4,
    RouterLink: "/featured-project",
    productName: "DBA BIG BRAKE KIT"
  },
  {
    imageSrc: Shop2,
    RouterLink: "/about-us",
    productName: "PROFENDER TUNESERIES"
  },
]


function ShoppingListModification() {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="slider-container">
    <h2>MODIFICATION</h2>
      <Slider {...settings}>
      {productList.map((product, index) => ( 
        <div key={index} className='p-3 mt-3'>
          <Link to={product.RouterLink} className="product-link w-100 h-auto m-0 p-0">
            <div className='card bg-transparent rounded-0 zoom-in'>
              <div className="card-body product-bg p-3">
                <img src={product.imageSrc} className="card-img-top w-100 h-auto" alt={`Service ${index + 1}`} />
              </div>
              <div className="row pt-3">
                <div className='product-name-bg col-12 text-center'>
                  <span to={product.RouterLink} className='product-name'>{product.productName}</span>
                </div>
              </div>
             

            </div>
          </Link>
          
        </div>
      ))}
      </Slider>
    </div>
  )
}

export default ShoppingListModification