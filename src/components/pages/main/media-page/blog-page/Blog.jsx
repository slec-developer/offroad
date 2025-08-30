import React, { useState } from 'react'
import './../../../../../assets/css/blog.css'
import { Link, useParams } from "react-router-dom";
import blogList from "../../../../../assets/json/blog.json"

const RecordsPerPage = 3; 

function Blog() {
  const { categories } = useParams(); // Get category from URL
  
  const blogCategory = blogList.filter((item) => item.category.toLowerCase() === categories.toLowerCase());
  

  const [currentPage, setCurrentPage] = useState(1);
  // Calculate total pages
  const totalPages = Math.ceil(blogCategory.length / RecordsPerPage);

  // Get records for the current page
  const indexOfLastRecord = currentPage * RecordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - RecordsPerPage;
  const currentRecords = blogCategory.slice(indexOfFirstRecord, indexOfLastRecord);

  // Handle Pagination
const nextPage = () => {
  if (currentPage < totalPages) setCurrentPage(currentPage + 1);
};

const prevPage = () => {
  if (currentPage > 1) setCurrentPage(currentPage - 1);
};

  return (
    <div className="container-fluid blog-section">
      {/* Header Section */}
      <div className="blog-header">
        <h1 className="blog-main-title">Blog</h1>
        <p className="blog-subtitle">Stay updated with the latest news, events, and adventures</p>
      </div>

      {/* Navigation Section */}
      <div className='blog-navigation'>
        <ul className='blog-navbar'>
          <li className={`${categories == 'news' ? 'blog-navbar-active' : ''}`} >
            <Link to="/blog/news">News</Link>
          </li>
          <li className={`${categories == 'events' ? 'blog-navbar-active' : ''}`}>
            <Link to="/blog/events">Events</Link>
          </li>
          <li className={`${categories == 'adventure' ? 'blog-navbar-active' : ''}`}>
            <Link to="/blog/adventure">Adventure</Link>
          </li>
        </ul>
      </div>

      {/* Blog Content Section */}
      <div className='blog-content-section'>
        {currentRecords.length > 0 ? (
          <div className="blog-list">
            {currentRecords.map((blog, blogIndex) => (
              <div key={blogIndex} className='blog-item'>
                <div className='blog-item-content'>
                  <div className='blog-image-wrapper'>
                    <img 
                      src={`/assets/images/blog/${blog.images[0].imgSrc}`} 
                      className="blog-item-image" 
                      alt={`Blog ${blogIndex + 1}`} 
                    />
                  </div>
                  <div className='blog-item-info'>
                    <div className='blog-item-header'>
                      <h3 className='blog-item-title'>{blog.title}</h3>
                      <div className="blog-item-meta">
                        <span className="blog-category">{categories}</span>
                        <span className="blog-date">• {new Date().toLocaleDateString()}</span>
                      </div>
                    </div>
                    
                    <div className='blog-item-description'>
                      <div className="description-preview" dangerouslySetInnerHTML={{ __html: blog.description.substring(0, 200) + '...' }} />
                    </div>
                    
                    <div className="blog-item-actions">
                      <Link to={`/blog/${categories}/${blog.id}`} className="read-more-btn">
                        Read More
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-blogs">
            <div className="no-blogs-content">
              <i className="fas fa-newspaper fa-3x mb-3"></i>
              <h3>No Blogs Available</h3>
              <p>There are currently no blogs in this category.</p>
            </div>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="blog-pagination">
            <button 
              onClick={prevPage} 
              disabled={currentPage === 1} 
              className="pagination-btn pagination-prev"
            >
              <i className="fas fa-chevron-left"></i> Previous
            </button>
            <div className="pagination-info">
              <span className="current-page">{currentPage}</span>
              <span className="page-separator">/</span>
              <span className="total-pages">{totalPages}</span>
            </div>
            <button 
              onClick={nextPage} 
              disabled={currentPage === totalPages} 
              className="pagination-btn pagination-next"
            >
              Next <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Blog