import React, { useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import "./../../../../../assets/css/project-build.css"

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import featuredBuild from "./../../../../../assets/json/featured-build.json"

function ProjectBuild() {
    const { unit_id } = useParams(); 

    // Find the unit with id "ex: ford-1"
    const projectUnit = featuredBuild.find(unit => unit.id === unit_id.toLowerCase());
    
    // Handle case where unit is not found
    if (!projectUnit) {
        return (
            <div className="project-not-found">
                <div className="not-found-content">
                    <i className="fas fa-exclamation-triangle fa-3x mb-3"></i>
                    <h2>Project Build Not Found</h2>
                    <p>The requested project build could not be found.</p>
                    <Link to="/featured-build" className="back-btn">
                        <i className="fas fa-arrow-left"></i> Back to Featured Builds
                    </Link>
                </div>
            </div>
        );
    }
    
    // Initialize Fancybox on mount
    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {
            loop: true,
            buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
            animationEffect: "zoom-in-out",
            transitionEffect: "slide",
            thumbs: {
                autoStart: true
            }
        });
    }, []);

    return (
        <div className="project-build-section">
            {/* Hero Section */}
            <div className="hero-section">
                <div className="hero-overlay">
                    <div className="container">
                        <div className="hero-content">
                            <div className="breadcrumb-nav">
                                <Link to="/featured-build" className="breadcrumb-link">
                                    <i className="fas fa-chevron-left"></i> Featured Builds
                                </Link>
                            </div>
                            <div className="hero-main-content">
                                <h1 className="project-title">{projectUnit.title}</h1>
                                <div className="project-meta">
                                    <span className="project-category">
                                        <i className="fas fa-car"></i>
                                        {projectUnit.category}
                                    </span>
                                    <span className="project-date">
                                        <i className="fas fa-calendar-alt"></i>
                                        {projectUnit.released}
                                    </span>
                                    <span className="project-color">
                                        <i className="fas fa-palette"></i>
                                        {projectUnit.color}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project Content */}
            <div className="project-content">
                <div className="container">
                    {/* Image Gallery Section */}
                    <div className="gallery-section">
                        <div className="section-header">
                            <h2 className="section-title">Project Gallery</h2>
                            <div className="section-divider"></div>
                            <p className="section-subtitle">
                                Click on any image to view it in full size
                            </p>
                        </div>
                        
                        <div className="image-gallery">
                            {projectUnit.images.map((image, index) => (
                                <div key={index} className="gallery-item">
                                    <a
                                        href={`/assets/images/featured-project/${image.imgSrc}`}
                                        data-fancybox="gallery"
                                        data-caption={`${projectUnit.title} - Image ${index + 1}`}
                                        className="gallery-link"
                                    >
                                        <img
                                            src={`/assets/images/featured-project/${image.imgSrc}`}
                                            alt={`${projectUnit.title} - Image ${index + 1}`}
                                            className="gallery-image"
                                        />
                                        <div className="image-overlay">
                                            <div className="overlay-content">
                                                <i className="fas fa-search-plus"></i>
                                                <span className="image-number">{index + 1}</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="navigation-section">
                        <div className="nav-buttons">
                            <Link to="/featured-build" className="nav-btn back-btn">
                                <i className="fas fa-arrow-left"></i>
                                Back to Featured Builds
                            </Link>
                            <button 
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                                className="nav-btn top-btn"
                            >
                                <i className="fas fa-arrow-up"></i>
                                Back to Top
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectBuild