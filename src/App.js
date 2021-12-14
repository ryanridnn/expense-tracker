import React, { useState } from 'react'

function App() {
  const [state, setState] = useState(0)

  const addValue = () => {
    setState(state + 1)
  }

  const subtractValue = () => {
    setState(state--)
  }

  return (
    <div>
      <button onClick={addValue}>+</button>
      <span>{ state }</span>
      <button onClick={subtractValue}>-</button>
    </div>
  )
}

export default App