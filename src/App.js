import React, { useState } from 'react'
import { ThemeProvider } from './ThemeContext'
import FunctionComponent from './FunctionComponent'

function App() {
  return (
      <ThemeProvider>
        <FunctionComponent />
      </ThemeProvider>
      /*<button onClick={e => setDark(prevDark => !prevDark)}>Toggle theme</button>*/
  )
}

export default App