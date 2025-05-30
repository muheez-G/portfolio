import React from 'react';
import './footer.css';
import {
  FaReact,
  FaTwitter,
  FaLinkedin,
  FaGithub
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='footer'>
      <h2>Engineering the web with performance, scalability, and design in mind 🚀</h2>

      <div className="links">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} color="#ffffffc2" />
        </a>
        <a href="https://github.com/muheez-G" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} color="#ffffffc2" />
        </a>
        <a href="https://x.com/Muheez__G" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={30} color="#ffffffc2" />
        </a>
      </div>

      <p id='copyright'>&#169; 2025 Ashogbon Muheez. All rights reserved.</p>

      <p id='built'>
         Built with <span style={{ display: 'inline-flex', alignItems: 'center' }}>
         React&nbsp;<FaReact color="#61dafb" size={18} style={{ verticalAlign: 'middle' }} />
      </span> with ❤️
      </p>

    </footer>
  );
};

export default Footer;
