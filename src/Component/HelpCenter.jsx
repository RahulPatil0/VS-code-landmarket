// HelpCenter.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import './HelpCenter.css';  // Add your CSS styling here

const HelpCenter = () => {
  return (
    <div className="help-center">
      <header className="help-header">
        <h1>LandMarket Help Center</h1>
      </header>

      <div className="help-banner">
        <h2>What can we help you find?</h2>
        <input type="text" placeholder="Search" className="help-search" />
      </div>

      <div className="help-content">
        <div className="help-section">
          <h3>🔒 Managing your LandMarket account</h3>
          <ul>
            <li><a href="#">About account suspensions</a></li>
            <li><a href="#">Help with locked or limited accounts</a></li>
            <li><a href="#">How to add your phone number to your account</a></li>
            <li><a href="#">How to update your email address</a></li>
          </ul>
          <button>See all articles</button>
        </div>
        
        <div className="help-section">
          <h3>📱 Using LandMarket</h3>
          <ul>
            <li><a href="#">How do search property in Landmarket</a></li>
            <li><a href="#">Signing up with LandMarket</a></li>
            <ul>
            <li><Link to="/how-to-sell">How to sell a property in LandMarket</Link></li>
            <li><Link to="/how-to-buy">How to Buy property</Link></li>

            {/* Other links */}
          </ul>
          </ul>
          <button>See all articles</button>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
