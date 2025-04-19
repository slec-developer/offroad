import React, { useEffect, useState } from 'react'
import "./../../../../assets/css/video.css"
import LeftSmallDescription from "./../../../global/LeftImageDescription"
import BlogLink from "./../../../includes/BlogLink"

import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

import videoList from "./../../../../assets/json/video-gallery.json"


const RecordsPerPage = 16; // Show 8 records per page



function index() {

  const [currentPage, setCurrentPage] = useState(1);
  // Calculate total pages
  const totalPages = Math.ceil(videoList.length / RecordsPerPage);
  // Get records for the current page
  const indexOfLastRecord = currentPage * RecordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - RecordsPerPage;
  const currentRecords = videoList.slice(indexOfFirstRecord, indexOfLastRecord);

  // Handle Pagination
  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // Utility to extract video ID and build embed URL
  const getEmbedUrl = (url) => {
    const videoId = new URL(url).searchParams.get("v");
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      Toolbar: {
        display: ["close"],
      },
    });

    // Clean up on unmount
    return () => {
      Fancybox.destroy();
    };
  }, []);

  

  return (
    <>
    <div className="container-fluid video-section">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/assets/video/auto-salon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <LeftSmallDescription 
            DescBoxClass="" 
            BoxTittle="Manila Auto Salon 2024 Highlights"
            BoxDescription="Where innovation meets adventure. Autobot Autoworks is the ultimate destination for off-road modifications, turning SUVs and 4x4s into unstoppable beasts. From full-build transformations to top-tier custom paint and detailing, we make sure your rig is always adventure-ready—on and off the road."
            RouterLink="/about-us"
            BtnTittle="See Video"
        />
      </div>
    </div>
    <div className="container-fluid video-list-section" >

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

      <div className='col-12 w-100 h-auto m-0 p-3 mt-5'>
          <BlogLink />
      </div>
    </div>

    </>
  )
}

export default index