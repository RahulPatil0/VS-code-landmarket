import React from 'react';
import Layout from './Layout/Layout';
import './about.css';
import aboutImage from '../../src/assets/nature2.jpg'; // Replace with the appropriate image path

const About = () => {
  return (
    <Layout>
      <div className="about">
        <section className="about-section">
          <div className="about-image">
            <img src={aboutImage} alt="LandMarket" />
          </div>

          <div className="about-content">
            <h2>About Us</h2>
            <p>
              LandMarket is your premier platform for buying and selling properties.
              We are dedicated to providing a streamlined experience for both buyers
              and sellers by offering tools for property listings, detailed property
              profiles, and transparent pricing. Our mission is to simplify the
              real estate process and empower individuals to find their perfect property.
            </p>
          </div>
        </section>
        <section className="cards-section">
          <div className="card card-3d">
            <h3>Our Mission</h3>
            <p>
              Our mission is to simplify the real estate process by providing 
              easy access to property listings, expert advice, and the tools 
              needed to make informed decisions.
            </p>
          </div>

          <div className="card card-3d">
            <h3>Our Services</h3>
            <p>
              We offer a range of services including property listings, detailed 
              property profiles, price analysis, and customer support to ensure 
              a seamless property buying and selling experience.
            </p>
          </div>

          <div className="card card-3d">
            <h3>Property Listings</h3>
            <p>
              Explore a wide range of property listings tailored to your needs. 
              Create a detailed profile to showcase your property and connect 
              with potential buyers who are looking for their ideal real estate investment.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
