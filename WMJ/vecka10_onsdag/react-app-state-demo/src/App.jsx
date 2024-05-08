import './App.css'
import { useState } from 'react'
import Child from './Child'

function App() {
  // Deklarera reaktivt state för namn och data med useState-hook
  const [name, setName] = useState('Mario') // Reaktivt state för namn
  const [data, setData] = useState(['one', 'two', 'three']) // Reaktivt state för data

  // Variabel för statiskt (icke-reaktivt) namn
  // let name = 'Louise'

  // Objekt med statiskt (icke-reaktivt) data
  // let data = {
  //   studentName: name,
  //   school: 'JENSEN'
  // }

  // Funktion för att lägga till ny data till arrayen
  const dataEventHandler = () => {
    setData([...data, 'four'])
  }

  return (
    <>
      {/* Visa det reaktiva namnet */}
      <p>My name is: <strong>{name}</strong></p>
      {/* Visa det reaktiva datat som en strängifierad JSON */}
      <p>{JSON.stringify(data)}</p>
      <hr />
      {/* Rendera Child-komponenten och skicka med setName som prop */}
      <Child setName={setName} />
      {/* Knapp för att uppdatera datan i listan */}
      <button onDoubleClick={dataEventHandler}>Click to update list</button>
    </>
  )
}

export default App
