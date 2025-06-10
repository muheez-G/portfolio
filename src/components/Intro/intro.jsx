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
        <h1 className="introText">
          I'm <span className="introName">Ashogbon M.T</span> <br />
          Frontend Developer
        </h1>

        <p className="introPara">  
          I am a passionate frontend developer with experience in 
          building <br id='br'/>
          dynamic and user-friendly interfaces using React.js.
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
