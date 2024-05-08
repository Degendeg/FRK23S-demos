import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  // Skapar ref för knappen och input-elementet
  const myBtn = useRef()
  const myInput = useRef()
  // State för att hantera värdet i input-elementet
  const [inputValue, setInputValue] = useState('')

  // Eventhanterare för att uppdatera värdet i input-elementet
  const showFeedbackHandler = (evt) => {
    setInputValue(evt.target.value)
    // Alternativt sätt att få värdet från input-elementet med useRef
    // setInputValue(myInput.current.value)
  }

  // Eventhanterare för knappens klick-händelse
  const clickHandler = () => {
    // Visar en alert när knappen klickas
    alert('bye')
    // Döljer knappen genom att ändra dess synlighet
    myBtn.current.style.visibility = 'hidden'
    // Alternativt sätt att dölja knappen med event.target
    // event.target.style.visibility = 'hidden'
  }

  return (
    // Huvudkomponenten med React-logotyp, input-element, text och knapp
    <div className="card">
      {/* Länk till Reacts officiella webbplats med React-logotyp */}
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      {/* Input-element för att skriva in text */}
      <input type="text"
        ref={myInput} // Referens för att använda input-elementet med useRef
        onInput={showFeedbackHandler} // Eventhanterare för att uppdatera input-värdet
        placeholder="Write something.." />
      {/* Text som visar det användaren skriver i input-elementet */}
      <p>You are typing: {inputValue}</p>
      <hr />
      {/* Knapp som använder useRef för att dölja sig själv när den klickas */}
      <button onClick={clickHandler}
        ref={myBtn}>Click me</button>
    </div>
  )
}

export default App
