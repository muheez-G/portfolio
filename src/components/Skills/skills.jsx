import React from 'react';
import './skills.css';
import UIDesign from '../../assets/images/ui-design.png';
import WebDesign from '../../assets/images/web-design.png';
import AppDesign from '../../assets/images/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle" data-aos="fade-up">What I do</span>
      <span className="skillDesc" data-aos="fade-up" data-aos-delay="100">
        I'm a creative frontend developer passionate about turning ideas into scalable, user-focused web products.
        Skilled in HTML, CSS, JavaScript, TypeScript, and React, I craft clean, strategic solutions that deliver standout user experiences.
      </span>

      <div className="skillBars" data-aos="fade-right" data-aos-delay="200">
        <div className="skillBar">
          <img src={UIDesign} alt="UI Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>I'm a UI/UX designer passionate about creating intuitive, visually engaging digital experiences that people genuinely enjoy using.</p>
          </div>
        </div>
      </div>

      <div className="skillBars" data-aos="fade-left" data-aos-delay="300">
        <div className="skillBar">
          <img src={WebDesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>Passionate about clean code and cleaner design, I craft modern, engaging websites that tell compelling stories and deliver real results.</p>
          </div>
        </div>
      </div>

      <div className="skillBars" data-aos="fade-up" data-aos-delay="400">
        <div className="skillBar">
          <img src={AppDesign} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>I transform ideas into beautiful, functional applications by blending creativity with seamless user experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
