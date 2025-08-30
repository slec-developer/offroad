import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import merch1 from '../../../../assets/images/merch/merch-1.jpg';
import merch2 from '../../../../assets/images/merch/merch-2.jpg';
import merch3 from '../../../../assets/images/merch/merch-3.jpg';
// import '../../../../assets/css/global.css';
import './MerchPage.css';
// collection images
import LinierCollection from '../../../../assets/images/merch/collection/linear-collection.jpg';
import SunsetConllection from '../../../../assets/images/merch/collection/sunset-collection.png';
import MonoCollection from '../../../../assets/images/merch/collection/mono-collection.jpg';
// Limited edition images
import LimitedEditionMerch1 from '../../../../assets/images/merch/limited-edition-slides/merch1.png';
import LimitedEditionMerch2 from '../../../../assets/images/merch/limited-edition-slides/merch2.png';
import LimitedEditionMerch3 from '../../../../assets/images/merch/limited-edition-slides/merch3.png';
import LimitedEditionMerch4 from '../../../../assets/images/merch/limited-edition-slides/merch4.png';

// Sale products images (placeholder - replace with actual images)
import SaleProduct1 from '../../../../assets/images/merch/sale/pocket-tee-white.png';
import SaleProduct2 from '../../../../assets/images/merch/sale/basic-khaki-front.png';
import SaleProduct3 from '../../../../assets/images/merch/sale/acid-wash-terracota.png';
import SaleProduct4 from '../../../../assets/images/merch/sale/dictionary-hoodie.png';
import BlogImg1 from '../../../../assets/images/merch/blog/advertisement/luminox.png';
import BlogImg2 from '../../../../assets/images/merch/blog/advertisement/autobot-apparel.png';
import SponsorGroup from '../../../../assets/images/merch/blog/advertisement/sponsor-group.png';
import { FaRegCalendarAlt } from 'react-icons/fa';

const collectionItems = [
  {
    id: 1,
    image: LinierCollection,
    title: "LINEAR COLLECTION",
    alt: "Linear Collection"
  },
  {
    id: 2,
    image: SunsetConllection,
    title: "SUNSET COLLECTION",
    alt: "Sunset Collection"
  },
  {
    id: 3,
    image: MonoCollection,
    title: "CLASSIC TEE COLLECTION",
    alt: "Classic Tee Collection"
  }
];

const saleItems = [
  {
    id: 1,
    image: SaleProduct1,
    name: "Pocket Tee - White",
    price: "₱850"
  },
  {
    id: 2,
    image: SaleProduct2,
    name: "Basic Tee - Olive Green",
    price: "₱850"
  },
  {
    id: 3,
    image: SaleProduct3,
    name: "Sunset Drift - Rust",
    price: "₱850"
  },
  {
    id: 4,
    image: SaleProduct4,
    name: "Terno 1.0 - Khaki Green",
    price: "₱1600"
  }
];

const slidesData = [
  {
    id: 1,
    backgroundImage: LimitedEditionMerch1,
    title: "Autobot Strong",
    alt: "Autobot Slide"
  },
  {
    id: 2,
    backgroundImage: LimitedEditionMerch2,
    title: "Strong",
    alt: "Strong Slide"
  },
  {
    id: 3,
    backgroundImage: LimitedEditionMerch3,
    title: "Fueled by God",
    alt: "Fueled by God Slide"
  },
  {
    id: 4,
    backgroundImage: LimitedEditionMerch4,
    title: "Autobot",
    alt: "Autobot Slide"
  }
];

const merchItems = [
  {
    img: merch1,
    title: 'Linear Collection',
    price: '₱1,500',
    description: 'Premium off-road shirt, limited edition.'
  },
  {
    img: merch2,
    title: 'Sunset Drift Collection',
    price: '₱1,200',
    description: 'Comfortable and stylish for any adventure.'
  },
  {
    img: merch3,
    title: 'Mono Collection',
    price: '₱1,000',
    description: 'Classic monochrome design for enthusiasts.'
  },
];

const blogPosts = [
  {
    id: 1,
    date: 'March 4, 2025',
    title: 'Luminox x Autobot Offroad: Time Meets Terrain',
    description: 'When precision meets performance, the result is unstoppable adventure. The Luminox x Autobot Offroad collaboration brings together Swiss-made rugged durability and offroad unstoppable spirit, built for those who conquer both time and terrain.',
    image: BlogImg1
  },
  {
    id: 2,
    date: 'March 4, 2025',
    title: 'Autobot Offroad x Jethro Olba: CHAMP COLLECTION',
    description: 'Champions are built, not born. The A CHAMP COLLECTION by Jethro Olba is a statement of grit, passion, and relentless pursuit of excellence—on and off the track. In collaboration with LINEAR and Autobot Offroad, this exclusive drop fuses streetwear, motorsports, and overland culture into a collection designed for those who never settle.',
    image: BlogImg2
  }
];

