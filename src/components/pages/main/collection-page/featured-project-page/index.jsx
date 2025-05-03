import React from 'react'
import './../../../../../assets/css/featured-project.css'
import { Link } from "react-router-dom";
import RedRouteBtn from './../../../../global/RedRouteBtn'
import FeaturedBuildCarousel from './../../../../global/FeaturedBuildCarousel'
import LeftSmallDescription from './../../../../global/LeftSmallDescription'
import featuredProject from "./../../../../../assets/json/featured-project.json"

function index() {
  return (
    <>
        <div className="container-fluid fp_home_section">
            <FeaturedBuildCarousel />
            <div className="fp-overlay">
                <LeftSmallDescription 
                    rowClassName="p-0 m-0"
                    DescBoxClass="" 
                    BoxTittle="Project Primus - Toyota Hilux GR"
                    BoxDescription="Autobot Autoworks takes the spotlight with Project Secret Weapon, a fully customized Ford Ranger that dominated the show. From its flawless paint to its aggressive off-road build, this rig is pure innovation and performance."
                    RouterLink="/featured-project"
                    BtnTittle="See Project"
                />  
            </div>
        </div>
        <div className="container-fluid fp_category_section">
          <div className='row m-0 p-0'>
            <div className='col-12 m-0 p-2'>
              <ul className='secondary-navbar'>
                <li>
                  <Link to="/featured-build">Featured Build</Link>
                </li>
              </ul>
            </div>

            <div className='col-12 m-0 p-0'>
              <div className="d-flex flex-row flex-wrap justify-content-center align-items-center m-0 p-0">
              
                {featuredProject.slice(0, 8).map((category, index) => (
                  <div key={index} className="category-div">
                    <Link to={`${category.link}${category.category}`} className='card bg-transparent zoom-in rounded-0 m-0 p-0'>
                        <img src={`/assets/images/featured-project/${category.imgSrc}`} className="card-img-top rounded-0" alt={`Cover ${index + 1}`} />
                        <div className="card-body text-center bg-transparent">
                          <h5 className="card-title text-white">{category.title}</h5>
                        </div>
                    </Link>
                  </div>
                ))}
                 
              </div>
              <div className='col-12 m-0 p-0 d-flex justify-content-center align-items-center'>
                  <RedRouteBtn
                      BtnClassName="services-book-btn sp-wide fw-bold "
                      RouterLink="/featured-project"
                      BtnTittle="SHOW ALL"
                  />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default index