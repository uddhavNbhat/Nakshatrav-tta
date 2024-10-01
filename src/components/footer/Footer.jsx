// src/components/FooterComponent.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons

const Footer = () => {
    return (
        <footer style={styles.footerContainer}>
            {/* Quick Links */}
            <div style={styles.section}>
                <h5>Quick Links</h5>
                {/* <ul style={styles.list}>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>*/}
            </div>

            {/* Social Media Icons */}
            <div style={styles.section}>
                <h5>Follow Us</h5>
                <div style={styles.socialIcons}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                </div>
            </div>

            {/* Credits */}
            <div style={styles.section}>
                <h5>Credits</h5>
            </div>
        </footer>
    );
};

const styles = {
    footerContainer: {
        backgroundColor: '#2b3d4f58',
        padding: '10px 0',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTop: '1px solid #ddd',
    },
    section: {
        textAlign: 'center',
    },
    list: {
        listStyleType: 'none',
        padding: 0,
    },
    socialIcons: {
        display: 'flex',
        gap: '10px',
        fontSize: '1em',
    },
};

export default Footer;
