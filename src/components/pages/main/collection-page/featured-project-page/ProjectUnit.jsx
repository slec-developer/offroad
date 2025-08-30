import React from 'react'
import { useParams } from "react-router-dom";
import "./../../../../../assets/css/project-unit.css"
import BlogLink from "../../../../includes/main/BlogLink"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper/modules";

import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css"; // Core LightGallery styles
import lgZoom from 'lightgallery/plugins/zoom';
import lgVideo from 'lightgallery/plugins/video';

import featuredProject from "./../../../../../assets/json/featured-project.json"

function ProjectUnit() {
    const { categories } = useParams(); 
    const { project_unit } = useParams(); // Get category from URL
    
    // Find the Project category
    const projectCategory = featuredProject.find(category => category.category === categories.toLowerCase());
   
    // Find the unit with id "ex: ford-1"
    const projectUnit = projectCategory.units.find(unit => unit.id === project_unit.toLowerCase());
   
  
    // Handle case where unit is not found
    if (!projectUnit) {
        return (
            <div className="project-not-found">
                <div className="not-found-content">
                    <i className="fas fa-exclamation-triangle fa-3x mb-3"></i>
                    <h2>Project Unit Not Found</h2>
                    <p>The requested project unit could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid project_unit_section">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-image-container">
                    <img 
                        src={`/assets/images/featured-project/${projectUnit.imgSrc}`} 
                        className="hero-image" 
                        alt={projectUnit.title} 
                    />
                    <div className="hero-overlay">
                        <div className="hero-content">
                            <h1 className="project-title">{projectUnit.title}</h1>
                            <div className="project-category">
                                <span className="category-badge">{projectCategory.title}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Content */}
            <div className="project-content">
                <div className="container">
                    {/* First Description */}
                    <div className="description-section">
                        <div className="section-header">
                            <h2 className="section-title">Project Overview</h2>
                            <div className="section-divider"></div>
                        </div>
                        <div className="description-content" dangerouslySetInnerHTML={{ __html: projectUnit.first_description }} />
                    </div>

                    {/* Image Gallery Section */}
                    {projectUnit.images && projectUnit.images.length > 0 && (
                        <div className="gallery-section">
                            <div className="section-header">
                                <h2 className="section-title">Project Gallery</h2>
                                <div className="section-divider"></div>
                            </div>
                            
                            {/* Main Gallery Carousel */}
                            <div className="main-gallery">
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    navigation={false}
                                    pagination={{ 
                                        clickable: true,
                                        dynamicBullets: true,
                                        renderBullet: function (index, className) {
                                            return '<span class="' + className + ' custom-bullet"></span>';
                                        }
                                    }}
                                    autoplay={{ 
                                        delay: 5000,
                                        disableOnInteraction: false
                                    }}
                                    loop={true}
                                    className="main-swiper"
                                >
                                    {projectUnit.images.map((image, index) => (
                                        <SwiperSlide key={index} className="gallery-slide">
                                            <div className="slide-image-container">
                                                <img 
                                                    src={`/assets/images/featured-project/${image.imgSrc}`} 
                                                    className="slide-image" 
                                                    alt={`${projectUnit.title} - Image ${index + 1}`} 
                                                />
                                                <div className="image-overlay">
                                                    <span className="image-counter">{index + 1} / {projectUnit.images.length}</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>

                            {/* Thumbnail Gallery */}
                            <div className="thumbnail-gallery">
                                <div className="thumbnails-container">
                                    {projectUnit.images.map((image, index) => (
                                        <div key={index} className="thumbnail-item">
                                            <img 
                                                src={`/assets/images/featured-project/${image.imgSrc}`} 
                                                className="thumbnail-image" 
                                                alt={`Thumbnail ${index + 1}`} 
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Second Description */}
                    <div className="description-section">
                        <div className="section-header">
                            <h2 className="section-title">Technical Details</h2>
                            <div className="section-divider"></div>
                        </div>
                        <div className="description-content" dangerouslySetInnerHTML={{ __html: projectUnit.second_description }} />
                    </div>

                    {/* Project Specifications */}
                    <div className="specifications-section">
                        <div className="section-header">
                            <h2 className="section-title">Project Specifications</h2>
                            <div className="section-divider"></div>
                        </div>
                        <div className="specs-grid">
                            <div className="spec-item">
                                <div className="spec-icon">
                                    <i className="fas fa-car"></i>
                                </div>
                                <div className="spec-content">
                                    <h4>Vehicle Type</h4>
                                    <p>{projectCategory.title}</p>
                                </div>
                            </div>
                            <div className="spec-item">
                                <div className="spec-icon">
                                    <i className="fas fa-tools"></i>
                                </div>
                                <div className="spec-content">
                                    <h4>Modification Level</h4>
                                    <p>Custom Build</p>
                                </div>
                            </div>
                            <div className="spec-item">
                                <div className="spec-icon">
                                    <i className="fas fa-calendar-alt"></i>
                                </div>
                                <div className="spec-content">
                                    <h4>Project Status</h4>
                                    <p>Completed</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Content */}
                    <div className="related-content-section">
                        <div className="section-header">
                            <h2 className="section-title">Related Content</h2>
                            <div className="section-divider"></div>
                        </div>
                        <div className="blog-link-container">
                            <BlogLink />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectUnit