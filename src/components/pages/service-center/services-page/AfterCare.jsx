import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './../../../../assets/css/service-center/after-care.css'
import servicesData from './../../../../assets/json/services.json'

function AfterCare() {
  const [selectedService, setSelectedService] = useState(servicesData[0])

  const handleServiceSelect = (service) => {
    setSelectedService(service)
  }

  return (
    <div className="aftercare-container">
      {/* Page Title */}
      <div className="page-title-section">
        <h1 className="page-title">OUR SERVICES</h1>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Side - Services List */}
        <div className="services-list-section">
          <div className="services-list">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className={`service-item ${selectedService.id === service.id ? 'selected' : ''}`}
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
                    <span className="service-price">{service.price}</span>
                  </div>
                  <p className="service-subtitle">{service.subtitle}</p>
                  <p className="service-description">{service.description}</p>
                  <div className="service-actions">
                    <button className="add-to-cart-btn">
                      {selectedService.id === service.id ? 'ADDED TO CART' : 'ADD TO CART'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Service Details */}
        <div className="service-details-section">
          <div className="service-details-card">
            <div className="vehicle-info">
              <h3>VEHICLE: TOYOTA VIOS 2024 GAS</h3>
            </div>
            
            {selectedService && (
              <div className="selected-service">
                <div className="selected-service-icon-container">
                  <img 
                    src={`/assets/images/logo/services_ico/${selectedService.icon}`}
                    alt={selectedService.title}
                    className="selected-service-icon"
                    onError={(e) => {
                      console.error(`Failed to load image: ${selectedService.icon}`);
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
                <div className="selected-service-content">
                  <h4 className="selected-service-title">{selectedService.title}</h4>
                  <p className="selected-service-subtitle">{selectedService.subtitle}</p>
                  <span className="selected-service-price">{selectedService.price}</span>
                </div>
              </div>
            )}

            <div className="cart-summary">
              <div className="subtotal-line">
                <span>SUBTOTAL (1 ITEM)</span>
                <span className="subtotal-amount">{selectedService?.price}</span>
              </div>
            </div>

            <div className="checkout-section">
              <button className="checkout-btn">
                <span className="checkout-price">{selectedService?.price}</span>
                <span className="checkout-text">CHECK OUT</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AfterCare