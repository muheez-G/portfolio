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

      <div className="links" data-aos="fade-up" >
        <a href="https://www.linkedin.com/in/muheez-ashogbon-9a9a00368" target="_blank" rel="noopener noreferrer">
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
        Built with <span className="react-badge">
          React <FaReact color="#61dafb" size={18} />
        </span> with ❤️
      </p>
    </footer>
  );
};

export default Footer;
