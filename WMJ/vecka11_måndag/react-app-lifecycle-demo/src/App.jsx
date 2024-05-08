import { useState } from 'react'
import './App.css'
import Counter from './Counter';
import SubCounter from './SubCounter';


function App() {
  const [showCounter, setShowCounter] = useState(false);
  const [count3, setCount3] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Our App</h1>
        <button onClick={() => setShowCounter(!showCounter)}>
          {showCounter ? "Hide Counter" : "Show Counter"}
        </button>
        {showCounter && <Counter />}
        <div style={{ margin: '20px' }}>
          <button style={{ margin: '10px' }} onClick={() => setCount3(count3 + 1)}>incr count3</button>
          <SubCounter count3={count3} />
        </div>
      </div>
    </>
  )
}

export default App
