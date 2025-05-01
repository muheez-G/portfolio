import React from 'react'
import './intro.css'
import bg from '../../assets/images/image.jpg'
import btnImg from '../../assets/images/hireme.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
      <section id='intro'>
         <div className='introContent'>
            <span className="hello" id="hello" >Hello,</span>
            <span className="introText">I'm <span className="introName">MuheezDev</span> <br />Website Designer </span>
            <p className="introPara">I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites.</p>
            <Link> 
               <button className="btn">
                  <img src={btnImg} alt="Hire" className='btnImg'/>
                  Hire Me
               </button>
            </Link>
         </div>
         <div className='bgDiv'>
            <img src={bg} alt="Profile" className='bg'/>
         </div>
      </section>
  )
}

export default Intro 