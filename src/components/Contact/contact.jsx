import React, {useRef} from 'react'
import './contact.css'
import Walmart from '../../assets/images/walmart.png'
import Adobe from '../../assets/images/adobe.png'
import Microsoft from '../../assets/images/microsoft.png'
import Facebook from '../../assets/images/facebook.png'

import FacebookIcon from '../../assets/images/facebook-icon.png'
import TwitterIcon from '../../assets/images/twitter.png'
import YoutubeIcon from '../../assets/images/youtube.png'
import IntagramIcon from '../../assets/images/instagram.png'

import emailjs from '@emailjs/browser'


const Contact = () => {
   const form = useRef();
   const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_2rawgl7', 'template_6apc5tx', form.current, 'FB4LOTz0ULLvnc68D')
        .then((result) => {
               console.log(result.text);
               e.target.reset();
               alert('Email Sent!')
            },(error) => {
            console.log('FAILED...', error.text);
         });
   };
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
            
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
               <input type="text" className='name' placeholder='Your Name' name='name' />
               <input type="email" className="email" placeholder='Your Email' name='email' />
               <textarea className='msg' name="message" rows='5' placeholder='Your Message'></textarea>
               <button type='submit' value='Send' className="submitBtn">Submit</button>
               <div className="links">
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                     <img src={FacebookIcon} alt="Facebook" className="link" />
                  </a>
                  <a href="https://x.com/Hard2kill_AO?t=dSqldSbv7IT2a2YrFNY_JA&s=09" target="_blank" rel="noopener noreferrer">
                     <img src={TwitterIcon} alt="Twitter" className="link" />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                     <img src={YoutubeIcon} alt="Youtube" className="link" />
                  </a>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                     <img src={IntagramIcon} alt="Instagram" className="link" />
                  </a>
               </div>
            </form>
         </div>
      </section>
   )
}

export default Contact