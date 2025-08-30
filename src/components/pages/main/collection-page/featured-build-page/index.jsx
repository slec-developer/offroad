import React, { useState, useEffect } from 'react'
import "./../../../../../assets/css/featured-build.css"
import { Link } from "react-router-dom";
import featuredBuild from "./../../../../../assets/json/featured-build.json"

const RecordsPerPage = 12;

function FeaturedBuild() {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState('title');
    const [sortOrder, setSortOrder] = useState('desc');
    const [filterCategory, setFilterCategory] = useState('all');
    const [filterColor, setFilterColor] = useState('all');
    const [filteredData, setFilteredData] = useState(featuredBuild);

    // Get unique categories and colors for filters
    const categories = ['all', ...new Set(featuredBuild.map(item => item.category))];
    const colors = ['all', ...new Set(featuredBuild.map(item => item.color))];

    // Apply filters and sorting
    useEffect(() => {
        let filtered = [...featuredBuild];
        
        // Apply category filter
        if (filterCategory !== 'all') {
            filtered = filtered.filter(item => item.category === filterCategory);
        }
        
        // Apply color filter
        if (filterColor !== 'all') {
            filtered = filtered.filter(item => item.color === filterColor);
        }
        
        // Apply sorting
        filtered.sort((a, b) => {
            let aValue, bValue;
            
            switch (sortBy) {
                case 'category':
                    aValue = a.category;
                    bValue = b.category;
                    break;
                case 'released':
                    aValue = new Date(a.released);
                    bValue = new Date(b.released);
                    break;
                case 'color':
                    aValue = a.color;
                    bValue = b.color;
                    break;
                default:
                    aValue = a.title;
                    bValue = b.title;
            }
            
            if (sortOrder === 'asc') {
                return aValue > bValue ? 1 : -1;
            } else {
                return aValue < bValue ? 1 : -1;
            }
        });
        
        setFilteredData(filtered);
        setCurrentPage(1); // Reset to first page when filters change
    }, [sortBy, sortOrder, filterCategory, filterColor]);

    // Calculate total pages
    const totalPages = Math.ceil(filteredData.length / RecordsPerPage);
    
    // Get records for the current page
    const indexOfLastRecord = currentPage * RecordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - RecordsPerPage;
    const currentRecords = filteredData.slice(indexOfFirstRecord, indexOfLastRecord);

    // Handle Pagination
    const nextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const goToPage = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
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

    return (
        <div className="featured-build-section">
            {/* Header Section */}
            <div className="featured-build-header">
                <div className="container">
                    <h1 className="main-title">FEATURED BUILD</h1>
                    <p className="subtitle">Discover our latest custom vehicle builds and modifications</p>
                </div>
            </div>

            {/* Filters and Sorting Section */}
            <div className="filters-section">
                <div className="container">
                    <div className="filters-container">
                        <div className="filter-group">
                            <label htmlFor="categoryFilter">Category:</label>
                            <select 
                                id="categoryFilter"
                                value={filterCategory} 
                                onChange={(e) => setFilterCategory(e.target.value)}
                                className="form-select"
                            >
                                {categories.map((category, index) => (
                                    <option key={index} value={category}>
                                        {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-group">
                            <label htmlFor="colorFilter">Color:</label>
                            <select 
                                id="colorFilter"
                                value={filterColor} 
                                onChange={(e) => setFilterColor(e.target.value)}
                                className="form-select"
                            >
                                {colors.map((color, index) => (
                                    <option key={index} value={color}>
                                        {color === 'all' ? 'All Colors' : color.charAt(0).toUpperCase() + color.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="filter-group">
                            <label htmlFor="sortBy">Sort By:</label>
                            <select 
                                id="sortBy"
                                value={sortBy} 
                                onChange={(e) => setSortBy(e.target.value)}
                                className="form-select"
                            >
                                <option value="title">Title</option>
                                <option value="category">Category</option>
                                <option value="released">Release Date</option>
                                <option value="color">Color</option>
                            </select>
                        </div>

                        <div className="filter-group">
                            <label htmlFor="sortOrder">Order:</label>
                            <select 
                                id="sortOrder"
                                value={sortOrder} 
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="form-select"
                            >
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Info */}
            <div className="results-info">
                <div className="container">
                    <p className="results-count">
                        Showing {filteredData.length} of {featuredBuild.length} builds
                    </p>
                </div>
            </div>

            {/* Builds Grid Section */}
            <div className="builds-grid-section">
                <div className="container">
                    {currentRecords.length > 0 ? (
                        <div className="builds-grid">
                            {currentRecords.map((build, index) => (
                                <div key={build.id} className="build-card">
                                    <Link to={`/project-build/${build.id}`} className="build-link">
                                        <div className="build-image-container">
                                            {build.images && build.images.length > 0 ? (
                                                <img 
                                                    src={`/assets/images/featured-project/${build.images[0].imgSrc}`} 
                                                    className="build-image" 
                                                    alt={build.title} 
                                                />
                                            ) : (
                                                <div className="no-image-placeholder">
                                                    <i className="fas fa-car"></i>
                                                </div>
                                            )}
                                            <div className="build-overlay">
                                                <div className="build-category">{build.category}</div>
                                            </div>
                                        </div>
                                        
                                        <div className="build-content">
                                            <h3 className="build-title">{build.title}</h3>
                                            <div className="build-meta">
                                                <span className="build-date">
                                                    <i className="fas fa-calendar-alt"></i>
                                                    {build.released}
                                                </span>
                                                <span className="build-color">
                                                    <i className="fas fa-palette"></i>
                                                    {build.color}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="no-builds">
                            <div className="no-builds-content">
                                <i className="fas fa-car fa-3x mb-3"></i>
                                <h3>No Builds Found</h3>
                                <p>Try adjusting your filters to see more results.</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Pagination Section */}
            {totalPages > 1 && (
                <div className="pagination-section">
                    <div className="container">
                        <div className="pagination-container">
                            <button 
                                onClick={prevPage} 
                                disabled={currentPage === 1} 
                                className="pagination-btn pagination-prev"
                            >
                                <i className="fas fa-chevron-left"></i> Previous
                            </button>
                            
                            <div className="page-numbers">
                                {getPageNumbers().map((pageNumber, index) => (
                                    <button
                                        key={index}
                                        onClick={() => typeof pageNumber === 'number' && goToPage(pageNumber)}
                                        className={`page-number ${pageNumber === currentPage ? 'active' : ''} ${typeof pageNumber === 'string' ? 'dots' : ''}`}
                                        disabled={typeof pageNumber === 'string'}
                                    >
                                        {pageNumber}
                                    </button>
                                ))}
                            </div>
                            
                            <button 
                                onClick={nextPage} 
                                disabled={currentPage === totalPages} 
                                className="pagination-btn pagination-next"
                            >
                                Next <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                        
                        <div className="pagination-info">
                            <span>Page {currentPage} of {totalPages}</span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default FeaturedBuild