// const [email, setEmail] = useState('');

// const handleSubmit = (e) => {
//   e.preventDefault();
//   // Handle email subscription logic here
//   console.log('Email submitted:', email);
// };

const MerchPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    // <div className="container-fluid" style={{ minHeight: '100vh', background: '#f8f8f8' }}>
    //   <div className="section_tittle_div">
    //     <h1>Merchandise</h1>
    //   </div>
    //   <div className="row justify-content-center" style={{ gap: '2rem' }}>
    //     {merchItems.map((item, idx) => (
    //       <div key={idx} className="col-12 col-md-4 d-flex flex-column align-items-center p-4" style={{ background: '#fff', borderRadius: '16px', boxShadow: '0 2px 12px rgba(0,0,0,0.07)', maxWidth: 350 }}>
    //         <img src={item.img} alt={item.title} style={{ width: '100%', borderRadius: '12px', marginBottom: '1rem', objectFit: 'cover', height: 300 }} />
    //         <h3 style={{ fontWeight: 700 }}>{item.title}</h3>
    //         <p className="orange-color" style={{ fontSize: '1.2rem', fontWeight: 600 }}>{item.price}</p>
    //         <p style={{ color: '#555', fontSize: '1rem', textAlign: 'center' }}>{item.description}</p>
    //         <button className="btn btn-dark mt-2" disabled>Coming Soon</button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  <div className="merch-page home bg-white">
    <section className="hero">
    </section>
    <section className="featured-grid">
    <div className="hero-content text-dark">
        <h1>Autobot Offroad Limited Drop</h1>
        <p>{ "This is it - catch these before you give up on the next ahead and be proud to tell at nearby (insert time) we're dropping our next back Autobot Offroad proudly would be proud to present." }</p>
        <form className="subscribe-form">
          <input
            type="email"
            placeholder="Email"
            required
          />
          <button>Subscribe</button>
        </form>
      </div>
      <div className="container">
        <div className="grid-container">
          {collectionItems.map((item) => (
            <button
              key={item.id}
              className="grid-item collection-btn"
              type="button"
              onClick={() => alert(`Clicked: ${item.title}`)}
              style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
            >
              <img src={item.image} alt={item.alt} />
              <div className="collection-overlay">
                <h3>{item.title}</h3>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>

    <section className="limited-slides" style={{
      backgroundImage: `url(${slidesData[currentSlide].backgroundImage})`
    }}>
      <div className="slides-container">
        <div className="slides-carousel">
          <div className="slide">
            <div className="slide-content">
              <div className="slides-overlay">
                <h2>Limited Edition Slides</h2>
                <p>Where innovation meets adventure. Autobot Autoworks is the ultimate destination for off-road modifications, turning SUVs and 4x4s into unstoppable beasts. From full-build transformations to top-tier custom paint and detailing, we make sure your rig is always adventure-ready—on and off the road.</p>
                <Link to="/merch/shop-all" className="more-btn" style={{ textDecoration: 'none'}}>More</Link>
              </div>
            </div>
          </div>
        </div>

        <button className="nav-arrow nav-prev" onClick={prevSlide}>
          <span>‹</span>
        </button>
        <button className="nav-arrow nav-next" onClick={nextSlide}>
          <span>›</span>
        </button>

        <div className="pagination-dots">
          {slidesData.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>

    <section className="sale-section">
      <div className="container">
        <h2 className="sale-heading">SALE</h2>
        <div className="sale-products">
          {saleItems.map((item) => (
            <div key={item.id} className="sale-product">
              <img src={item.image} alt={item.name} className="product-image" />
              <h3 className="product-name">{item.name}</h3>
              <p className="product-price">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section className="hero1">
    </section>

    <section className="blog-section">
      <div className="container">
        <h2 className="blog-heading">BLOG</h2>
        <div className="blog-list">
          {blogPosts.map((post) => (
            <div key={post.id} className="blog-post-row">
              <div className="blog-date-col">
                <FaRegCalendarAlt className="blog-date-icon" />
                <span className="blog-date">{post.date}</span>
              </div>
              <div className="blog-content-col">
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-desc">{post.description}</p>
              </div>
              <div className="blog-image-col">
                <img src={post.image} alt={post.title} className="blog-image" />
              </div>
            </div>
          ))}
        </div>
        <div className="blog-pagination">
          &lt; Page 1, 2, 3, 4, 5, 6 &gt;
        </div>
        <div className="blog-collab">
          <span>COLLABORATION WITH</span>
          <div className="blog-collab-logos">
            <img src={SponsorGroup} alt="Sponsor Group" />
          </div>
        </div>
      </div>
    </section>
  </div>

  );
};

export default MerchPage; 