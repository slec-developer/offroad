import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import "./../../../../../assets/css/featured-unit.css"
import featuredProject from "./../../../../../assets/json/featured-project.json"

const RecordsPerPage = 3; 

function FeaturedUnit() {
const { categories } = useParams(); // Get category from URL

const projectCategory = featuredProject.find(category => category.category.toLowerCase() === categories.toLowerCase());

const [currentPage, setCurrentPage] = useState(1);
// Calculate total pages
const totalPages = Math.ceil(projectCategory.units.length / RecordsPerPage);

// Get records for the current page
const indexOfLastRecord = currentPage * RecordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - RecordsPerPage;
const currentRecords = projectCategory.units.slice(indexOfFirstRecord, indexOfLastRecord);

// Handle Pagination
const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
};

const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
};

// Generate page numbers for pagination
const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
    } else {
        if (currentPage <= 3) {
            for (let i = 1; i <= 4; i++) {
                pageNumbers.push(i);
            }
            pageNumbers.push('...');
            pageNumbers.push(totalPages);
        } else if (currentPage >= totalPages - 2) {
            pageNumbers.push(1);
            pageNumbers.push('...');
            for (let i = totalPages - 3; i <= totalPages; i++) {
                pageNumbers.push(i);
            }
        } else {
            pageNumbers.push(1);
            pageNumbers.push('...');
            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                pageNumbers.push(i);
            }
            pageNumbers.push('...');
            pageNumbers.push(totalPages);
        }
    }
    
    return pageNumbers;
};

// Change page
const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

  return (
    <>
        <div className="container-fluid featured_unit_section">
            {/* Back Button */}
            <div className='row m-0 mt-5 p-0'>
                <div className='col-12 m-0 p-3'>
                    <div className="back-button-container">
                        <Link to="/featured-project" className="back-link">
                            <i className="fas fa-chevron-left"></i> Featured Projects
                        </Link>
                    </div>
                </div>
            </div>
            
            {/* Header Section */}
            <div className='row m-0 mt-0'>
                <div className='col-12 m-0 mt-1 p-0'>
                    <div className="page-header">
                        <h1 className='page-title'>{projectCategory.title}</h1>
                        <div className="page-subtitle">
                            <span className="units-count">{projectCategory.units.length} Featured Units</span>
                            <span className="page-info">Page {currentPage} of {totalPages}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Units Grid */}
            {currentRecords.length > 0 ? (
                <div className="units-grid">
                    {currentRecords.map((unit, unitIndex) => (
                        <Link key={unit.id || unitIndex} to={`${unit.link}${projectCategory.category}/${unit.id}`} className='unit-card'>
                            <div className='unit-card-inner'>
                                <div className='unit-image-container'>
                                    <img 
                                        src={`/assets/images/featured-project/${unit.imgSrc}`} 
                                        className="unit-image" 
                                        alt={`${unit.title}`} 
                                    />
                                    <div className="unit-overlay">
                                        <span className="view-project">View Project</span>
                                    </div>
                                </div>
                                <div className='unit-content'>
                                    <h4 className='unit-title'>{unit.title}</h4>
                                    <div className='unit-description' dangerouslySetInnerHTML={{ __html: unit.first_description }} />
                                    <div className="unit-footer">
                                        <span className="project-number">#{unitIndex + 1 + (currentPage - 1) * RecordsPerPage}</span>
                                        <span className="read-more">Read More →</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className="no-units">
                    <div className="no-units-content">
                        <i className="fas fa-car fa-3x mb-3"></i>
                        <h3>No Units Available</h3>
                        <p className="text-muted">There are currently no featured units in this category.</p>
                    </div>
                </div>
            )}
            
            {/* Enhanced Pagination Controls */}
            {totalPages > 1 && (
                <div className="pagination-section">
                    <div className="pagination-info">
                        <span className="showing-info">
                            Showing {indexOfFirstRecord + 1}-{Math.min(indexOfLastRecord, projectCategory.units.length)} of {projectCategory.units.length} units
                        </span>
                    </div>
                    
                    <nav className="pagination-nav" aria-label="Units pagination">
                        <ul className="pagination">
                            {/* Previous Button */}
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button 
                                    className="page-link pagination-btn" 
                                    onClick={prevPage}
                                    disabled={currentPage === 1}
                                >
                                    <span aria-hidden="true">&laquo;</span> Previous
                                </button>
                            </li>

                            {/* Page Numbers */}
                            {getPageNumbers().map((number, index) => (
                                <li key={index} className={`page-item ${number === currentPage ? 'active' : ''} ${number === '...' ? 'disabled' : ''}`}>
                                    {number === '...' ? (
                                        <span className="page-link pagination-dots">{number}</span>
                                    ) : (
                                        <button 
                                            className="page-link pagination-btn" 
                                            onClick={() => paginate(number)}
                                        >
                                            {number}
                                        </button>
                                    )}
                                </li>
                            ))}

                            {/* Next Button */}
                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button 
                                    className="page-link pagination-btn" 
                                    onClick={nextPage}
                                    disabled={currentPage === totalPages}
                                >
                                    Next <span aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </div>
    </>
  )
}

export default FeaturedUnit