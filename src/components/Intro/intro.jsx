import React, { useEffect } from 'react';
import './intro.css';
import bg from '../../assets/images/bg.png';
import btnImg from '../../assets/images/hireme.png';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id='intro' data-aos="zoom-out">
      <div className='bgDiv'>
        <img src={bg} alt="MuheezDev profile" className='bg' />
      </div>

      <div className='introContent'>
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Ashogbon Muheez</span> <br />
          Website Designer
        </span>

        <p className="introPara">
          I am a skilled web designer with experience in creating <br />
          visually appealing and user-friendly websites.
        </p>

        <Link to="contact" smooth={true} duration={500}>
          <button className="btn">
            <img src={btnImg} alt="Hire" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
