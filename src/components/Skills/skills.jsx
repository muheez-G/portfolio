import React from 'react'
import './skills.css'
import UIDesign from '../../assets/images/ui-design.png'
import WebDesign from '../../assets/images/website-design.png'
import AppDesign from '../../assets/images/app-design.png'
import App from '../../App'

const Skills = () => {
	return (
		<section id='skills'>
			<span className='skillTitle'>What I do</span>
			<span className="skillDesc">I'm a creative  Frontend developer passionate about converting ideas into standard and scalable products. I am proficient in Html, Css, Javascript, Typescript.
			I build ideas you want on the web. Strategic driven solutions for the best user experience </span>

			<div className="skillBars">
				<div className="skillBar">
					<img src={UIDesign} alt="UIDesign" className='skillBarImg'/>	
					<div className="skillBartext">
						<h2>UI/UX Design</h2>
						<p>I'm a UI/UX designer passionate about crafting intuitive and visually compelling digital experiences.
							I care deeply about making designs that people actually enjoy using.
						</p>
					</div>
				</div>	
			</div>

			<div className="skillBars">
				<div className="skillBar">
					<img src={WebDesign} alt="WebDesign" className='skillBarImg'/>	
					<div className="skillBartext">
						<h2>WebDesign</h2>
						<p>Passionate about clean code and even cleaner design, I design modern engaging websites that tell stories and drive results.</p>
					</div>
				</div>	
			</div>

			<div className="skillBars">
				<div className="skillBar">
					<img src={AppDesign} alt="skillBar" className='skillBarImg'/>	
					<div className="skillBartext">
						<h2>AppDesign</h2>
						<p> I transform ideas into beautiful functional applications, Blending creativity with seamless user experience."</p>
					</div>
				</div>	
			</div>
		</section>
	)
}

export default Skills