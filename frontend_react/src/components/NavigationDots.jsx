import React from 'react'

function NavigationDots({ active }) {
  return (
	<div className='app__navigation'>
		{
			['home', 'technologies', 'projects', 'skills', 'contact'].map((item, index) => (
				<a 
					href={`#${item}`} 
					key={item + index}
					className='app__navigation-dot'
					style={active === item ? {backgroundColor: '#ff3a4e'} : {}}
				/>
			))
		}
	</div>
  )
}

export default NavigationDots