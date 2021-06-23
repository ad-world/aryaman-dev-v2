import React, { useState } from 'react';
import Toggle from 'react-toggle'
import Sun from '../img/sun.png'
import Moon from '../img/moon.png'

export default function DarkMode () {
	const [ isDark, setIsDark ] = useState(localStorage.getItem('theme') === 'dark' ?  true : false);

	const darkMode = () => {
		const theme = localStorage.getItem('theme');
		setIsDark(!isDark);

		if (theme === 'light') {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else if (theme === 'dark') {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	};
	return <Toggle 
				onChange={darkMode} 
				checked={isDark} 
				className="toggle-color"
				icons={{
					checked: <img src={Moon} alt='Dark mode' />,
					unchecked: <img src={Sun} alt='Light mode' className='w-full h-full'/>
				}}
				speed={1}
			/>;
}
