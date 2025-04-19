import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import "./../../../../assets/css/featured-unit.css"
import featuredProject from "./../../../../assets/json/featured-project.json"

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


  return (
    <>
        <div className="container-fluid featured_unit_section">
            <div className='row m-0 mt-5 p-0'>
                
                <div className='col-12 m-0 mt-3 p-0'>
                    <h1 className='ml-5'>{projectCategory.title}</h1>
                </div>

                {currentRecords.length > 0 ? (
                    
                    <>

                        {currentRecords.map((unit, unitIndex) => (
                            <Link key={unit.id || unitIndex} to={`${unit.link}${projectCategory.category}/${unit.id}`} className='unit-rows col-12'>
                                <div className='row m-0 p-0'>
                                    <div className='col-lg-3 col-md-3 col-sm-12 p-0 m-0'>
                                        <img src={`/assets/images/featured-project/${unit.imgSrc}`} className="card-img-top rounded-0" alt={`Unit ${unitIndex + 1}`} />
                                    </div>
                                    <div className='unit-info col-lg-9 col-md-9 col-sm-12'>
                                        <h4 className='mb-3'>{unit.title}</h4>
                                        <div className='w-100 h-auto p-0 m-0' dangerouslySetInnerHTML={{ __html: unit.first_description }} />
                                    </div>
                                    <hr/>
                                </div>
                            </Link>
                        ))}
                    </>

                )   : (
                    <p className="text-center text-muted">No units available.</p>
                )}
                
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

export default FeaturedUnit