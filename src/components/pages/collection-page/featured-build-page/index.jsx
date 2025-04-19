import React,  { useState }  from 'react'
import "./../../../../assets/css/featured-build.css"
import { Link } from "react-router-dom";
import featuredBuild from "./../../../../assets/json/featured-build.json"

const RecordsPerPage = 12; // Show 8 records per page

function index() {

const [currentPage, setCurrentPage] = useState(1);
// Calculate total pages
const totalPages = Math.ceil(featuredBuild.length / RecordsPerPage);
// Get records for the current page
const indexOfLastRecord = currentPage * RecordsPerPage;
const indexOfFirstRecord = indexOfLastRecord - RecordsPerPage;
const currentRecords = featuredBuild.slice(indexOfFirstRecord, indexOfLastRecord);

// Handle Pagination
const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
};

const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
};

  return (
    <>
        <div className="container-fluid fb_home_section">
            <div className='row m-0 p-0 pt-5'>
                <div className='col-12 m-0 p-5'>
                    <h1 className='ml-5'>FEATURED BUILD</h1>
                </div>
                <div className='col-12 m-0 p-3'>
                    <div className="d-flex flex-row flex-wrap justify-content-center align-items-center m-0 p-0">
                    
                        {currentRecords.map((category, index) => (
                            <div key={index} className="build-div">
                                <Link to={`/project-build/${category.id}`} className='card bg-transparent zoom-in rounded-0 m-0 p-0'>
                                {category.images && category.images.length > 0 ? (
                                    <img src={`/assets/images/featured-project/${category.images[0].imgSrc}`} className="card-img-top rounded-0" alt={`Cover ${index + 1}`} />
                                ) : null}
                                   
                                    <div className="card-body text-center bg-transparent">
                                    <h6 className="card-title text-white">{category.title}</h6>
                                    <span className="card-title text-white">{category.released}</span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
            <div className='row m-0 p-0'>
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

export default index