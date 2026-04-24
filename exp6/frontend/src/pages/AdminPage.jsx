import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchRegistrations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/registrations');
      setRegistrations(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch tickets. Ensure backend is running.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegistrations();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to cancel this ticket?')) {
      try {
        await axios.delete(`http://localhost:5000/api/registrations/${id}`);
        setRegistrations(registrations.filter(reg => reg._id !== id));
      } catch (err) {
        alert('Failed to cancel ticket');
      }
    }
  };

  return (
    <div className="container animate-fade-in delay-2 admin-container">
      <div className="glass" style={{ padding: '3rem' }}>
        <div className="admin-header">
          <h2>Ticket Management</h2>
          <button onClick={fetchRegistrations} className="btn btn-outline">
            Refresh
          </button>
        </div>

        {error && <div className="alert alert-danger">{error}</div>}

        {loading ? (
          <p>Loading tickets...</p>
        ) : registrations.length === 0 ? (
          <p>No tickets found.</p>
        ) : (
          <div className="table-wrapper">
            <table className="table">
              <thead>
                <tr>
                  <th>Attendee Name</th>
                  <th>Email</th>
                  <th>TEDx Event</th>
                  <th>Date Purchased</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {registrations.map((reg) => (
                  <tr key={reg._id}>
                    <td>{reg.name}</td>
                    <td>{reg.email}</td>
                    <td>{reg.eventName}</td>
                    <td>{new Date(reg.createdAt).toLocaleDateString()}</td>
                    <td>
                      <button 
                        onClick={() => handleDelete(reg._id)}
                        className="btn btn-danger"
                        style={{ padding: '0.5rem 1rem', fontSize: '0.85rem' }}
                      >
                        Cancel Ticket
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
