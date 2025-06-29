import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="elvimart-404">
      <div className="elvimart-glow" />
      <div className="elvimart-box">
        <h1 className="elvimart-title">404</h1>
        <p className="elvimart-message">Oops! This page doesn't exist on ElviMart.</p>
        <p className="elvimart-hint">Maybe you were looking for our awesome products instead?</p>
        <Link to="/" className="elvimart-btn">Go Back to ElviMart 🛍️</Link>
      </div>
    </div>
  );
};

export default NotFound;
