// src/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2>Inspiration for future getaways</h2>
        <div className="footer-links">
          <div className="footer-link-section">
            <span>Popular</span>
            <ul>
              <li><strong>Canmore</strong><br />Pet-friendly rentals</li>
              <li><strong>Benalmádena</strong><br />Flat rentals</li>
              <li><strong>Marbella</strong><br />Cottage rentals</li>
              <li><strong>Mijas</strong><br />Holiday rentals</li>
              <li><strong>Prescott</strong><br />House rentals</li>
            </ul>
          </div>
          <div className="footer-link-section">
            <span>Arts & culture</span>
            <ul>
              <li><strong>Tucson</strong><br />Holiday rentals</li>
              <li><strong>Jasper</strong><br />Cabin rentals</li>
              <li><strong>Mountain View</strong><br />Pet-friendly rentals</li>
              <li><strong>Devonport</strong><br />Cottage rentals</li>
              <li><strong>Mallacoota</strong><br />Pet-friendly rentals</li>
            </ul>
          </div>
          <div className="footer-link-section">
            <span>Outdoors</span>
            <ul>
              <li><strong>Anaheim</strong><br />Flat rentals</li>
              <li><strong>Monterey</strong><br />Cottage rentals</li>
              <li><strong>Paso Robles</strong><br />Holiday rentals</li>
              <li><strong>Santa Barbara</strong><br />Beach house rentals</li>
              <li><strong>Sonoma</strong><br />Beach house rentals</li>
            </ul>
          </div>
          <div className="footer-link-section">
            <span>Mountains</span>
            <ul>
              <li><strong>Scottsdale</strong><br />House rentals</li>
              <li><strong>Ibiza</strong><br />Holiday rentals</li>
              <li><a href="#show-more">Show more</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <a href="#support">Support</a>
          <a href="#hosting">Hosting</a>
          <a href="#airbnb">Airbnb</a>
        </div>
        <div className="footer-bottom-info">
          <p>© 2024 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details</p>
          <div className="footer-bottom-social">
            <span>🌐 English (IN)</span>
            <span>₹ INR</span>
            <span>🌐 Facebook</span>
            <span>🌐 Twitter</span>
            <span>🌐 Instagram</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
