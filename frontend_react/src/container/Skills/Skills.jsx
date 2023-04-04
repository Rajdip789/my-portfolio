import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Skills.scss'

function Skills() {
	const [experience, setExperience] = useState([]);
	const [skills, setSkills] = useState([])

	useEffect(() => {
		const query = '*[_type == "experiences"]';
		const skillsQuery = '*[_type == "skills"]';

		client.fetch(query)
			.then((data) => {
				setExperience(data);
			})

		client.fetch(skillsQuery)
			.then((data) => {
				setSkills(data);
			})
	}, [])

	return (
		<>
			<h2 className='head-text'><span>Skills</span> & Education</h2>

			<div className='app__skills-container'>
				<motion.div className='app__skils-list'>
					{
						skills.map((skill, i) => 
							<motion.div
								whileInView={{ opacity: [0, 1] }}
								transition={{ duration: 0.5 }}
								className="app_skills-item app__flex"
								key={i}
							>
								<div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
									<img src={urlFor(skill.icon)} alt={skill.name} />
								</div>
								<p className='p-text'>{skill.name}</p>
							</motion.div>
						)
					}
				</motion.div>

				<motion.div className="app__skills-exp">
					{/* {console.log(experience)} */}
					{
						experience.sort((a, b) => a._createdAt > b._createdAt? 1 : -1).map((ex, i) => (
							<div key={i}>
								<motion.div 
									whileInView={{ opacity: [0, 1] }}
									transition={{ duration: 1 }}
									className='app_skills-exp-itme'
								>
									<div className='app__skills-exp-year'>
										<p className='bold-text'>{ex.year}</p>
									</div>
									<motion.div className='app_skills-exp-works'>
										{
											ex.works.map((work,i) => (
												<div key={i}>
													<motion.div
														whileInView={{ opacity: [0, 1] }}
														transition={{ duration: 0.5 }}
														className="app_skills-exp-work"
													>
														<h4 className='bold-text'>{work.name}</h4>
														<p className='p2-text'>{work.company}</p>
													</motion.div>

													<p>{work.desc}</p>
												</div>
											))
										}
									</motion.div>
								</motion.div>
							</div>
						))
					}
				</motion.div>
			</div>
		</>
	)
}

export default AppWrap(
	MotionWrap(Skills, 'app__skills'),
	'skills',
	'app__whitebg'
);