import { useState } from 'react';
import Cam from './comps/Cam'
import Geo from './comps/Geo'
import Maps from './comps/Maps'
import './App.css'

function App() {
  const [mapCoords, setMapCoords] = useState(null);
  return (
    <div>
      <h1>React Demo: Webcam, Geolocation, and Google Maps</h1>
      <Cam />
      <hr />
      <Geo mapCoords={mapCoords} setMapCoords={setMapCoords} />
      <hr />
      <Maps mapCoords={mapCoords} setMapCoords={setMapCoords} />
    </div>
  )
}

export default App
