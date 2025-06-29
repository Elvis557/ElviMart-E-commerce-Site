import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Account() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Dashboard');
  const profileImage = localStorage.getItem('profileImage') || "https://i.pravatar.cc/40?img=3";
  const [addresses, setAddresses] = useState(() => {
    const saved = localStorage.getItem('userAddresses');
    return saved ? JSON.parse(saved) : [];
  });
  const [newAddress, setNewAddress] = useState('');

  const handleAddAddress = () => {
    if (newAddress.trim()) {
      const updated = [...addresses, newAddress];
      setAddresses(updated);
      localStorage.setItem('userAddresses', JSON.stringify(updated));
      setNewAddress('');
    }
  };
  
  const handleDeleteAddress = (index) => {
    const updated = addresses.filter((_, i) => i !== index);
    setAddresses(updated);
    localStorage.setItem('userAddresses', JSON.stringify(updated));
  };
  


  const handleLogout = () => {
    localStorage.removeItem('userId');
    navigate('/login');
  };

  const menuItems = [
    { label: 'Dashboard', icon: 'bi-grid-1x2' },
    { label: 'Orders', icon: 'bi-bag-check' },
    { label: 'Addresses', icon: 'bi-geo-alt-fill' },
    { label: 'Account Details', icon: 'bi-person-circle' },
    { label: 'Wishlist', icon: 'bi-heart-fill' },
  ];

  return (
    <div
      style={{
        background: 'linear-gradient(120deg, #dbeeff, #f8fcff)',
        minHeight: '100vh',
        padding: '60px 20px',
      }}
    >
      <div className="container">
        <div className="text-center mb-5">
          <img
            src={profileImage}
            alt="ElviMart Logo"
            style={{
              width: '90px',
              height: '90px',
              objectFit: 'cover',
              backgroundColor: '#fff',
              padding: '8px',
              borderRadius: '50%',
              boxShadow: '0 4px 12px rgba(0, 123, 255, 0.2)',
            }}
          />
          <h2 className="fw-bold mt-3" style={{ color: '#0d6efd' }}>
            My ElviMart Account
          </h2>
          <p className="text-muted">Manage your shopping journey</p>
        </div>

        {/* Grid Menu */}
        <div className="row g-4 mb-5">
          {menuItems.map((item) => (
            <div key={item.label} className="col-6 col-md-3">
              <div
                onClick={() => setActiveTab(item.label)}
                className={`d-flex flex-column align-items-center p-4 rounded-4 shadow-sm ${
                  activeTab === item.label ? 'active-tile' : ''
                }`}
                style={{
                  backgroundColor: activeTab === item.label ? '#0d6efd' : '#ffffff',
                  color: activeTab === item.label ? '#ffffff' : '#0d6efd',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab === item.label
                    ? '0 8px 20px rgba(13,110,253,0.4)'
                    : '0 4px 12px rgba(0,0,0,0.05)',
                }}
                onMouseEnter={(e) => {
                  if (activeTab !== item.label) {
                    e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 123, 255, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== item.label) {
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                  }
                }}
              >
                <i className={`bi ${item.icon} fs-1 mb-2`}></i>
                <span className="fw-semibold">{item.label}</span>
              </div>
            </div>
          ))}
          {/* Logout Button */}
          <div className="col-6 col-md-3">
            <div
              onClick={handleLogout}
              className="d-flex flex-column align-items-center p-4 rounded-4 bg-danger text-white shadow-sm"
              style={{
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 6px 15px rgba(220,53,69,0.3)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 8px 20px rgba(220,53,69,0.5)')}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 6px 15px rgba(220,53,69,0.3)')}
            >
              <i className="bi bi-box-arrow-right fs-1 mb-2"></i>
              <span className="fw-semibold">Logout</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div
          className="p-5 rounded-4 shadow-lg"
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid rgba(13,110,253,0.1)',
            minHeight: '300px',
          }}
        >
          {activeTab === 'Dashboard' && (
            <div>
              <h4 className="fw-bold mb-3" style={{ color: '#0d6efd' }}>
                Dashboard Overview
              </h4>
              <p className="text-muted">Access your latest activities and summaries.</p>
            </div>
          )}
          {activeTab === 'Orders' && (
            <div>
              <h4 className="fw-bold mb-3" style={{ color: '#0d6efd' }}>
                My Orders
              </h4>
              <p className="text-muted">No recent orders yet.</p>
            </div>
          )}
{activeTab === 'Addresses' && (
  <div>
    <h4 className="fw-bold mb-4" style={{ color: '#0d6efd' }}>
      Saved Addresses
    </h4>

    <div className="mb-3 d-flex">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Enter new address..."
        value={newAddress}
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAddAddress}>
        Add
      </button>
    </div>

    {addresses.length === 0 ? (
      <p className="text-muted">No saved addresses yet.</p>
    ) : (
      <ul className="list-group">
        {addresses.map((address, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {address}
            <button
              className="btn btn-sm btn-outline-danger"
              onClick={() => handleDeleteAddress(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
)}
{activeTab === 'Account Details' && (
  <div>
    <h4 className="fw-bold mb-4" style={{ color: '#0d6efd' }}>
      Account Details
    </h4>
    <form className="row g-4">
      <div className="col-md-6">
        <label className="form-label">Full Name</label>
        <input type="text" className="form-control" placeholder="John Doe" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="john@example.com" />
      </div>
      <div className="col-md-6">
        <label className="form-label">New Password</label>
        <input type="password" className="form-control" placeholder="********" />
      </div>
      <div className="col-md-6">
        <label className="form-label">Confirm Password</label>
        <input type="password" className="form-control" placeholder="********" />
      </div>
      <div className="col-12">
        <label className="form-label">Profile Image URL</label>
        <input type="text" className="form-control" placeholder="https://..." />
      </div>
      <div className="col-12 text-end">
        <button type="submit" className="btn btn-primary px-4">
          Save Changes
        </button>
      </div>
    </form>
  </div>
)}
          {activeTab === 'Wishlist' && (
            <div>
              <h4 className="fw-bold mb-3" style={{ color: '#0d6efd' }}>
                Wishlist
              </h4>
              <p className="text-muted">Your favorite items will appear here.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
