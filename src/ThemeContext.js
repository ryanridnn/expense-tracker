import React, { useState, useContext } from 'react'

const ThemeContext = React.createContext()
const ThemeUpdateContext = React.createContext()

export function useTheme() {
	return useContext(ThemeContext)
}

export function useUpdateTheme() {
	return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
	const [dark, setDark] = useState(false)

	function toggleTheme() {
		setDark(prevDark => !prevDark)
	}

	return (
		<ThemeContext.Provider value={dark}>
			<ThemeUpdateContext.Provider value={toggleTheme}>
				{ children }				
			</ThemeUpdateContext.Provider>
		</ThemeContext.Provider>
	)
}