import React from 'react'
import './contact.css'
import Walmart from '../../assets/images/walmart.png'
import Adobe from '../../assets/images/adobe.png'
import Microsoft from '../../assets/images/microsoft.png'
import Facebook from '../../assets/images/facebook.png'

import FacebookIcon from '../../assets/images/facebook-icon.png'
import TwitterIcon from '../../assets/images/twitter.png'
import YoutubeIcon from '../../assets/images/youtube.png'
import IntagramIcon from '../../assets/images/instagram.png'


const Contact = () => {
   return (
      <section id="contactPage">
         <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
               I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked with includes
            </p>
            <div className="clientImgs">
               <img src={Walmart} alt="Client" className="clientImg" />
               <img src={Microsoft} alt="Client" className="clientImg" />
               <img src={Adobe} alt="Client" className="clientImg" />
               <img src={Facebook} alt="Client" className="clientImg" />
            </div>
         </div>

         <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>  
            
            <form className='contactForm'>
               <input type="text" className='name' placeholder='Your Name' />
               <input type="email" className="email" placeholder='Your Email'/>
               <textarea className='msg' name="message" rows='5' placeholder='Your Message'></textarea>
               <button type='submit' value='Send' className="submitBtn">Submit</button>
               <div className="links">
                  <img src={FacebookIcon} alt="Facebook" className="link" />
                  <img src={TwitterIcon} alt="Twitter" className="link" />
                  <img src={YoutubeIcon} alt="Youtube" className="link" />
                  <img src={IntagramIcon} alt="Instagram" className="link" />
               </div>
            </form>
         </div>
      </section>
   )
}

export default Contact