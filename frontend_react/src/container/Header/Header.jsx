import React from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper'
import { images } from '../../constants';
import './Header.scss'

import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Header() {
	return (
		<div className='app__header app__flex'>
			<motion.div
				whileInView={{ x: [-100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className='app__flex app__header-info'
			>
				<div className='badge-cmp'>
					{/* <span>👋</span> */}
					<p>Hi there 👋</p>
					<div className='home__text'>
						I'm <span>Rajdip Pal</span>
					</div>
					<div className='home2__text'>
						a
						<div className='animation__div'>
							<div><div>Frontend Developer</div></div>
							{/* <div><div>Backend Developer</div></div>
							<div><div>Mern Stack Developer</div></div>
							<div><div>Web Designer</div></div>
							<div><div>Full Stack Developer</div></div> */}
						</div>
					</div>
				</div>

				<div className='tag-cmp app__flex'>
					<p className='p3-text'>I am currently a 4th year CSE student. I have great interest in exploring new technologies. I build web application using Javascript econsystem (MERN). Along with that I have experiences in building web application from scratch to production ready. </p>
				</div>
				<div className='app__social home__social'>
					<div><a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/rajdip14/'><FaLinkedin /></a></div>
					<div><a target="_blank" rel='noreferrer' href='https://github.com/Rajdip789'><FaGithub /></a></div>
					<div><a target="_blank" rel='noreferrer' href='https://twitter.com/rajdip141'><BsTwitter /></a></div>
					<div><a target="_blank" rel='noreferrer' href='https://www.instagram.com/palrajdip33/'><BsInstagram /></a></div>
					<div>
						<a target="_blank" rel='noreferrer' href='https://leetcode.com/rajdip14/'>
							<svg width="30" height="30" viewBox="0 0 24 24">
								<path fill="currentColor" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/>
							</svg>
						</a>
					</div>
				</div>
				<div className='home__btns'>
					<a href='#skills'><button>Learn More</button></a>
					<a target="_blank" rel='noreferrer' href='https://drive.google.com/file/d/1nhsZAq9tMakqhTyjnkgfvoaHViDSZUX3/view?usp=sharing'><button>Resume</button></a>
				</div>
			</motion.div>

			<motion.div
				whileInView={{ x: [100, 0], opacity: [0, 1] }}
				transition={{ duration: 0.5 }}
				className='app__header-img'
			>
				<img src={images.profile2} alt='profile_bg' className='profile_img' />
			</motion.div>
		</div>
	)
}

export default AppWrap(Header, 'home', 'app__primarybg')