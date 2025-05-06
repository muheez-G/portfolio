import React from 'react'
import './skills.css'
import UIDesign from '../../assets/images/ui-design.png'
import WebDesign from '../../assets/images/web-design.png'
import AppDesign from '../../assets/images/app-design.png'
import App from '../../App'

const Skills = () => {
	return (
		<section id='skills'>
			<span className='skillTitle'>What I do</span>
			<span className="skillDesc">I'm a creative frontend developer passionate about turning ideas into scalable, user-focused web products. Skilled in HTML, CSS, JavaScript, TypeScript, 
				and React, I craft clean, strategic solutions that deliver standout user experiences. </span>

			<div className="skillBars">
				<div className="skillBar">
					<img src={UIDesign} alt="UIDesign" className='skillBarImg'/>	
					<div className="skillBartext">
						<h2 id='h2text'>UI/UX Design</h2>
						<p id='p'>I'm a UI/UX designer passionate about 
							creating intuitive, visually engaging digital experiences that people genuinely enjoy using.
						</p>
					</div>
				</div>	
			</div>

			<div className="skillBars">
				<div className="skillBar">
					<img src={WebDesign} alt="WebDesign" className='skillBarImg'/>	
					<div className="skillBartext">
						<h2 id='h2text'>Web Design</h2>
						<p id='p'> Passionate about clean code and cleaner design, I craft modern, engaging websites that tell compelling stories and deliver real results.
						</p>
					</div>
				</div>	
			</div>

			<div className="skillBars">
				<div className="skillBar">
					<img src={AppDesign} alt="skillBar" className='skillBarImg'/>	
					<div className="skillBartext">
						<h2 id='h2text'>App Design</h2>
						<p id='p'> I transform ideas into beautiful, functional applications by blending creativity with seamless user experience.</p>
					</div>
				</div>	
			</div>
		</section>
	)
}

export default Skills