import React, { useState } from 'react';
import './../../../../assets/css/service-center/contact-page.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    plateNumber: '',
    appointmentDate: '',
    preferredTime: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(''); // 'success' or 'error'

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
    setSubmitMessage('');
    setSubmitStatus('');

    try {
      console.log('Sending request to PHP endpoint...');
      const response = await fetch('http://localhost/aikee/autobot/autobot-emailer/send-appointment-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // tell PHP we send JSON
        },
        body: JSON.stringify(formData),
      });

      console.log('Response received:', response);
      console.log('Response status:', response.status);
      console.log('Response headers:', response.headers);

      // Check if response is ok before trying to parse JSON
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Response JSON:', result);

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(result.message || 'Your appointment request has been sent successfully!');
        console.log('Email sent successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          mobileNumber: '',
          email: '',
          plateNumber: '',
          appointmentDate: '',
          preferredTime: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to send appointment request.');
        console.error('Email sending failed:', result.message);
      }
    } catch (error) {
      console.error('Network or parsing error:', error);
      setSubmitStatus('error');
      setSubmitMessage('Network error. Please check your connection and try again. Error: ' + error.message);
    } finally {
      setIsSubmitting(false);
      console.log('Form submission completed');
    }
  };


  return (
    <div className="contact-page-container">
      <div className="container-fluid">
        <div className="row">
          {/* Contact Form Section - Full Width */}
          <div className="col-12">
            <div className="contact-form-section">
              <h2 className="form-title">Please fill-in the following details to complete your appointment:</h2>
              
              {/* Submit Message Display */}
              {submitMessage && (
                <div className={`alert ${submitStatus === 'success' ? 'alert-success' : 'alert-danger'} mt-3`} role="alert">
                  {submitMessage}
                </div>
              )}
              
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
                          id="email"
                          name="email"
                          value={formData.email}
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
                    {isSubmitting ? 'Sending...' : 'Schedule Appointment'}
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
