import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons
import '../static/Footer.css'; // Import the CSS file

const Footer = () => {
    return (
        <footer className="footerContainer">
            {/* Quick Links */}
            <div className="section">
                <h5>Quick Links</h5>
                {/* Uncomment this section if you want to add quick links
                <ul style={styles.list}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#faq">FAQ</a></li>
                </ul>
                */}
            </div>

            {/* Social Media Icons */}
            <div className="section">
                <h5>Follow Us</h5>
                <div className="socialIcons">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>

            {/* Credits */}
            <div className="section">
                <h5>Credits</h5>
            </div>
        </footer>
    );
};

export default Footer;
