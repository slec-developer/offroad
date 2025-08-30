import React, { useState } from 'react'
import './../../../../../assets/css/featured-project.css'
import { Link } from "react-router-dom";
import featuredProject from "./../../../../../assets/json/featured-project.json"

const RecordsPerPage = 10; // Show 8 records per page


function FeaturedProject() {

const [currentPage, setCurrentPage] = useState(1);
// Calculate total pages
const totalPages = Math.ceil(featuredProject.length / RecordsPerPage);


// Get records for the current page
const indexOfLastRecord = currentPage * RecordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - RecordsPerPage;
const currentRecords = featuredProject.slice(indexOfFirstRecord, indexOfLastRecord);

// Handle Pagination
const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
        <div className="container-fluid fp_category_section">
            <div className='row m-0 mt-5 p-0'>
                {/* Back Button */}
                <div className='col-12 m-0 p-3'>
                    <div className="back-button-container">
                        <Link to="/collection" className="back-link">
                            <i className="fas fa-chevron-left"></i> Collection
                        </Link>
                    </div>
                </div>
                
                <div className='col-12 m-0 p-5'>
                    <h1 className='ml-5'>FEATURED PROJECT</h1>
                </div>
                <div className='col-12 m-0 p-0'>
                    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center m-0 p-0">
                    
                        {currentRecords.map((category, index) => (
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
                </div>

                {/* Pagination Controls */}
                <div className="col-12 d-flex justify-content-center mt-4">
                    <button onClick={prevPage} disabled={currentPage === 1} className="btn btn-outline-light mx-2">
                        Previous
                    </button>
                    <span className="text-white mx-3">Page {currentPage} of {totalPages}</span>
                    <button onClick={nextPage} disabled={currentPage === totalPages} className="btn btn-outline-light mx-2">
                        Next
                    </button>
                </div>

            </div>
        </div>
    </>
  )
}

export default FeaturedProject