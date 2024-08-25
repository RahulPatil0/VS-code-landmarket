import React from 'react';
import { Link } from 'react-router-dom';
import NotificationBell from '../NotificationBell'; // Adjust path if needed
import './Header.css';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">LandMarket</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  <i className="fas fa-home"></i> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/about">
                  <i className="fas fa-info-circle"></i> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/contact">
                  <i className="fas fa-phone"></i> Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signup">
                  <i className="fas fa-user-plus"></i> Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/signin">
                  <i className="fas fa-sign-in-alt"></i> Sign In
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/sell-property">
                  <i className="fas fa-sign-in-alt"></i> Sell Property
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/buy-property">
                  <i className="fas fa-sign-in-alt"></i> Buy Property
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/help-center">
                  <i className="fas fa-sign-in-alt"></i> HelpCenter
                </Link>
              </li>
            </ul>
            <NotificationBell />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
