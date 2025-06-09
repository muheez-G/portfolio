import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <nav className='navbar'>
        <p className='logo'>M <span>&#47;&gt;</span></p>

        <div className="desktopMenu">
          <Link to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem">Home</Link>
          <Link to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem">Skills</Link>
          <Link to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem">Portfolio</Link>
          
          <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuBtn"
        >
          <FaEnvelope className='desktopMenuImg' />
          Contact Me
        </Link>
        </div>

        

        {!showSidebar && (
          <div className="mobMenuIcon" onClick={toggleSidebar}>
            <FiMenu size={30} color="#ffa500" />
          </div>
        )}
      </nav>

      {showSidebar && <div className="sidebar-backdrop" onClick={closeSidebar}></div>}

      <div className={`sidebar ${showSidebar ? 'open' : ''}`}>
        <div className="mobMenuIcon closeIcon" onClick={closeSidebar}>
          <FiX size={30} color="#ffa500" />
        </div>

        <Link to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={closeSidebar}>Home</Link>
        <Link to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={closeSidebar}>Skills</Link>
        <Link to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={closeSidebar}>Portfolio</Link>
        <Link to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={closeSidebar}>Contact</Link>
      </div>
    </>
  );
};

export default Navbar;
