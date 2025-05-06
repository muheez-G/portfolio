import React from 'react';
import './works.css';
import Portfolio1 from '../../assets/images/portfolio-1.jpeg';
import Portfolio2 from '../../assets/images/portfolio-2.png';
import Portfolio3 from '../../assets/images/portfolio-3.png';
import Portfolio4 from '../../assets/images/portfolio-4.png';
import Portfolio5 from '../../assets/images/portfolio-5.jpeg';
import Portfolio6 from '../../assets/images/portfolio-6.jpeg';

const projects = [
  {
    title: "Evolution Website",
    description: "A high-performance modern web app showcasing electric vehicle innovation. Built using React, Git, HTML and CSS.",
    tools: ["HTML", "CSS", "React", "Git"],
    image: Portfolio1,
    link: "https://ev-web-three.vercel.app/"
  },
  {
    title: "Markko Website",
    description: "A clean landing page for a modern business brand. Focused on responsiveness and structure.",
    tools: ["HTML", "CSS", "Git"],
    image: Portfolio2,
    link: "https://markko-site.vercel.app/"
  },
  {
    title: "Scapewalkers",
    description: "A stylish, minimal site for a creative brand. Built with HTML, CSS and Git.",
    tools: ["HTML", "CSS", "Git"],
    image: Portfolio3,
    link: "https://scape-walk.vercel.app/"
  },
  {
    title: "Pleno Landing Page",
    description: "A business landing page crafted with modern layout and design principles.",
    tools: ["HTML", "CSS", "Git"],
    image: Portfolio4,
    link: "https://pleno-landing.vercel.app/"
  },
  {
    title: "Hulu Movies Clone",
    description: "A front-end clone of Hulu using React and real APIs. Built with HTML, CSS, Git and React.",
    tools: ["HTML", "CSS", "React", "Git"],
    image: Portfolio5,
    link: "https://hulu-movies-clone-orcin.vercel.app/"
  },
  {
    title: "Netflix Clone",
    description: "A Netflix front-end clone using React and APIs. Demonstrates UI cloning and layout skills.",
    tools: ["HTML", "CSS", "React", "Git"],
    image: Portfolio6,
    link: "https://netflix-clone-fst.vercel.app/"
  }
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <div className="worksGrid">
        {projects.map((proj, idx) => (
          <div className={`projectCard ${idx % 2 !== 0 ? 'rightAlign' : ''}`} key={idx}>
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
        <button className="workBtn">See more</button>
      </a>
    </section>
  );
};

export default Works;
