import React from 'react'
import { useParams } from "react-router-dom";
import "./../../../../assets/css/project-unit.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


import featuredProject from "./../../../../assets/json/featured-project.json"



function ProjectUnit() {
    const { categories } = useParams(); 
    const { project_unit } = useParams(); // Get category from URL
    
    // Find the Project category
    const projectCategory = featuredProject.find(category => category.category === categories.toLowerCase());
   
    // Find the unit with id "ex: ford-1"
    const projectUnit = projectCategory.units.find(unit => unit.id === project_unit.toLowerCase());
   
  
    // Handle case where unit is not found
    if (!projectUnit) {
        return <p className="text-center text-muted">Project unit not found.</p>;
    }

    return (
        <div className="container-fluid project_unit_section">
            <div className="row m-0 p-0">
                <div className="col-12 m-0 p-0">
                    <img 
                        src={`/assets/images/featured-build/${projectUnit.imgSrc}`} 
                        className="card-img-top rounded-0 mt-3 w-100 h-auto" 
                        alt={projectUnit.title} 
                    />
                </div>
            </div>
            <div className="row m-0 p-0 mt-3">
                <div className="col-12 p-3 text-center">
                    <h3>{projectUnit.title}</h3>
                </div>
                <div className='col-12 mt-5'>
                    <div dangerouslySetInnerHTML={{ __html: projectUnit.first_description }} />
                </div>
                <div className='proj_unit_carousel col-12 m-0 p-0 mt-5'>
                    {projectUnit.images && projectUnit.images.length > 0 ? (
                         <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={10}
                                slidesPerView={1}
                                navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                className="m-0 p-0"
                            >
                            
                            {projectUnit.images.map((image, index) => (
                                 <SwiperSlide key={index} className="m-0 p-0">
                                    <img 
                                        key={index} 
                                        src={`/assets/images/featured-build/${image.imgSrc}`} 
                                        className="card-img-top rounded-0 m-2 w-100 h-auto" 
                                        alt={`Project Unit ${index + 1}`} 
                                    />
                                 </SwiperSlide>
                            
                            ))}
                            </Swiper>
                    ) : (
                        <p className="text-muted">No additional images available.</p>
                    )}
                </div>
                <div className='col-12 mt-5'>
                    <div dangerouslySetInnerHTML={{ __html: projectUnit.second_description }} />
                </div>
                <div className='col-12 mt-5'>
                    <img 
                        src={`/assets/images/featured-build/${projectUnit.imgSrc}`} 
                        className="card-img-top rounded-0 mt-5 w-100 h-auto" 
                        alt={projectUnit.title} 
                    />
                </div>
            </div>
        </div>
    );
}

export default ProjectUnit