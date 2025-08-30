import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar, FaMinus, FaPlus } from 'react-icons/fa';
import './MerchItem.css';

// Product images
import mainImage from '../../../../assets/images/merch/merch-item/classic-tee-black/classic-tee-black.png';
import thumb1 from '../../../../assets/images/merch/merch-item/classic-tee-black/classic-tee-black1.png';
import thumb2 from '../../../../assets/images/merch/merch-item/classic-tee-black/classic-tee-black2.png';
import thumb3 from '../../../../assets/images/merch/merch-item/classic-tee-black/classic-tee-black3.png';

// Recommendation images
import rec1 from '../../../../assets/images/merch/recommendation/hoodie-khaki.png';
import rec2 from '../../../../assets/images/merch/recommendation/sweat-pants-khaki.png';
import rec3 from '../../../../assets/images/merch/recommendation/set-the-bar-high-black.png';
import rec4 from '../../../../assets/images/merch/recommendation/autobot-strong.png';

const MerchItem = () => {
  const [selectedColor, setSelectedColor] = useState('black');
  const [selectedSize, setSelectedSize] = useState('L');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(mainImage);

  const colors = [
    { name: 'black', hex: '#000000' },
    { name: 'maroon', hex: '#800000' }
  ];

  const sizes = ['S', 'M', 'L', 'XL', '2XL'];

  const recommendations = [
    { id: 1, image: rec1, name: 'Pocket Tee - White', price: '₱850' },
    { id: 2, image: rec2, name: 'Pocket Tee - White', price: '₱850' },
    { id: 3, image: rec3, name: 'Pocket Tee - White', price: '₱850' },
    { id: 4, image: rec4, name: 'Pocket Tee - White', price: '₱680' }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Trixie Manuel',
      date: '05/11/25',
      rating: 5,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
      id: 2,
      name: 'John Doe',
      date: '05/10/25',
      rating: 5,
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
  ];

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="merch-item-wrapper">
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">HOME</Link>
        <span> / </span>
        <Link to="/merchant/shop-all">CLASSIC TEE COLLECTION</Link>
        <span> / </span>
        <span className="current">CLASSIC TEE BLACK</span>
      </div>

      {/* Product Section */}
      <div className="product-section">
        <div className="product-images">
          <div className="thumbnail-images">
            <img 
              src={thumb1} 
              alt="Classic Tee Black Front" 
              className="thumbnail"
              onMouseEnter={() => setSelectedImage(thumb1)}
              onMouseLeave={() => setSelectedImage(mainImage)}
            />
            <img 
              src={thumb2} 
              alt="Classic Tee Black Side" 
              className="thumbnail"
              onMouseEnter={() => setSelectedImage(thumb2)}
              onMouseLeave={() => setSelectedImage(mainImage)}
            />
            <img 
              src={thumb3} 
              alt="Classic Tee Black Back" 
              className="thumbnail"
              onMouseEnter={() => setSelectedImage(thumb3)}
              onMouseLeave={() => setSelectedImage(mainImage)}
            />
          </div>
          <div className="main-image">
            <img src={selectedImage} alt="Classic Tee Black" />
          </div>
        </div>

        <div className="product-details">
          <h1 className="product-title">CLASSIC TEE - BLACK</h1>
          
          <p className="product-description">
            Built for adventure, designed for style. The Autobot Offroad Classic Tee in stealth black features a black-on-black silkscreen logo, giving it a sleek, minimalist look that blends seamlessly with the premium fabric. Whether you're hitting the trails or the streets, this tee delivers all-day comfort and rugged style.
          </p>

          <div className="product-price">₱ 900</div>

          {/* Color Selection */}
          <div className="product-option">
            <label>Color:</label>
            <div className="color-options">
              {colors.map(color => (
                <button
                  key={color.name}
                  className={`color-option ${selectedColor === color.name ? 'selected' : ''}`}
                  onClick={() => setSelectedColor(color.name)}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
            <span className="selected-color-text">{selectedColor}</span>
          </div>

          {/* Product Specs */}
          <div className="product-specs">
            <div className="spec-item">
              <strong>Color:</strong> Black
            </div>
            <div className="spec-item">
              <strong>Material:</strong> Soft, breathable cotton blend
            </div>
            <div className="spec-item">
              <strong>Fit:</strong> Regular fit for everyday wear
            </div>
            <div className="spec-item">
              <strong>Design:</strong> Black silkscreen logo for a subtle, stealthy aesthetic
            </div>
          </div>

          {/* Size Selection */}
          <div className="product-option">
            <label>Size:</label>
            <div className="size-options">
              {sizes.map(size => (
                <button
                  key={size}
                  className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
            <Link to="/size-chart" className="size-chart-link">SIZE CHART</Link>
          </div>

          {/* Quantity */}
          {/* <div className="product-option">
            <label>Quantity:</label>
            <div className="quantity-selector">
              <button onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                <FaMinus />
              </button>
              <input type="number" value={quantity} readOnly />
              <button onClick={() => handleQuantityChange(1)} disabled={quantity >= 10}>
                <FaPlus />
              </button>
            </div>
          </div> */}

          {/* Action Buttons */}
          <div className="action-buttons">
            {/* <button className="btn-add-cart">ADD TO CART</button> */}
              <button className="btn-buy-now">  <a 
              href="https://shopee.ph/Autobot-Merchandise-T-Shirt-Basic-Tee-Oversized-fit-i.137247578.24215865220" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'white'}}
              >BUY NOW!
              </a>
            </button>
       
          </div>

          {/* Payment Methods */}
          <div className="payment-methods">
            <span>We accept</span>
            <div className="payment-logos">
              <div className="payment-logo">GC</div>
              <div className="payment-logo">PP</div>
              <div className="payment-logo">MC</div>
              <div className="payment-logo">VISA</div>
              <div className="payment-logo">GC</div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2>REVIEWS</h2>
        
        <div className="reviews-summary">
          <p>Select a row below to filter reviews.</p>
          
          <div className="rating-distribution">
            <div className="rating-bar">
              <span>5 Stars</span>
              <div className="bar-fill" style={{ width: '100%' }}></div>
            </div>
            <div className="rating-bar">
              <span>4 Stars</span>
              <div className="bar-fill" style={{ width: '20%' }}></div>
            </div>
            <div className="rating-bar">
              <span>3 Stars</span>
              <div className="bar-fill" style={{ width: '10%' }}></div>
            </div>
            <div className="rating-bar">
              <span>2 Stars</span>
              <div className="bar-fill" style={{ width: '5%' }}></div>
            </div>
            <div className="rating-bar">
              <span>1 Star</span>
              <div className="bar-fill" style={{ width: '5%' }}></div>
            </div>
          </div>

          <div className="overall-rating">
            <span>Overall Rate: 5.0</span>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="star-filled" />
              ))}
            </div>
          </div>

          <div className="review-this">
            <span>Review this product</span>
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <FaRegStar key={i} className="star-outline" />
              ))}
            </div>
          </div>

          <p className="review-note">Adding a review will require a valid email for verification.</p>
        </div>

        <div className="reviews-list">
          {reviews.map(review => (
            <div key={review.id} className="review-item">
              <div className="review-header">
                <div className="reviewer-avatar"></div>
                <div className="reviewer-info">
                  <div className="reviewer-name">{review.name}</div>
                  <div className="review-date">{review.date}</div>
                </div>
                <div className="review-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="star-filled" />
                  ))}
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>

        <div className="reviews-pagination">
          <span>&lt; Page 1,2,3,4,5,6 &gt;</span>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="recommendations-section">
        <h2>RECOMMENDATION</h2>
        <div className="recommendations-grid">
          {recommendations.map(item => (
            <div key={item.id} className="recommendation-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p className="price">{item.price}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MerchItem;
