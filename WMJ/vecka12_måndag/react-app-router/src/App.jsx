import './App.css'
import Navigation from './Navigation'
import Switch from './Switch'

// Huvudkomponenten för applikationen
function App() {

  return (
    // Renderar rubrik, navigationsmeny och route-växlare
    <>
      {/* Rubrik för applikationen */}
      <h1>Demo App för React Router</h1>
      {/* Renderar navigationsmenyn */}
      <Navigation />
      {/* Renderar route-växlaren */}
      <Switch />
    </>
  )
}

export default App
