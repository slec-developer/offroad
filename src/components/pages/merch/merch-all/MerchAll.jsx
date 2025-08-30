import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import './MerchAll.css';

// Images (reuse existing merch assets)
import merch1 from '../../../../assets/images/merch/merch-1.jpg';
import merch2 from '../../../../assets/images/merch/merch-2.jpg';
import merch3 from '../../../../assets/images/merch/merch-3.jpg';

import linearCollection from '../../../../assets/images/merch/collection/linear-collection.jpg';
import sunsetCollection from '../../../../assets/images/merch/collection/sunset-collection.png';
import monoCollection from '../../../../assets/images/merch/collection/mono-collection.jpg';

import sale1 from '../../../../assets/images/merch/sale/pocket-tee-white.png';
import sale2 from '../../../../assets/images/merch/sale/basic-khaki-front.png';
import sale3 from '../../../../assets/images/merch/sale/acid-wash-terracota.png';
import sale4 from '../../../../assets/images/merch/sale/dictionary-hoodie.png';

import limited1 from '../../../../assets/images/merch/limited-edition-slides/merch1.png';
import limited2 from '../../../../assets/images/merch/limited-edition-slides/merch2.png';
import limited3 from '../../../../assets/images/merch/limited-edition-slides/merch3.png';
import limited4 from '../../../../assets/images/merch/limited-edition-slides/merch4.png';

const allMerchItems = [
  { id: 'lc-1', name: 'Roam Free Project Secret Weapon - Green', price: '₱950', image: linearCollection },
  { id: 'lc-2', name: 'Roam Free Project SEMA - Black', price: '₱950', image: merch2 },
  { id: 'lc-3', name: 'Classic Tee - Green', price: '₱850', image: merch1 },
  { id: 'lc-4', name: 'Since 97 - Black', price: '₱950', image: merch3 },
  { id: 'sd-1', name: 'Sunset Drift - Chill Vibes - Pistachio', price: '₱950', image: sale1 },
  { id: 'sd-2', name: 'Sunset Drift - Earth Line - Brown', price: '₱950', image: sale2 },
  { id: 'sd-3', name: 'Sunset Drift Pocket Heart - Terracotta', price: '₱900', image: sale3 },
  { id: 'sd-4', name: 'Terno 1.0 Hoodie - Khaki', price: '₱1,600', image: sale4 },
  { id: 'te-1', name: 'Terno 1.0 Jogging Pants - Khaki', price: '₱1,200', image: monoCollection },
  { id: 'sl-1', name: 'Autobot Strong Slides', price: '₱750', image: limited1 },
  { id: 'sl-2', name: 'Strong Slides', price: '₱750', image: limited2 },
  { id: 'sl-3', name: 'Fueled by God Slides', price: '₱750', image: limited3 },
  { id: 'sl-4', name: 'Autobot Slides', price: '₱750', image: limited4 },
  { id: 'col-1', name: 'Linear Collection Tee', price: '₱1,500', image: linearCollection },
  { id: 'col-2', name: 'Sunset Collection Tee', price: '₱1,200', image: sunsetCollection },
  { id: 'col-3', name: 'Mono Collection Tee', price: '₱1,000', image: monoCollection },
];

function MerchAll() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // show up to 10 items per page

  const totalPages = Math.ceil(allMerchItems.length / itemsPerPage);

  const visibleItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return allMerchItems.slice(start, start + itemsPerPage);
  }, [currentPage]);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="merch-all-wrapper container">
      <div className="merch-all-breadcrumb">
        <Link to="/">HOME</Link>
        <span> / </span>
        <span className="current">SHOP ALL</span>
      </div>

      <h1 className="merch-all-title">SHOP ALL</h1>

      <div className="merch-grid">
        {visibleItems.map(item => (
          <Link key={item.id} to={`/merch/item/${item.id}`} className="merch-card" style={{ textDecoration: 'none', color: 'black'}}>
            <div className="img-wrap">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="merch-info">
              <h3 className="merch-name">{item.name}</h3>
              <div className="merch-price">{item.price}</div>
              <div className="merch-availability">Available in-store</div>
            </div>
          </Link>
        ))}
      </div>

      <nav className="merch-pagination" aria-label="Merch pagination">
        <button
          className="page-btn simple"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >&lt;</button>
        <span className="page-label">Page</span>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum, idx, arr) => (
          <span key={pageNum} className="page-item">
            <button
              className={`page-link ${pageNum === currentPage ? 'active' : ''}`}
              onClick={() => goToPage(pageNum)}
              aria-current={pageNum === currentPage ? 'page' : undefined}
            >
              {pageNum}
            </button>
            {idx !== arr.length - 1 && <span className="comma">,</span>}
          </span>
        ))}
        <button
          className="page-btn simple"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >&gt;</button>
      </nav>
    </div>
  );
}

export default MerchAll;


