import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import './About.scss';
import { urlFor, client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

function About() {
	const [abouts, setAbouts] = useState([])

	useEffect(() => {
		const query = '*[_type == "abouts"]';

		client.fetch(query)
			.then(data => setAbouts(data))
	}, [])


	return (
		<>
			<h2 className='head-text'>
				I know That
				<span> Good Development</span>
				<br />
				means
				<span> Good Business</span>
			</h2>

			<div className='app__profiles'>
				{
					abouts.map((about, i) => (
						<motion.div
							whileInView={{ opacity: 1 }}
							whileHover={{ scale: 1.1 }}
							transition={{ duration: 0.5, type: 'tween' }}
							className='app__profile-item'
							key={i}
						>
							<img src={urlFor(about.imgUrl)} alt={about.titile} />
							<h2 className='bold-text' style={{ marginTop: 20 }}>{about.title}</h2>
							<p className='p2-text' style={{ marginTop: 10 }}>{about.description}</p>
						</motion.div>
					))
				}
			</div>
		</>
	)
}

export default AppWrap(
	MotionWrap(About, 'app__about'),
	'about',
	'app__whitebg'
);