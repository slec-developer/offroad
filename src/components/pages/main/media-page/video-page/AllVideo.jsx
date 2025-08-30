import React, { useEffect, useState } from 'react'
import "./../../../../../assets/css/video.css"
import LeftSmallDescription from "./../../../../global/LeftImageDescription"
import BlogLink from "../../../../includes/main/BlogLink"

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import videoList from "./../../../../../assets/json/video-gallery.json"

const RecordsPerPage = 16; // Show 8 records per page

function AllVideo() {

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'
  
  // Calculate total pages
  const totalPages = Math.ceil(videoList.length / RecordsPerPage);
  
  // Sort videos by title
  const sortedVideos = [...videoList].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });
  
  // Get records for the current page
  const indexOfLastRecord = currentPage * RecordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - RecordsPerPage;
  const currentRecords = sortedVideos.slice(indexOfFirstRecord, indexOfLastRecord);

  // Handle Pagination
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Handle Sort Toggle
  const toggleSort = () => {
    setSortOrder(prevOrder => prevOrder === 'asc' ? 'desc' : 'asc');
    setCurrentPage(1); // Reset to first page when sorting
  };

  // Utility to extract video ID and build embed URL
  const getEmbedUrl = (url) => {
    const videoId = new URL(url).searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}?autoplay=0`;
  };

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Toolbar: {
        display: ["close"],
      },
      video: {
        autoStart: true, // Let Fancybox handle autoplay safely
      },
    });

    // Clean up on unmount
    return () => {
      Fancybox.destroy();
    };
  }, []);

  

  return (
    <>
    <div className="container-fluid video-list-section" >
      {/* Enhanced Header Section */}
      <div className="video-header-section">
        <div className="header-content">
          <h1 className="video-main-title">Video Gallery</h1>
          <p className="video-subtitle">Explore our collection of automotive videos and project showcases</p>
          <div className="video-stats">
            <span className="stat-item">
              <i className="fas fa-video"></i>
              {videoList.length} Videos
            </span>
            <span className="stat-item">
              <i className="fas fa-calendar-alt"></i>
              Latest Updates
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Sort Button Section */}
      <div className="row m-0 p-0 mb-4">
        <div className="col-12 sort-btn-container">
          <button 
            onClick={toggleSort} 
            className="sort-btn"
            title={`Sort by title (${sortOrder === 'asc' ? 'A-Z' : 'Z-A'})`}
          >
            <i className={`fas fa-sort-alpha-${sortOrder === 'asc' ? 'down' : 'up'}`}></i>
            Sort by Title {sortOrder === 'asc' ? '(A-Z)' : '(Z-A)'}
          </button>
        </div>
      </div>

      {/* Results Info */}
      <div className="results-info">
        <div className="container">
          <p className="results-count">
            Showing {sortedVideos.length} of {videoList.length} videos
          </p>
        </div>
      </div>

      {/* Video Gallery - Keeping exactly as is */}
      <div className="video-gallery row">
        {currentRecords.map((video, index) => (
          <div className="col-lg-3 col-md-4 col-sm-12 mb-4" key={index}>
            <a 
              data-fancybox="gallery" 
              href={getEmbedUrl(video.url)} 
              data-caption={video.title}
            >
              <img 
                src={`https://img.youtube.com/vi/${new URL(video.url).searchParams.get("v")}/0.jpg`} 
                alt={`YouTube Video ${index + 1}`} 
                className="img-fluid rounded shadow"
              />
              <p className="mt-2 text-center">{video.title}</p>
            </a>
          </div>
        ))}
      </div>

      {/* Pagination Section - Keeping exactly as is */}
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

      {/* BlogLink Component - Keeping exactly as is */}
      <div className='col-12 w-100 h-auto m-0 p-3 mt-5'>
          <BlogLink />
      </div>
    </div>

    </>
  )
}

export default AllVideo