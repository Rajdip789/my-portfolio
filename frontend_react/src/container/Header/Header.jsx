import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper'
import { images } from '../../constants';
import './Header.scss'

import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const titleArr = [
	"Frontend Developer",
	"Backend Developer",
	"Mern Developer",
	"Software Engineer",
]

function Header() {
	const [title, setTitle] = useState(0)

	useEffect(() => {
		let id = setInterval(() => {
			setTitle((t) => { return (t + 1) % titleArr.length });
			console.log(id)
		}, 10000);

		return () => {
			clearInterval(id);
		}
	}, [])

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
						<span style={{ marginRight: "10px" }}>a</span>
						<div className='animation__div'>
							{
								titleArr.map((value, i) => {
									return (
										<div key={i} style={{ display: title === i ? "block" : "none" }}><div>{value}</div></div>
									)
								})
							}
						</div>
					</div>
				</div>

				<div className='tag-cmp app__flex'>
					<p className='p3-text'>I am currently a 4th year CSE student. I have great interest in exploring new technologies. I build web application using Javascript econsystem (MERN). Along with that I have experiences in building web application from scratch to production ready. Currently I am open for SDE roles and looking for opportunities in the field of Software Engineering.</p>
				</div>
				<div className='app__social home__social'>
					<div><a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/rajdip14/'><FaLinkedin /></a></div>
					<div><a target="_blank" rel='noreferrer' href='https://github.com/Rajdip789'><FaGithub /></a></div>
					<div><a target="_blank" rel='noreferrer' href='https://twitter.com/rajdip141'><BsTwitter /></a></div>
					<div><a target="_blank" rel='noreferrer' href='https://www.instagram.com/palrajdip33/'><BsInstagram /></a></div>
					<div>
						<a target="_blank" rel='noreferrer' href='https://leetcode.com/rajdip14/'>
							<svg viewBox="0 0 24 24">
								<path fill="currentColor" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z" />
							</svg>
						</a>
					</div>
					<div>
						<a target="_blank" rel='noreferrer' href='https://auth.geeksforgeeks.org/user/rajdip14'>
							<svg viewBox="0 0 24 24">
								<path fill="#6b7688" d="m5.665 5.823c-.667 0-1.247.08-1.741.241-.495.161-.93.356-1.308.583l-.342-.566h-.666l-.075 4.132h.683a11.2 11.2 0 0 1 .433-1.341c.172-.445.394-.842.666-1.192a3.02 3.02 0 0 1 1-.833c.389-.21.855-.316 1.4-.316.594 0 1.124.122 1.59.366.467.24.873.597 1.217 1.075.339.461.6 1.036.783 1.724.184.69.275 1.458.275 2.308 0 .192-.006.38-.017.567h-9.563v.608c.133.016.314.044.541.083.222.033.403.083.542.15a.748.748 0 0 1 .358.358c.067.15.1.328.1.534v.916c0 .666-.003 1.116-.008 1.35a22.14 22.14 0 0 1 -.033.574 12.57 12.57 0 0 0 2.207.767 9.138 9.138 0 0 0 2.158.266c.755 0 1.483-.141 2.183-.425a5.46 5.46 0 0 0 1.832-1.208 5.815 5.815 0 0 0 1.258-1.924 6.09 6.09 0 0 0 .389-1.441h.946c.075.511.204.992.389 1.44.31.756.73 1.398 1.258 1.925a5.46 5.46 0 0 0 1.833 1.208c.7.284 1.427.425 2.182.425.705 0 1.425-.089 2.158-.266a12.57 12.57 0 0 0 2.208-.767c-.012-.15-.023-.341-.034-.575a66.751 66.751 0 0 1 -.008-1.35v-.915c0-.206.033-.384.1-.534a.748.748 0 0 1 .358-.358c.14-.067.32-.117.542-.15.228-.039.408-.067.541-.083v-.608h-9.563a9.108 9.108 0 0 1 -.017-.567c0-.85.092-1.619.275-2.308.183-.688.444-1.263.783-1.724.344-.478.75-.836 1.216-1.075.467-.244.997-.366 1.592-.366.544 0 1.01.105 1.399.316a3.02 3.02 0 0 1 1 .833c.272.35.494.747.666 1.192.172.439.317.886.433 1.341h.684l-.075-4.132h-.667l-.342.566a6.317 6.317 0 0 0 -1.307-.583c-.495-.16-1.075-.241-1.742-.241a5.95 5.95 0 0 0 -2.349.466 5.503 5.503 0 0 0 -1.883 1.291 5.996 5.996 0 0 0 -1.266 2.008 6.913 6.913 0 0 0 -.442 2.5c0 .164.007.324.017.483h-.823c.01-.159.016-.32.016-.484 0-.9-.147-1.732-.441-2.499a5.996 5.996 0 0 0 -1.267-2.008 5.503 5.503 0 0 0 -1.882-1.29 5.953 5.953 0 0 0 -2.35-.467zm-.483 7.356h4.32a7.714 7.714 0 0 1 -.188.95 5.43 5.43 0 0 1 -.792 1.716 3.76 3.76 0 0 1 -1.291 1.166c-.517.283-1.103.425-1.758.425a3.77 3.77 0 0 1 -1.333-.225c-.405-.15-.691-.308-.858-.475a5.749 5.749 0 0 1 -.066-.875 36.8 36.8 0 0 1 -.008-.75v-.65c0-.232.033-.438.1-.616a.648.648 0 0 1 .391-.4c.183-.083.433-.144.75-.183a9.87 9.87 0 0 1 .733-.083zm9.316 0h4.32c.178.01.422.039.733.083.317.039.567.1.75.183.2.084.33.217.392.4.066.178.1.384.1.617v.65c0 .205-.004.455-.009.75 0 .294-.022.585-.066.874-.167.167-.453.325-.858.475-.4.15-.845.225-1.333.225-.656 0-1.242-.142-1.758-.425a3.76 3.76 0 0 1 -1.291-1.166 5.43 5.43 0 0 1 -.792-1.717 7.712 7.712 0 0 1 -.188-.95z"/>
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