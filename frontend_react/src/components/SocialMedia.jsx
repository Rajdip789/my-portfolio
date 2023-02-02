import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';


function SocialMedia() {
  return (
	<div className='app__social'>
		<div>
			<a target="_blank" href='https://twitter.com/rajdip141'>
				<BsTwitter/>
			</a>
		</div>
		<div>
			<a target="_blank" href='https://www.linkedin.com/in/rajdip14/'>
				<FaLinkedin/>
			</a>
		</div>
		<div>
			<a target="_blank" href='https://www.facebook.com/rajdip.pul'>
				<FaFacebook/>
			</a>
		</div>
		<div>
			<a target="_blank" href='https://www.instagram.com/palrajdip33/'>
				<BsInstagram/>
			</a>
		</div>
	</div>
  )
}

export default SocialMedia