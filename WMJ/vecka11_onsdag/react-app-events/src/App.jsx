import { useRef } from 'react'
import './App.css'
import Child from './Child'

function App() {
  const alertBtn = useRef()
  const secondaryBtn = useRef()

  const clickHandler = () => {
    // event.target kräver event som argument ovan i paranteserna ()
    // event.target.textContent = 'click to not alert'
    secondaryBtn.current.textContent = 'updated from clickHandler'
  }

  const secondaryClickHandler = () => {
    // event.target kräver event som argument ovan i paranteserna ()
    // event.target.textContent = 'updated through event.target'
    alertBtn.current.textContent = 'updated from secondaryClickHandler'
  }

  const inputHandler = () => {
    secondaryBtn.current.textContent = 'updated from inputHandler'
  }

  return (
    <>
      <h1>Demo App (React events repetition)</h1>
      <button id="btn" ref={alertBtn} onClick={clickHandler}>click to alert</button>
      {" "}
      <button id="btn" ref={secondaryBtn} onClick={secondaryClickHandler}>click to console.log</button>
      <hr style={{ margin: '20px' }} />
      <label>Write something </label>
      <input type="text" onChange={inputHandler} />
      <hr style={{ margin: '20px' }} />
      <Child clickHandler={clickHandler} />
    </>
  )
}

export default App
