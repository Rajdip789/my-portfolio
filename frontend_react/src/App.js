import React, { useContext } from 'react'
import { Header, Testimonial, Skills, Work, About, Footer } from './container';
import { Navbar } from './components';
import './App.scss';

import { DarkModeContext } from './context/darkModeContext';

function App() {
	const { darkMode } = useContext(DarkModeContext)

	return (
		<div className={darkMode ? "app__dark" : ""}>
			<Navbar/>
			<Header />
			<About />
			<Work />
			<Skills />
			<Testimonial />
			<Footer />
		</div>
	)
}

export default App