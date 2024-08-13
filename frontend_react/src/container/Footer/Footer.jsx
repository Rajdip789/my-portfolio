import React, { useState } from 'react'

import { images } from '../../constants'
import { client } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';
import './Footer.scss'

function Footer() {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' })
	const [isFormSubmitted, setIsFormSubmitted] = useState(false)
	const [loading, setLoading] = useState(false)

	const { name, email, message } = formData;

	const handleChangeInput = (e) => {
		const { name, value } = e.target;

		setFormData({ ...formData, [name]: value });
	}

	const handleSubmit = () => {
		setLoading(true)

		const contact = {
			_type: 'contact',
			name: name,
			email: email,
			message: message,
		}

		client.create(contact)
			.then(() => {
				setLoading(false);
				setIsFormSubmitted(true);
			})
	}
	return (
		<>
			<h2 className='head-text'>Take a <span>coffe</span> & <span>chat</span> with me</h2>
			<div className='app__footer-cards'>
				<div className='app__footer-card'>
					<img src={images.email} alt="email" />
					<a target="_blank" rel='noreferrer' href='mailto:palrajdip141@gmail.com' className='p-text'>palrajdip141@gmail.com</a>
				</div>
				<div className='app__footer-card'>
					<img src={images.mobile} alt="mobile" />
					<a target="_blank" rel='noreferrer' href='tel: +91 7059287406' className='p-text'>+91 7059287406</a>
				</div>
			</div>

			{
				!isFormSubmitted ?
					<div className='app__footer-form app__flex'>
						<div className='app__flex'>
							<input className='p-text' type='text' placeholder='your name' name='name' value={name} onChange={handleChangeInput} />
						</div>
						<div className='app__flex'>
							<input className='p-text' type='text' placeholder='your email' name='email' value={email} onChange={handleChangeInput} />
						</div>
						<div>
							<textarea className='p-text' type='text' placeholder='your message' name='message' value={message} onChange={handleChangeInput} />
						</div>
						<button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send message'}</button>
					</div>
					:
					<div>
						<h3 className='head-text'><span>Thank you</span> for getting in touch</h3>
					</div>
			}
		</>
	)
}

export default AppWrap(
	MotionWrap(Footer, 'app__footer'),
	'contact',
	'app__primarybg'
);
