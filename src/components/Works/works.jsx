import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/images/portfolio-1.jpeg'
import Portfolio2 from '../../assets/images/portfolio-2.png'
import Portfolio3 from '../../assets/images/portfolio-3.png'
import Portfolio4 from '../../assets/images/portfolio-4.png'
import Portfolio5 from '../../assets/images/portfolio-5.jpeg'
// import Portfolio6 from '../../assets/images/portfolio-6.png'

const Works = () => {
   return (
      <section id='works'>
         <div className="worksTitle">My Portfolio</div>

         <span className="workDesc" id='desc-w'>
            I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am exited to bring my skilss and experience to help busisnesses achieve their goals and create a strong online presence.
         </span>   
         <div className="worksImgs">
            <a href="https://ev-web-three.vercel.app/" target="_blank" rel="noopener noreferrer"><div id='works-div' className="works-div"><img src={Portfolio1} alt="Portfolio1" className="worksImg" /> <div className="hover"><p>Go to Project</p></div> </div></a>
            <a href="https://markko-site.vercel.app/" target="_blank" rel="noopener noreferrer"><div className="works-div"><img src={Portfolio2} alt="Portfolio2" className="worksImg" /><div className="hover"><p>Go to Project</p></div></div></a>
            <a href="https://scape-walk.vercel.app/" target="_blank" rel="noopener noreferrer"><div className="works-div"><img src={Portfolio3} alt="Portfolio3" className="worksImg" /><div className="hover"><p>Go to Project</p></div></div></a>
            <a href="https://pleno-landing.vercel.app/" target="_blank" rel="noopener noreferrer"><div className="works-div"><img src={Portfolio4} alt="Portfolio4" className="worksImg" /><div className="hover"><p>Go to Project</p></div></div></a>
            <a href="https://hulu-movies-clone-orcin.vercel.app/" target="_blank" rel="noopener noreferrer"><div className="works-div"><img src={Portfolio5} alt="Portfolio5" className="worksImg" /><div className="hover"><p>Go to Project</p></div></div></a>
            {/* <img src={Portfolio6} alt="Portfolio6" className="worksImg" /> */}
         </div>
         <a href='https://github.com/muheez-G'><button className="workBtn">See more </button></a>
      </section>
   )
}

export default Works