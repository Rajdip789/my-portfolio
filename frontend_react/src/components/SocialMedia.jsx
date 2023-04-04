import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function SocialMedia() {
  return (
	<div className='app__social'>
		<div>
			<a target="_blank" rel='noreferrer' href='https://github.com/Rajdip789'>
				<FaGithub/>
			</a>
		</div>
		<div>
			<a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/rajdip14/'>
				<FaLinkedin/>
			</a>
		</div>
		<div>
			<a target="_blank" rel='noreferrer' href='https://twitter.com/rajdip141'>
				<BsTwitter/>
			</a>
		</div>
		<div>
			<a target="_blank" rel='noreferrer' href='https://www.instagram.com/palrajdip33/'>
				<BsInstagram/>
			</a>
		</div>
	</div>
  )
}

export default SocialMedia