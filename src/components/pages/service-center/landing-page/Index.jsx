import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './../../../../assets/css/service-center/landing-page.css'
import OrangeRouteBtn from './../../../global/OrangeRouteBtn'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import servicesData from './../../../../assets/json/services.json'
import productsData from './../../../../assets/json/products.json'

function Index() {
  // Product carousel state
  const [currentProductIndex, setCurrentProductIndex] = useState(0)
  const [productsPerPage, setProductsPerPage] = useState(5)
  const totalPages = Math.ceil(productsData.length / productsPerPage)

  // Update products per page based on screen size
  useEffect(() => {
    const updateProductsPerPage = () => {
      const width = window.innerWidth
      if (width >= 1200) {
        setProductsPerPage(5) // Show all 5 products on large screens
      } else if (width >= 992) {
        setProductsPerPage(4) // Show 4 products on medium-large screens
      } else if (width >= 768) {
        setProductsPerPage(3) // Show 3 products on medium screens
      } else if (width >= 576) {
        setProductsPerPage(2) // Show 2 products on small screens
      } else {
        setProductsPerPage(1) // Show 1 product on mobile
      }
    }

    // Set initial count
    updateProductsPerPage()

    // Add event listener for window resize
    window.addEventListener('resize', updateProductsPerPage)

    // Cleanup
    return () => window.removeEventListener('resize', updateProductsPerPage)
  }, [])

  // Navigation functions
  const nextProducts = () => {
    setCurrentProductIndex((prevIndex) => 
      prevIndex + productsPerPage >= productsData.length ? 0 : prevIndex + productsPerPage
    )
  }

  const prevProducts = () => {
    setCurrentProductIndex((prevIndex) => 
      prevIndex - productsPerPage < 0 ? Math.max(0, productsData.length - productsPerPage) : prevIndex - productsPerPage
    )
  }

  // Get current products to display
  const currentProducts = productsData.slice(currentProductIndex, currentProductIndex + productsPerPage)

  return (
    <>
        <div className="container-fluid home_section">
            <video autoPlay loop muted playsInline className="background-video">
                <source src="/assets/video/sc-landing.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="service-overlay home_overlay_cont d-flex flex-column justify-content-center align-items-center text-center">
               <h1 className='fw-bold'>YOUR RIGS OUR CARE</h1>
               <p>
                At Autobot Service Center, we go beyond routine maintenance—we ensure your vehicle is always at its best, whether its built for the daily drive or the toughest terrains. From Preventive Maintenance Service (PMS) to 22-Point Inspection, we provide expert care to keep your engine running smoothly. Our specialized services, including EGR Cleaning, Brake System Check & Repair, and Underchassis & Suspension Repair, help maintain peak performance and safety. Ready to keep your vehicle in peak condition?
               </p>
               <OrangeRouteBtn
                    BtnClassName="services-book-btn sp-wide fw-bold mb-5 shadow-sm"
                    RouterLink="/service-center/contact-us"
                    BtnTittle="BOOK NOW!"
                />
            </div>
        </div>
        <div className="container-fluid our_services_section">
          <div className='row'>
            <div className='col-12 p-3 d-flex flex-column justify-content-center align-items-center text-center'>
              <h2 className='fw-bold'>OUR SERVICES</h2>
            </div>
          </div>
          
          {/* Circle Buttons Grid */}
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10'>
              <div className='services-grid'>
                {servicesData.map((service) => (
                  <Link 
                    key={service.id} 
                    to="/service-center/after-care" 
                    className='service-circle-btn'
                  >
                    <div className='service-icon'>
                      <img 
                        src={`/assets/images/logo/services_ico/${service.icon}`}
                        alt={service.title}
                        className='service-logo-image'
                        onError={(e) => {
                          console.error(`Failed to load image: ${service.icon}`);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className='service-title'>{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid our_products_section">
          <div className='row'>
            <div className='col-12 p-3 d-flex flex-column justify-content-center align-items-center text-center'>
              <h2 className='text_army_green fw-bold'>OUR PRODUCTS</h2>
            </div>
          </div>
          
          {/* Products Carousel */}
          <div className='row justify-content-center'>
            <div className='col-12 col-lg-10'>
              <div className='products-carousel-container'>
                {/* Products Grid with Side Navigation */}
                <div className='products-grid-with-nav'>
                  {/* Left Navigation Button */}
                  <button 
                    className='btn btn-outline-primary carousel-nav-btn side-nav-btn left-nav'
                    onClick={prevProducts}
                    disabled={currentProductIndex === 0}
                  >
                    <FaChevronLeft />
                  </button>
                  
                  {/* Products Grid */}
                  <div className='products-grid'>
                    {currentProducts.map((product, index) => (
                      <div key={product.id} className='product-card'>
                        <div className='product-image-container'>
                          <img 
                            src={`/assets/images/products/${product.image}`}
                            alt={product.name}
                            className='product-image'
                          />
                        </div>
                        <div className='product-info'>
                          <h6 className='product-name'>{product.name}</h6>
                          <span className='product-category'>{product.category}</span>
                          <div className='product-price'>P99.00</div>
                        </div>
                        <Link 
                          to={`/product/${product.id}`}
                          className={`add-to-cart-btn ${index === 1 ? 'primary' : ''}`}
                        >
                          BUY NOW
                        </Link>
                      </div>
                    ))}
                  </div>
                  
                  {/* Right Navigation Button */}
                  <button 
                    className='btn btn-outline-primary carousel-nav-btn side-nav-btn right-nav'
                    onClick={nextProducts}
                  >
                    <FaChevronRight />
                  </button>
                </div>
                
                {/* Page Indicator */}
                <div className='page-indicator'>
                  <span className='text-muted'>
                    Page {Math.floor(currentProductIndex / productsPerPage) + 1} of {totalPages}
                  </span>
                </div>
                
                {/* Shop Here Button */}
                <div className='shop-here-container'>
                  <Link to="/service-center/shop" className='shop-here-btn'>
                    Shop Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

                 <div className="container-fluid featured_section">
           <div className='our_featured_content'>
             <div className='featured-content-wrapper'>
               <div className='featured-text-content'>
                 <h2 className='featured-heading'>Featured in Power Wheelz Magazine</h2>
                 <p className='featured-paragraph'>
                   { "As promised, our friends from Autobot Service Center came this morning (January 18, 2025) and towed our 1996 Nissan Sentra 1600 Super Saloon project car from our garage to their workshop along Road 20, Barangay Bahay Toro, Project 8, Quezon City to work on its dead igntion system and fix other problems stemming from the car's prolonged gestation. " }
                 </p>
                 <p className='featured-paragraph'>
                   { "The Autobot mechanics and technicians practiced utmost care when they towed our Nissan B14 as if they were towing a hyper-expensive supercar or a high-end fully-modified 4x4 rig. That's the kind of professionalism that Autobot prides themselves on. "}
                 </p>
               </div>
             </div>
           </div>
         </div>
    </>
  )
}

export default Index