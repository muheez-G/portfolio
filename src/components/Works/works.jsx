import React, { useEffect } from 'react';
import './works.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio1 from '../../assets/images/portfolio-1.jpeg';
import Portfolio2 from '../../assets/images/portfolio-2.png';
import Portfolio3 from '../../assets/images/portfolio-3.png';
import Portfolio4 from '../../assets/images/portfolio-4.jpeg';
import Portfolio5 from '../../assets/images/portfolio-5.jpeg';

const projects = [
  {
    title: "Glidex E‑Scooter Store",
    description: "A modern, responsive e-commerce platform for electric scooters. Built with React and Tailwind CSS, Glidex delivers a seamless shopping experience with smooth interactions and optimized performance.",
    tools: ["React", "Tailwind CSS", "Vite"],
    image: Portfolio2,
    link: "https://react-scooter-store-app.vercel.app/"
  },
  {
    title: "Prime Clinic – Men's Aesthetics",
    description: "A modern, responsive platform tailored for men's cosmetic services. Built with React. The landing page showcases treatments, specialist profiles, and booking features with a masculine design approach.",
    tools: ["React", "HTML", "CSS", "Git"],
    image: Portfolio4,
    link: "https://men-cosmetic-app-react.vercel.app/"
  },
  {
  title: "React Jobs Platform",
  description: "A clean and responsive job board application built with React and Tailwind CSS. It allows users to browse, filter, and explore job listings with a smooth, user-friendly interface.",
  tools: ["React", "Tailwind CSS", "Vite"],
  image: Portfolio3,
  link: "https://react-jobs-omega-ivory.vercel.app/"
  },
  {
    title: "CineMa",
    description: "A sleek, responsive movie web app powered by React and real-time APIs. Features include movie browsing, search functionality, and dynamic content rendering. Built with HTML, CSS, React, and Git.",
    tools: ["HTML", "CSS", "React", "Git"],
    image: Portfolio5,
    link: "https://cinema-web-react.vercel.app/"
  },
  {
  title: "EVOLUTION – EV Landing Page",
  description: "A sleek, high-performance landing page highlighting electric vehicle innovation. Built with React, styled using HTML and CSS, and version-controlled with Git.",
  tools: ["React", "HTML", "CSS", "Git"],
  image: Portfolio1,
  link: "https://ev-web-three.vercel.app/"
  },
  /* {
    title: "Prime Clinic – Halal Men's Cosmetic Platform",
    description: "A modern, responsive platform tailored for men's cosmetic services. Built with React, styled with CSS, and maintained with Git version control. The landing page showcases treatments, specialist profiles, and booking features with a masculine design approach.",
    tools: ["React", "HTML", "CSS", "Git"],
    image: Portfolio4,
    link: "https://men-cosmetic-app-react.vercel.app/"
  },
  */
];

const Works = () => {
  useEffect(() => {
    const handleLoad = () => {
      AOS.init({ duration: 1000, once: true });
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return (
    <section id="works">
      <h2 className="worksTitle" data-aos="zoom-in">My Portfolio</h2>
      <div className="worksGrid" data-aos='fade-up'>
        {projects.map((proj, idx) => (
          <div
            className={`projectCard ${idx % 2 !== 0 ? 'rightAlign' : ''}`}
            key={idx}
            // data-aos='fade-up'
          >
            {/* {idx % 2 === 0 ? 'fade-right' : 'fade-left'} */}
            <div className="projectImgWrapper">
              <a href={proj.link} target="_blank" rel="noopener noreferrer" className="projectLinkWrapper">
                <img src={proj.image} alt={proj.title} className="worksImg" />
                <div className="hoverOverlay"><p>Go to Project</p></div>
              </a>
            </div>
            <div className="projectText">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tools">
                {proj.tools.map((tool, i) => (
                  <span key={i}>{tool}</span>
                ))}
              </div>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">
                <button className="projectBtn">Go to Project</button>
              </a>
            </div>
          </div>
        ))}
      </div>
      <a href="https://github.com/muheez-G" target="_blank" rel="noopener noreferrer">
        <button className="workBtn" data-aos="fade-up">See more</button>
      </a>
    </section>
  );
};

export default Works;
