import React, { useContext, useState } from 'react'
import './Navbar.scss'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md'
import { motion } from 'framer-motion';

import { images } from '../../constants'
import { DarkModeContext } from "../../context/darkModeContext";

function Navbar() {
	const [toggle, setToggle] = useState(false);
	const [darkMode, setDarkMode] = useState(false)
	const { dispatch } = useContext(DarkModeContext);

	return (
		<nav className='app__navbar'>
			<div className='app__navbar-logo'>
				<img src={images.logo} alt='logo' />
			</div>
			<ul className='app__navbar-links'>
				{
					['home', 'about', 'work', 'skills', 'contact'].map((item) => (
						<li className='app__flex p2-text' key={`link-${item}`}>
							<div />
							<a href={`#${item}`}>{item}</a>
						</li>
					))
				}
			</ul>
			<div className="item" onClick={() => { dispatch({ type: "TOGGLE" }); setDarkMode(!darkMode) }}>
				{
					darkMode ?
						<MdOutlineLightMode className="icon" size={20} color='gray' /> :
						<MdOutlineDarkMode className="icon" size={20} color='gray' />
				}
			</div>
			<div className='app__navbar-menu'>
				<HiMenuAlt4 onClick={() => setToggle(true)} />

				{toggle && (
					<motion.div
						whileInView={{ x: [300, 0] }}
						transition={{ duration: 0.85, ease: 'easeOut' }}
					>
						<HiX onClick={() => setToggle(false)} />
						<ul>
							{
								['home', 'about', 'work', 'skills', 'contact'].map((item) => (
									<li key={item}>
										<a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
									</li>
								))
							}
						</ul>
					</motion.div>
				)}
			</div>
		</nav>
	)
}

export default Navbar