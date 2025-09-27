import React, { useState } from 'react'
import axiosInstance  from './../../../../axios';

import { Link } from 'react-router-dom'

import './../../../../assets/css/service-center/after-care.css'
import servicesData from './../../../../assets/json/services.json'

function AfterCare() {
  const [cart, setCart] = useState([])
  const [vehicleInfo, setVehicleInfo] = useState({
    vehicleInfo: '',
    email: ''
  })
  const [message, setMessage] = useState({ type: '', text: '', show: false })
  const [isLoading, setIsLoading] = useState(false)

  const showMessage = (type, text) => {
    setMessage({ type, text, show: true })
    // Auto-hide message after 10 seconds
    setTimeout(() => {
      setMessage({ type: '', text: '', show: false })
    }, 15000)
  }

  const hideMessage = () => {
    setMessage({ type: '', text: '', show: false })
  }

  const handleServiceSelect = (service) => {
    // Check if service is already in cart
    const isInCart = cart.find(item => item.id === service.id)
    
    if (isInCart) {
      // Remove from cart if already added
      setCart(cart.filter(item => item.id !== service.id))
    } else {
      // Add to cart if not already added
      setCart([...cart, service])
    }
  }

  const removeFromCart = (serviceId) => {
    setCart(cart.filter(item => item.id !== serviceId))
  }

  const calculateSubtotal = () => {
    return cart.reduce((total, service) => {
      // Prices are now integers, so we can add them directly
      return total + service.price;
    }, 0);
  }

  const formatPrice = (amount) => {
    return `₱${amount.toLocaleString()}`
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVehicleInfo(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      console.log('No services in cart to submit');
      return;
    }
    // Set loading state
    setIsLoading(true);

    let vehicle_info = vehicleInfo.vehicleInfo
    let email_add = vehicleInfo.email
    let total_items = cart.length
    let subtotal = formatPrice(calculateSubtotal())

    // Add cart items to payload
    let cart_items = cart.map((service, index) => ({
      id: service.id,
      title: service.title,
      subtitle: service.subtitle,
      price: formatPrice(service.price)
    }))

    const payload = {
      method: "checkout-services",
      vehicle_info: vehicle_info,
      email_add: email_add,
      total_items: total_items,
      subtotal: subtotal,
      cart_items: cart_items
    }

    try {

        let res = await axiosInstance.post('checkout-services', payload, {headers: { "Content-Type": "application/json" },})
        let status_code = res.data.status_code
        let title = res.data.status
        let message = res.data.message

        if (status_code == 200) {
            // Success - Show success message and reset form
            showMessage('success', message || "Your service request has been submitted successfully!");
            
            // Reset form and cart
            setVehicleInfo({
                vehicleInfo: '',
                email: ''
            });
            setCart([]);
            
        } else if (status_code == 422) {
            // Validation error - Show error message without resetting form
            showMessage('error', message || "Please check the form and make sure all the information is valid.");
            return false;
        } else {
            // Other errors - Show error message without resetting form
            showMessage('error', message || "An error occurred. Please try again.");
            return false;
        }
      } catch (err) {
        // Network or other errors - Show error message without resetting form
        let errorMessage = "An error occurred. Please try again.";
        if (err.response && err.response.data && err.response.data.errors) {
            errorMessage = "Please check the form and make sure all the information is valid.";
        }
        
        showMessage('error', errorMessage);
        return false;
      } finally {
        // Always reset loading state
        setIsLoading(false);
      }
  }

  return (
    <div className="aftercare-container">
      {/* Custom Message Display */}
      {message.show && (
        <div className={`custom-message ${message.type}`}>
          <div className="message-content">
            <span className="message-text">{message.text}</span>
            <button className="message-close" onClick={hideMessage}>×</button>
          </div>
        </div>
      )}

      {/* Page Title */}
      <div className="page-title-section">
        <h1 className="page-title">OUR SERVICES</h1>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Side - Services List */}
        <div className="services-list-section">
          <div className="services-list">
            {servicesData.map((service) => {
              const isInCart = cart.find(item => item.id === service.id)
              return (
                <div 
                  key={service.id} 
                  className={`service-item ${isInCart ? 'selected' : ''}`}
                  onClick={() => handleServiceSelect(service)}
                >
                  <div className="service-icon-container">
                    <img 
                      src={`/assets/images/logo/services_ico/${service.icon}`}
                      alt={service.title}
                      className="service-icon"
                      onError={(e) => {
                        console.error(`Failed to load image: ${service.icon}`);
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="service-content">
                    <div className="service-header">
                      <h3 className="service-title">{service.title}</h3>
                      <span className="service-price">{formatPrice(service.price)}</span>
                    </div>
                    <p className="service-subtitle">{service.subtitle}</p>
                    <p className="service-description">{service.description}</p>
                    <div className="service-actions">
                      <button className="add-to-cart-btn">
                        {isInCart ? 'REMOVE FROM CART' : 'ADD TO CART'}
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Side - Service Details */}
        <div className="service-details-section">
          <form onSubmit={handleSubmit} className="service-details-card">
            <div className="vehicle-info">
              <h3>VEHICLE & CONTACT INFORMATION</h3>
              
              <div className="form-group">
                <label htmlFor="vehicleInfo">Vehicle Info *</label>
                <input
                  type="text"
                  id="vehicleInfo"
                  name="vehicleInfo"
                  value={vehicleInfo.vehicleInfo}
                  onChange={handleInputChange}
                  placeholder="Toyota Vios, 2024"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={vehicleInfo.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  required
                  className="form-input"
                />
              </div>
            </div>
            
            {/* Cart Items */}
            {cart.length > 0 ? (
              <div className="cart-items">
                {cart.map((service) => (
                  <div key={service.id} className="cart-item">
                    <div className="cart-item-icon-container">
                      <img 
                        src={`/assets/images/logo/services_ico/${service.icon}`}
                        alt={service.title}
                        className="cart-item-icon"
                        onError={(e) => {
                          console.error(`Failed to load image: ${service.icon}`);
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                    <div className="cart-item-content">
                      <h4 className="cart-item-title">{service.title}</h4>
                      <p className="cart-item-subtitle">{service.subtitle}</p>
                      <span className="cart-item-price">{formatPrice(service.price)}</span>
                    </div>
                    <button 
                      type="button"
                      className="remove-item-btn"
                      onClick={() => removeFromCart(service.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="empty-cart">
                <p>No services selected. Click "ADD TO CART" to select services.</p>
              </div>
            )}

            <div className="cart-summary">
              <div className="subtotal-line">
                <span>SUBTOTAL ({cart.length} ITEM{cart.length !== 1 ? 'S' : ''})</span>
                <span className="subtotal-amount">
                  {cart.length > 0 ? formatPrice(calculateSubtotal()) : '₱0'}
                </span>
              </div>
            </div>

            <div className="checkout-section">
              <button 
                type="submit"
                className={`checkout-btn ${cart.length === 0 ? 'disabled' : ''}`}
                disabled={cart.length === 0 || isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    <span className="checkout-text">PROCESSING...</span>
                  </>
                ) : (
                  <>
                    <span className="checkout-price">
                      {cart.length > 0 ? formatPrice(calculateSubtotal()) : '₱0'}
                    </span>
                    <span className="checkout-text">CHECK OUT</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AfterCare