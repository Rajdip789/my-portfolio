import React from 'react'
import { Header, Skills, Projects, About, Footer } from './container';
import { Navbar } from './components';
import './App.scss';

function App() {
	return (
		<div>
			<Navbar/>
			<Header />
			<About />
			<Projects />
			<Skills />
			{/* <Testimonial /> */}
			<Footer />
		</div>
	)
}

export default App