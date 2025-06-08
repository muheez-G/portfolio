import React, { useRef, useState, useEffect } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2rawgl7', 'template_6apc5tx', form.current, 'FB4LOTz0ULLvnc68D')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setEmailSent(true);
          setTimeout(() => setEmailSent(false), 1500);
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle" data-aos="fade-up">Contact Me</h1>
        <span className="contactDesc" data-aos="fade-up" data-aos-delay="200">
          Please fill out the form below to discuss any work opportunities.
        </span>

        <form
          className="contactForm"
          ref={form}
          onSubmit={sendEmail}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <input type="text" className="name" placeholder="Your Name" name="name" required />
          <input type="tel" className="phone" placeholder="Your Phone Number" name="tel" required />
          <input type="email" className="email" placeholder="Your Email" name="email" required />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          {emailSent && (
            <div className="emailSentMsg" data-aos="fade-in">
              ✅ Email Sent!
            </div>
          )}

          <button type="submit" className="submitBtn">
            Submit
          </button>
        </form>

        {/* Resume download button (outside form) */}
        <a
          href="https://docs.google.com/document/d/1YliXIKsuoOYdvmrPX4W_CLvmN0BbS8xh/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button type="button" className="downloadResumeBtn" data-aos="fade-up">
            📄 Download My Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default Contact;
