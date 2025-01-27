import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Footer = () => {
  return (
    <div className="footer-container">
      <footer className="text-center text-lg-start text-dark" style={{ backgroundColor: '#ECEFF1', width: '100%' }}>
        {/* Section: Social media */}
        <section className="d-flex justify-content-between p-4 text-white" style={{ backgroundColor: '#21D192' }}>
          {/* Left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Right */}
          <div>
            <a href="#" className="text-white me-4" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white me-4" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white me-4" aria-label="Google">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="text-white me-4" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white me-4" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white me-4" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-2">
            <div className="row mt-3">
              {/* Company Information */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-3">
                <h6 className="text-uppercase fw-bold">LandMarket</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '1px' }} />
                <p>
                  Discover the best deals in real estate with LandMarket. Your dream property is just a click away.
                </p>
              </div>
              {/* Products */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '1px' }} />
                <p>
                  <Link to="/sell-property" className="text-dark">Sell Your Property</Link>
                </p>
                <p>
                  <a href="#!" className="text-dark">Property Listings</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Real Estate News</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Agent Portal</a>
                </p>
              </div>
              {/* Useful Links */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '1px' }} />
                <p>
                  <a href="#!" className="text-dark">Your Account</a>
                </p>
                <p>
                  <Link to="/contact" className="text-dark">Contact Us</Link>
                </p>
                <p>
                  <a href="#!" className="text-dark">FAQ</a>
                </p>
                <p>
                  <a href="#!" className="text-dark">Help Center</a>
                </p>
              </div>
              {/* Contact Information */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '1px' }} />
                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                <p><i className="fas fa-envelope mr-3"></i> info@landmarket.com</p>
                <p><i className="fas fa-phone mr-3"></i> +91 9108611186</p>
                <p><i className="fas fa-print mr-3"></i> +7676774157</p>
              </div>
            </div>
          </div>
        </section>
        {/* Copyright */}
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 Copyright:
          <a className="text-dark" href="https://landmarket.com/">LandMarket.com</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
