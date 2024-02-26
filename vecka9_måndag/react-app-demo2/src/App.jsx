import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <div>
        <h1>Hello World!</h1>
        <p>Lorem ipsum</p>
      </div>
    </React.Fragment>
  )
}

export default App
