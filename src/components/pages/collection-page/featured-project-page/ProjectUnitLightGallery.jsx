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
                                navigation={true}
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
                        <p className="text-muted">No image available.</p>
                    )}
                </div>
                <div className='col-12 mt-5'>
                    <div dangerouslySetInnerHTML={{ __html: projectUnit.second_description }} />
                </div>
                <div className='col-12 mt-5'>
                // To sove the problem just give a 2 column display the first image on first column and the other image to the second column mak it col-12 both
                    <div className="d-flex align-items-center justify-content-center" style={styles.galleryContainer}>
                        {projectUnit.images && projectUnit.images.length > 0 ? (
                            <LightGallery 
                                licenseKey="0000-0000-000-0000"
                                speed={500} 
                                plugins={[lgZoom, lgVideo]}
                                mode="lg-fade"
                                pager={true}
                                thumbnail={true}
                                galleryId={'nature'}
                                autoplayFirstVideo={true}
                                elementClassNames={'gallery'}
                                mobileSettings={{
                                    controls: true,
                                    showCloseIcon: true,
                                    download: true,
                                    rotate: true,
                                }}
                            >
                            {projectUnit.images.map((image, index) => (
                                <a  
                                    key={index}
                                    data-lg-size="1600-2400"
                                    data-pinterest-text="Pin it2"
                                    data-tweet-text="lightGallery slide  2"
                                    className="gallery__item"
                                    data-src={`/assets/images/featured-build/${image.imgSrc}`} 
                                    data-sub-html={`<h4>${projectUnit.title}</h4><p>Photo by - <a href='https://unsplash.com/@therawhunter' >Autobot Offroad PH </a></p> `}
                                    style={styles.imageLink}
                                    >
                                    <img 
                                        src={`/assets/images/featured-build/${image.imgSrc}`} 
                                        className={`img-responsive card-img-top rounded-0 m-2 lg-img${index == 0 ? '-'+ 1 : ''}`} 
                                        alt={`Project Unit ${index + 1}`} 
                                        style={styles.image}
                                    />
                                </a>
                            
                            ))}
                            </LightGallery>
                        ) : (
                            <p className="text-muted">No image available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectUnit