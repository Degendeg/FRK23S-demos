import { useState } from 'react'
import './App.css'
import MyComp from './MyComp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <React.Fragment>
      <div>
        <h1>Hello World!</h1>
        <p>Lorem ipsum</p>
        <MyComp />
      </div>
    </React.Fragment>
  )
}

export default App
