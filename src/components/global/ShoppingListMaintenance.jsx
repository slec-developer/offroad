import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../assets/css/shopping-list.css"
import { Link } from "react-router-dom";

import Shop1 from "./../../assets/images/shop/shop-5.jpg"
import Shop2 from "./../../assets/images/shop/shop-6.jpg"
import Shop3 from "./../../assets/images/shop/shop-7.jpg"
import Shop4 from "./../../assets/images/shop/shop-8.jpg"

const productList = [
  {
    imageSrc: Shop1,
    RouterLink: "/",
    productName: "BOSCH WIPER",
    price: "P899.00",
    category: "Maintenance"
  },
  {
    imageSrc: Shop2,
    RouterLink: "/about-us",
    productName: "TOTACHI 10W-40",
    price: "P1,299.00",
    category: "Lubricants"
  },
  {
    imageSrc: Shop3,
    RouterLink: "/services",
    productName: "RAVENOL 5W-40",
    price: "P1,599.00",
    category: "Lubricants"
  },
  {
    imageSrc: Shop4,
    RouterLink: "/featured-project",
    productName: "ZENIUM GEAR OIL",
    price: "P899.00",
    category: "Lubricants"
  },
  {
    imageSrc: Shop1,
    RouterLink: "/",
    productName: "BOSCH WIPER",
    price: "P899.00",
    category: "Maintenance"
  },
  {
    imageSrc: Shop3,
    RouterLink: "/services",
    productName: "RAVENOL 5W-40",
    price: "P1,599.00",
    category: "Lubricants"
  },
  {
    imageSrc: Shop4,
    RouterLink: "/featured-project",
    productName: "ZENIUM GEAR OIL",
    price: "P899.00",
    category: "Lubricants"
  },
  {
    imageSrc: Shop2,
    RouterLink: "/about-us",
    productName: "TOTACHI 10W-40",
    price: "P1,299.00",
    category: "Lubricants"
  },
]


function ShoppingListMaintenance() {

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
    <h2 className="shopping-section-title">MAINTENANCE</h2>
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

export default ShoppingListMaintenance