import React, { useContext } from 'react'
import { useTheme, useUpdateTheme } from './ThemeContext'

function FunctionComponent({ children }) {
	const dark = useTheme()
	const toggleTheme = useUpdateTheme()

	const themeStyles = {
		backgroundColor: dark ? 'black' : 'white',
		color: dark ? 'white' : 'black',
		padding: '20px',
		margin: '20px'
	}

	return (
		<>
			<button onClick={toggleTheme}>Toggle Theme</button>
			<div style={themeStyles}>
				Function Component
			</div>
		</>
	)
}

export default FunctionComponent