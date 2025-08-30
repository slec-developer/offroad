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
    productName: "OME BP 51 FRONT AND REAR SUSPENSION",
    price: "P25,999.00",
    category: "Suspension"
  },
  {
    imageSrc: Shop2,
    RouterLink: "/about-us",
    productName: "PROFENDER TUNESERIES",
    price: "P18,500.00",
    category: "Suspension"
  },
  {
    imageSrc: Shop3,
    RouterLink: "/services",
    productName: "KING COILSPRINGS",
    price: "P12,800.00",
    category: "Suspension"
  },
  {
    imageSrc: Shop4,
    RouterLink: "/featured-project",
    productName: "DBA BIG BRAKE KIT",
    price: "P32,500.00",
    category: "Brake System"
  },
  {
    imageSrc: Shop1,
    RouterLink: "/",
    productName: "OME BP 51 FRONT AND REAR SUSPENSION",
    price: "P25,999.00",
    category: "Suspension"
  },
  {
    imageSrc: Shop3,
    RouterLink: "/services",
    productName: "KING COILSPRINGS",
    price: "P12,800.00",
    category: "Suspension"
  },
  {
    imageSrc: Shop4,
    RouterLink: "/featured-project",
    productName: "DBA BIG BRAKE KIT",
    price: "P32,500.00",
    category: "Brake System"
  },
  {
    imageSrc: Shop2,
    RouterLink: "/about-us",
    productName: "PROFENDER TUNESERIES",
    price: "P18,500.00",
    category: "Suspension"
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
    <h2 className="shopping-section-title">MODIFICATION</h2>
      <Slider {...settings}>
      {productList.map((product, index) => ( 
        <div key={index} className='p-3 mt-3'>
          <div className='shopping-product-card'>
            <div className='shopping-product-image-container'>
              <img src={product.imageSrc} className="shopping-product-image" alt={product.productName} />
            </div>
            <div className="shopping-product-info">
              <h6 className='shopping-product-name'>{product.productName}</h6>
              <span className='shopping-product-category'>{product.category}</span>
              <div className='shopping-product-price'>{product.price}</div>
            </div>
            <Link 
              to={product.RouterLink}
              className='shopping-buy-now-btn'
            >
              BUY NOW
            </Link>
          </div>
        </div>
      ))}
      </Slider>
    </div>
  )
}

export default ShoppingListModification