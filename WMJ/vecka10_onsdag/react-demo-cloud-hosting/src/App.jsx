import { useState } from 'react'
import './App.css'

/*
  OBS!
    Se README.md för beskrivning
*/

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello from Netlify!!! <strong>And I have a GitHub repo!!</strong></h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Hello JENSEN students, are you feeling great?!
        </p>
      </div>
      <p className="read-the-docs">
        This is a fake footer
      </p>
    </>
  )
}

export default App
