import React, { useState } from 'react'
import './../../../../assets/css/blog.css'
import { Link, useParams } from "react-router-dom";
import blogList from "./../../../../assets/json/blog.json"

const RecordsPerPage = 3; 

function index() {
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
      <div className='row m-0 p-0'>
        <div className='col-12 m-0 p-2'>
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

        <div className='col-12 m-0 p-0 w-100 h-auto mt-5'>
          {currentRecords.length > 0 ? (
              
              <>

                  {currentRecords.map((blog, blogIndex) => (
                      <Link key={blogIndex} to="" className='unit-rows col-12'>
                          <div className='row m-0 p-0'>
                              <div className='col-lg-3 col-md-3 col-sm-12 p-0 m-0'>
                                  <img src={`/assets/images/blog/${blog.images[0].imgSrc}`} className="card-img-top rounded-0" alt={`Unit ${blogIndex + 1}`} />
                              </div>
                              <div className='unit-info col-lg-9 col-md-9 col-sm-12'>
                                  <h4 className='mb-3'>{blog.title}</h4>
                                  <div className='w-100 h-auto p-0 m-0' dangerouslySetInnerHTML={{ __html: blog.description }} />
                              </div>
                              <hr/>
                          </div>
                      </Link>
                  ))}
              </>

          )   : (
              <p className="text-center text-muted">No blogs available.</p>
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
    </div>
  )
}

export default index