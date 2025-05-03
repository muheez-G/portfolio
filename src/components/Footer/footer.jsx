import React from 'react'
import './footer.css'
import reactIcon from '../../assets/images/react.svg'

const Footer = () => {
   return (
      <footer className='footer'>
         <p className="footer-p">Built with <b> React <img src={reactIcon} alt="React-Icon" /> </b> with ❤️</p>
         Copyright &#169; 2025 Ashogbon Muheez. All right reserved.
      </footer>
   )
}

export default Footer