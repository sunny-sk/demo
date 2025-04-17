import React from 'react'
import { Link } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Footer.css'

const Footer= () => {
    return (
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-top">
              <div className="footer-brand">
                <h3 className="footer-logo">
                  <svg width="30" height="30" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="9" cy="16" r="8" stroke="#006EFF"/>
                    <circle cx="9" cy="16" r="4" stroke="#006EFF" strokeWidth="3"/>
                  </svg>   
                  GoldenCity
                </h3>
                <p className="footer-tagline">The real estate investment that uses blockchain to revolutionise the sector from as little as $10.</p>
                <div className="footer-newsletter">
                  <h4>Stay Updated</h4>
                  <div className="newsletter-form">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit">Subscribe</button>
                  </div>
                </div>
              </div>
              
              <div className="footer-links">
                <div className="footer-links-column">
                  <h4>Sitemap</h4>
                  <ul>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/MarketPlace">MarketPlace</Link></li>
                    <li><Link to="/FAQ">FAQ</Link></li>
                    <li><Link to="/Blogs">Blogs</Link></li>
                  </ul>
                </div>
                
                <div className="footer-links-column">
                  <h4>Informations</h4>
                  <ul>
                    <li><a href="https://REP.gitbook.io/whitepaper">Whitepaper</a></li>
                    <li><a href="/FAQ">Legal Notice</a></li>
                    <li><a href="/FAQ">Privacy Policy</a></li>
                    <li><a href="/FAQ">Contact Us</a></li>
                  </ul>
                </div>
                
                <div className="footer-links-column">
                  <h4>Resources</h4>
                  <ul>
                    <li><a href="/Tutorials">Tutorials</a></li>
                    <li><a href="/Support">Support</a></li>
                    <li><a href="/Partners">Partners</a></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="footer-divider"></div>
            
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} - GoldenCity. All rights reserved.</p>
              <div className="footer-socials">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                <a href="https://discord.gg" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
              </div>
            </div>
          </div>
        </footer>
    )
}

export default Footer;