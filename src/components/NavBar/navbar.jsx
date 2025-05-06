import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/images/logo.png'
import contactImg from '../../assets/images/contact.png'
import { Link } from 'react-scroll'
import menu from '../../assets/images/menu.png'

const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);
  return (
      <nav className='navbar'> 

         {/* <img src={logo} alt="Logo" className='logo' /> */}
         <p className='logo'>M <span> &#47;&gt; </span> </p>

         <div className="desktopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Home </Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Skills </Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Portfolio </Link>
         </div>

         <button className="desktopMenuBtn" onClick={() => {
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
         }}>
            <img src={contactImg} alt="" className='desktopMenuImg'/>
            Contact Me
         </button>

         <img src={menu} alt="Menu" className='mobMenu' onClick={()=>setShowMenu(!showMenu)} />
         <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)} > Home </Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Skills </Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Portfolio </Link>
            <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="listItem" onClick={()=>setShowMenu(false)}> Contact </Link>
         </div>

      </nav>
  )
}

export default Navbar