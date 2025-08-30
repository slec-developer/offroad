import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './../../../../assets/css/service-center/shop-page.css'
import productsData from './../../../../assets/json/products.json'
import BannerIMage from './../../../../assets/images/content/Frame_16.png'

function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState(productsData)
  const [selectedCategory, setSelectedCategory] = useState('ALL PRODUCTS')
  const [selectedPrice, setSelectedPrice] = useState('PRICE')
  const [sortBy, setSortBy] = useState('SORT BY')
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12

  // Get unique categories for filtering
  const categories = ['ALL PRODUCTS', ...new Set(productsData.map(product => product.category))]
  
  // Price ranges for filtering
  const priceRanges = ['PRICE', 'Under P500', 'P500 - P1000', 'P1000 - P2000', 'Over P2000']
  
  // Sort options
  const sortOptions = ['SORT BY', 'Price: Low to High', 'Price: High to Low', 'Name: A-Z', 'Name: Z-A', 'Newest First']

  // Filter products based on selected options
  useEffect(() => {
    let filtered = [...productsData]

    // Filter by category
    if (selectedCategory !== 'ALL PRODUCTS') {
      filtered = filtered.filter(product => product.category === selectedCategory)
    }

    // Filter by price (simplified for demo - using product ID as price indicator)
    if (selectedPrice !== 'PRICE') {
      switch (selectedPrice) {
        case 'Under P500':
          filtered = filtered.filter(product => product.id <= 3)
          break
        case 'P500 - P1000':
          filtered = filtered.filter(product => product.id > 3 && product.id <= 6)
          break
        case 'P1000 - P2000':
          filtered = filtered.filter(product => product.id > 6 && product.id <= 8)
          break
        case 'Over P2000':
          filtered = filtered.filter(product => product.id > 8)
          break
        default:
          break
      }
    }

    // Sort products
    if (sortBy !== 'SORT BY') {
      switch (sortBy) {
        case 'Price: Low to High':
          filtered.sort((a, b) => a.id - b.id)
          break
        case 'Price: High to Low':
          filtered.sort((a, b) => b.id - a.id)
          break
        case 'Name: A-Z':
          filtered.sort((a, b) => a.name.localeCompare(b.name))
          break
        case 'Name: Z-A':
          filtered.sort((a, b) => b.name.localeCompare(a.name))
          break
        case 'Newest First':
          filtered.sort((a, b) => b.id - a.id)
          break
        default:
          break
      }
    }

    setFilteredProducts(filtered)
    setCurrentPage(1) // Reset to first page when filters change
  }, [selectedCategory, selectedPrice, sortBy])

  // Generate price based on product ID (for demo purposes)
  const getProductPrice = (productId) => {
    const basePrice = 99 + (productId * 50)
    return `P${basePrice.toLocaleString()}.00`
  }

  // Pagination logic
  const indexOfLastProduct = currentPage * productsPerPage
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct)
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage)

  // Change page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Go to previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Go to next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pageNumbers = []
    const maxVisiblePages = 5
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pageNumbers.push(i)
        }
        pageNumbers.push('...')
        pageNumbers.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pageNumbers.push(1)
        pageNumbers.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pageNumbers.push(i)
        }
      } else {
        pageNumbers.push(1)
        pageNumbers.push('...')
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageNumbers.push(i)
        }
        pageNumbers.push('...')
        pageNumbers.push(totalPages)
      }
    }
    
    return pageNumbers
  }

  return (
    <div className="shop-page">
      {/* Banner Section */}
      <div className="banner-section">
        <div className="banner-image-container">
          <img 
            src={ BannerIMage } 
            alt="Mechanic working on car engine" 
            className="banner-image"
          />
          <div className="banner-overlay">
            <div className="banner-content">
              <h1 className="banner-title">GET 50% OFF ON SELECTED ITEMS</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Filtering and Sorting Section */}
      <div className="filter-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
              <select 
                className="form-select filter-select" 
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 mb-3">
              <select 
                className="form-select filter-select" 
                value={selectedPrice}
                onChange={(e) => setSelectedPrice(e.target.value)}
              >
                {priceRanges.map((price, index) => (
                  <option key={index} value={price}>{price}</option>
                ))}
              </select>
            </div>
            <div className="col-lg-8 col-md-4 col-sm-6 mb-3">
              <select 
                className="form-select filter-select" 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                {sortOptions.map((option, index) => (
                  <option key={index} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="products-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="section-title">ALL PRODUCTS</h2>
              <div className="products-info">
                <p className="products-count">
                  Showing {indexOfFirstProduct + 1}-{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} products
                </p>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-12">
              <div className="products-grid">
                {currentProducts.map((product, index) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image-container">
                      <img 
                        src={`/assets/images/products/${product.image}`}
                        alt={product.name}
                        className="product-image"
                      />
                    </div>
                    <div className="product-info">
                      <h6 className="product-name">{product.name}</h6>
                      <p className="product-description">{product.category}</p>
                      <div className="product-price">{getProductPrice(product.id)}</div>
                    </div>
                    <button 
                      className="add-to-cart-btn"
                    >
                      BUY NOW
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pagination Section */}
          {totalPages > 1 && (
            <div className="pagination-section">
              <div className="row">
                <div className="col-12">
                  <nav aria-label="Product pagination">
                    <ul className="pagination justify-content-center">
                      {/* Previous Button */}
                      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <button 
                          className="page-link pagination-btn" 
                          onClick={goToPreviousPage}
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
                          onClick={goToNextPage}
                          disabled={currentPage === totalPages}
                        >
                          Next <span aria-hidden="true">&raquo;</span>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ShopPage