import React, { useState } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventName: 'TEDx Technology'
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('http://localhost:5000/api/registrations', formData);
      setStatus({ type: 'success', message: 'Ticket secured successfully!' });
      setFormData({ name: '', email: '', eventName: 'TEDx Technology' });
    } catch (error) {
      setStatus({
        type: 'danger',
        message: error.response?.data?.message || 'An error occurred while securing your ticket'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container animate-fade-in delay-1">
      <div className="glass form-container">
        <h2 className="form-title">Get Tickets</h2>
        
        {status.message && (
          <div className={`alert alert-${status.type}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="eventName">TEDx Event</label>
            <select
              id="eventName"
              name="eventName"
              className="form-control"
              value={formData.eventName}
              onChange={handleChange}
              required
            >
              <option value="TEDx Technology">TEDx Technology: The Future is Now</option>
              <option value="TEDx Design">TEDx Design: Rethinking Spaces</option>
              <option value="TEDx Science">TEDx Science: Uncharted Territories</option>
              <option value="TEDx Humanities">TEDx Humanities: The Global Village</option>
            </select>
          </div>

          <button 
            type="submit" 
            className="btn btn-primary form-submit"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Secure Ticket'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
