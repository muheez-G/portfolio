import React, { useRef, useState } from 'react'
import './contact.css'
import Walmart from '../../assets/images/walmart.png'
import Adobe from '../../assets/images/adobe.png'
import Microsoft from '../../assets/images/microsoft.png'
import Facebook from '../../assets/images/facebook.png'

import GitIcon from '../../assets/images/github.png'
import TwitterIcon from '../../assets/images/twitter.png'
import LinkedIn from '../../assets/images/linkedin.png'
import IntagramIcon from '../../assets/images/instagram.png'
import emailjs from '@emailjs/browser'


const Contact = () => {
   const form = useRef()
   const [emailSent, setEmailSent] = useState(false)

   const sendEmail = (e) => {
      e.preventDefault()

      emailjs
         .sendForm('service_2rawgl7', 'template_6apc5tx', form.current, 'FB4LOTz0ULLvnc68D')
         .then((result) => {
               console.log(result.text)
               e.target.reset()
               setEmailSent(true)
               setTimeout(() => setEmailSent(false), 1500)
            }, (error) => {
               console.log('FAILED...', error.text)
         })
   }

   return (
      <section id="contactPage">
 

         <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>  


            <form className='contactForm' ref={form} onSubmit={sendEmail}>
               <input type="text" className='name' placeholder='Your Name' name='name'required />
               <input type="tel" className="email" placeholder='Your Phone Number' name='tel' required/>
               <input type="email" className="email" placeholder='Your Email' name='email' required />
               <textarea className='msg' name="message" rows='5' placeholder='Your Message' required></textarea>
               {emailSent && <div className="emailSentMsg">Email Sent! ✅</div>}
               <button type='submit' value='Send' className="submitBtn">Submit</button>
            </form>
         </div>
      </section>
   )
}
export default Contact