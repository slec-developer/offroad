import React, { useEffect } from 'react'
import { useParams, Link } from "react-router-dom";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "../../../../../assets/css/show-blog.css";

import blogList from "../../../../../assets/json/blog.json"

function ShowBlog() {
    const { article } = useParams();
    const { categories } = useParams();

    // find the article by id
    const blogArticle = blogList.find(
        (item) => item.id.toLowerCase() === article.toLowerCase()
    );

    if (!blogArticle) {
        return (
            <div className="blog-not-found">
                <div className="not-found-content">
                    <i className="fas fa-exclamation-triangle fa-3x mb-3"></i>
                    <h2>Blog Article Not Found</h2>
                    <p>The requested blog article could not be found.</p>
                    <Link to="/blog/news" className="back-btn">
                        <i className="fas fa-arrow-left"></i> Back to Blog
                    </Link>
                </div>
            </div>
        );
    }

    // Initialize Fancybox on mount
    useEffect(() => {
        Fancybox.bind("[data-fancybox='blog-gallery']", {
            loop: true,
            buttons: ["zoom", "slideShow", "fullScreen", "thumbs", "close"],
            animationEffect: "zoom-in-out",
            transitionEffect: "slide",
            thumbs: {
                autoStart: true
            }
        });
    }, []);

    // Function to get category display name
    const getCategoryDisplayName = (category) => {
        const categoryMap = {
            'news': 'News',
            'events': 'Events',
            'adventure': 'Adventure'
        };
        return categoryMap[category] || category;
    };

    // Function to get category icon
    const getCategoryIcon = (category) => {
        const iconMap = {
            'news': 'fas fa-newspaper',
            'events': 'fas fa-calendar-alt',
            'adventure': 'fas fa-mountain'
        };
        return iconMap[category] || 'fas fa-file-alt';
    };

    return (
        <div className="show-blog-section">
            {/* Simple Header - Not Hero-like */}
            <div className="blog-header">
                <div className="container">
                    <div className="header-content">
                        <div className="breadcrumb-nav">
                            <Link to={ "/blog/"+ categories } className="breadcrumb-link">
                                <i className="fas fa-chevron-left"></i> Blog
                            </Link>
                        </div>
                        <div className="blog-meta">
                            <h1 className="blog-title">{blogArticle.title}</h1>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog Content */}
            <div className="blog-content">
                <div className="container">
                    {/* Image Gallery Section - Displayed First */}
                    {blogArticle.images && blogArticle.images.length > 0 && (
                        <div className="gallery-section">
                            <div className="image-gallery">
                                {blogArticle.images.map((image, index) => (
                                    <div key={index} className={`gallery-item ${index === 0 ? 'main-image' : 'secondary-image'}`}>
                                        {/* Category Badge positioned on first image */}
                                        {index === 0 && (
                                            <div className="blog-category-badge">
                                                <i className={getCategoryIcon(blogArticle.category)}></i>
                                                {getCategoryDisplayName(blogArticle.category)}
                                            </div>
                                        )}
                                        <a
                                            href={`/assets/images/blog/${image.imgSrc}`}
                                            data-fancybox="blog-gallery"
                                            data-caption={`${blogArticle.title} - Image ${index + 1}`}
                                            className="gallery-link"
                                        >
                                            <img
                                                src={`/assets/images/blog/${image.imgSrc}`}
                                                alt={`${blogArticle.title} - Image ${index + 1}`}
                                                className="gallery-image"
                                            />
                                            <div className="image-overlay">
                                                <div className="overlay-content">
                                                    <i className="fas fa-search-plus"></i>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Article Content Section - Displayed After Images */}
                    <div className="article-section">
                        <div className="article-content">
                            <div 
                                className="article-description"
                                dangerouslySetInnerHTML={{ __html: blogArticle.description }} 
                            />
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="navigation-section">
                        <div className="nav-buttons">
                            <Link to="/blog/news" className="nav-btn back-btn">
                                <i className="fas fa-arrow-left"></i>
                                Back to Blog
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

export default ShowBlog