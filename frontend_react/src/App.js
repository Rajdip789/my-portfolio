import React from 'react'
import { Header, Skills, Work, About, Footer } from './container';
import { Navbar } from './components';
import './App.scss';

function App() {
	return (
		<div>
			<Navbar/>
			<Header />
			<About />
			<Work />
			<Skills />
			{/* <Testimonial /> */}
			<Footer />
		</div>
	)
}

export default App