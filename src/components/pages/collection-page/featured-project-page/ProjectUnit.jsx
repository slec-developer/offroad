import React from 'react'
import { useParams } from "react-router-dom";
import "./../../../../assets/css/project-unit.css"
import BlogLink from "./../../../includes/BlogLink"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper/modules";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css"; // Core LightGallery styles
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

import featuredProject from "./../../../../assets/json/featured-project.json"

const styles = {
    galleryContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
      padding: "20px",
    },
    largeImageContainer: {
      flex: "1 1 60%", // Large image takes more space
      minWidth: "300px",
    },
    smallImagesContainer: {
      flex: "1 1 40%", // Small images take less space
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
      gap: "10px",
    },
    largeImage: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      cursor: "pointer",
    },
    smallImage: {
      width: "100%",
      height: "auto",
      borderRadius: "8px",
      cursor: "pointer",
    },
  };
  


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
                        src={`/assets/images/featured-project/${projectUnit.imgSrc}`} 
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
                                navigation={true}
                                pagination={{ clickable: true }}
                                autoplay={{ delay: 3000 }}
                                className="m-0 p-0"
                            >
                            
                            {projectUnit.images.map((image, index) => (
                                 <SwiperSlide key={index} className="m-0 p-0">
                                    <img 
                                        key={index} 
                                        src={`/assets/images/featured-project/${image.imgSrc}`} 
                                        className="card-img-top rounded-0 m-2 w-100 h-auto" 
                                        alt={`Project Unit ${index + 1}`} 
                                    />
                                 </SwiperSlide>
                            
                            ))}
                            </Swiper>
                    ) : (
                        <p className="text-muted">No image available.</p>
                    )}
                </div>
                <div className='col-12 mt-5'>
                    <div dangerouslySetInnerHTML={{ __html: projectUnit.second_description }} />
                </div>
                <div className='col-lg-10 col-md-10 col-sm-12 mx-auto mt-5'>
                {projectUnit.images && projectUnit.images.length > 0 ? (
                    <>
                    <Swiper
                            modules={[Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation={true}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000 }}
                            cssMode={true}
                            mousewheel={true}
                            keyboard={true}
                            className="m-0 p-0"
                        >
                            
                            {projectUnit.images.map((image, index) => (
                                    <SwiperSlide key={index} className="m-0 p-0">
                                    <img 
                                        key={index} 
                                        src={`/assets/images/featured-project/${image.imgSrc}`} 
                                        className="card-img-top rounded-0 m-2 w-100 h-auto" 
                                        alt={`Project Unit ${index + 1}`} 
                                    />
                                    </SwiperSlide>
                            
                            ))}
                            </Swiper>

                             {/* ✅ Manually add Next/Prev buttons */}
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                            </>
                    ) : (
                        <p className="text-muted">No image available.</p>
                    )}
                </div>
                <div className='col-12 w-100 h-auto m-0 p-3 mt-5'>
                    <BlogLink />
                </div>
            </div>
        </div>
    );
}

export default ProjectUnit