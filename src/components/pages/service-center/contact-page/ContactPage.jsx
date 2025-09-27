import React, { useState } from 'react';
import axiosInstance  from './../../../../axios';

import './../../../../assets/css/service-center/contact-page.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    method: 'schedule-appointment',
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email_add: '',
    plateNumber: '',
    appointmentDate: '',
    preferredTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '', show: false });

  const showMessage = (type, text) => {
    setMessage({ type, text, show: true });
    // Auto-hide message after 15 seconds
    setTimeout(() => {
      setMessage({ type: '', text: '', show: false });
    }, 15000);
  };

  const hideMessage = () => {
    setMessage({ type: '', text: '', show: false });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    console.log('Form submission started with data:', formData);
    setIsSubmitting(true);
    setMessage({ type: '', text: '', show: false });

    const payload = {
      method: 'schedule-appointment',
      firstName: formData.firstName,
      lastName: formData.lastName,
      mobileNumber: formData.mobileNumber,
      email_add: formData.email_add,
      plateNumber: formData.plateNumber,
      appointmentDate: formData.appointmentDate,
      preferredTime: formData.preferredTime
    }

    try {
      let res = await axiosInstance.post('schedule-appointment', payload, {
        headers: { "Content-Type": "application/json" },
      });
      let status_code = res.data.status_code;
      let title = res.data.status;
      let message = res.data.message;

      if (status_code == 200) {
        // Success - Show success message and reset form
        showMessage('success', message || "Your appointment has been scheduled successfully!");
        
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          mobileNumber: '',
          email: '',
          plateNumber: '',
          appointmentDate: '',
          preferredTime: ''
        });
        
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
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-container">
      {/* Custom Message Display */}
      {message.show && (
        <div className={`custom-message ${message.type}`}>
          <div className="message-content">
            <span className="message-text">{message.text}</span>
            <button className="message-close" onClick={hideMessage}>×</button>
          </div>
        </div>
      )}

      <div className="container-fluid">
        <div className="row">
          {/* Contact Form Section - Full Width */}
          <div className="col-12">
            <div className="contact-form-section">
              <h2 className="form-title">Please fill-in the following details to complete your appointment:</h2>
              
              <form onSubmit={handleSubmit} className="appointment-form">
                {/* Personal Details */}
                <div className="form-section">
                  <h3 className="section-title">Personal Details</h3>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="firstName">First name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="lastName">Last name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="mobileNumber">Mobile number</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="mobileNumber"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email_add"
                          name="email_add"
                          value={formData.email_add}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="plateNumber">Plate Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="plateNumber"
                          name="plateNumber"
                          value={formData.plateNumber}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedule Appointment */}
                <div className="form-section">
                  <h3 className="section-title">Schedule your Appointment</h3>
                  
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="appointmentDate">MM/DD/YY</label>
                        <input
                          type="date"
                          className="form-control"
                          id="appointmentDate"
                          name="appointmentDate"
                          value={formData.appointmentDate}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="preferredTime">Preferred time</label>
                        <input
                          type="time"
                          className="form-control"
                          id="preferredTime"
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button 
                    type="submit" 
                    className="btn btn-primary submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="loading-spinner"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      'Schedule Appointment'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map Section - Below Form */}
          <div className="col-12">
            <div className="map-section">
              <h2 className="map-title">Where are we located?</h2>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.767842177196!2d121.02084822457424!3d14.669112325396688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b6dd2583930f%3A0xa302259b308267ae!2sAutobot%20Autoworks-Offroad!5e0!3m2!1sen!2sph!4v1755888748039!5m2!1sen!2sph"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Autobot Offroad Location"
                ></iframe>
              </div>
              <div className="address-info">
                <p className="address-text">
                  #77 ROAD 20, BRGY. BAHAY TORO PROJECT 8, QUEZON CITY
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
