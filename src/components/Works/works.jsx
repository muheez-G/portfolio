import React, { useEffect } from 'react';
import './works.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Portfolio1 from '../../assets/images/portfolio-1.jpeg';
import Portfolio2 from '../../assets/images/portfolio-2.png';
import Portfolio3 from '../../assets/images/portfolio-3.png';
import Portfolio4 from '../../assets/images/portfolio-4.jpeg';
import Portfolio5 from '../../assets/images/portfolio-5.jpeg';
import Portfolio6 from '../../assets/images/portfolio-6.jpeg';

const projects = [
  {
    title: "Glidex E‑Scooter Store",
    description: "A modern, responsive e-commerce platform for electric scooters. Built with React and Tailwind CSS...",
    tools: ["React", "Tailwind CSS", "Vite"],
    image: Portfolio2,
    link: "https://react-scooter-store-app.vercel.app/"
  },
  {
    title: "Prime Clinic – Men's Aesthetics",
    description: "A responsive platform for men's cosmetic services...",
    tools: ["React", "HTML", "CSS", "Git"],
    image: Portfolio4,
    link: "https://cosmetic-app-react.vercel.app/"
  },
  {
    title: "React Jobs Platform",
    description: "Clean and responsive job board with filtering and browsing...",
    tools: ["React", "Tailwind CSS", "Vite"],
    image: Portfolio3,
    link: "https://react-jobs-omega-ivory.vercel.app/jobs"
  },
  {
    title: "CineMa",
    description: "Movie web app powered by React and real-time APIs...",
    tools: ["HTML", "CSS", "React", "Git"],
    image: Portfolio5,
    link: "https://cinema-web-react.vercel.app//"
  },
  {
    title: "EVOLUTION – EV Landing Page",
    description: "High-performance landing page highlighting EV innovation...",
    tools: ["React", "HTML", "CSS", "Git"],
    image: Portfolio1,
    link: "https://ev-web-three.vercel.app/"
  },
];

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="works">
      <h2 className="worksTitle" data-aos="zoom-in">My Portfolio</h2>
      <div className="worksGrid">
        {projects.map((proj, idx) => (
          <div
            className={`projectCard ${idx % 2 !== 0 ? 'rightAlign' : ''}`}
            key={idx}
            data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
          >
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
