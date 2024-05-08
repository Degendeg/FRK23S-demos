import React, { useState, useEffect } from 'react' // vi hämtar core react, men också useState o useEffect som hooks. kortkommando imruu
import _ from 'underscore';
import Child1 from './Child1'; // barnkomponenter från samma katalog (comps)
import Child2 from './Child2'; // barnkomponenter från samma katalog (comps)
import '../styles/App.css' // vi skapar en styles katalog, där ligger stylesheetet

function App() {
  const [data, setData] = useState(null); {/* state hook, kommer senare i kursen. data = getter, setData = setter  */ }
  const arr = ['foo', 'bar', 'baz', 'biz']; {/* statisk array med strängar  */ }
  useEffect(() => {
    {/* hook för att hantera sidoeffekter i din app, kommer senare i kursen */ }
    setData('boz');
  }, [])
  const clickHandler = () => {
    {/* en funktion för att uppdatera state, kopplas till en onClick */ }
    setData('This has been updated from my onClick attached to a button');
  }

  return (
    <>
      <div>{data}</div> {/* dynamiskt värde som visar vad som är i state, via gettern */}
      <button onClick={clickHandler}>Click me</button> {/* knapp med click handler, referens till funktion. om jag invokar den clickHandler() så körs den direkt, det vill jag inte. */}
      <hr />
      <Child1 message={_.sample(arr)} /> {/* child komponent som rendereras av App, där .sample kommer från underscore (finare läsbarhet, väljer slumpmässigt från array) */}
      <Child2 message={_.sample(arr)} /> {/* child komponent som rendereras av App, där .sample kommer från underscore (finare läsbarhet, väljer slumpmässigt från array) */}
    </>
  )
}

export default App