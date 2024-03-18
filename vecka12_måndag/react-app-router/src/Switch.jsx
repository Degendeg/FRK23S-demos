import { Routes, Route } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"

// Komponent som hanterar växlingen mellan olika rutter
const Switch = () => {
  return (
    // Wrapper för alla routes
    <div className="routes-wrapper">
      {/* Använder React Router:s Routes för att definiera vägar */}
      <Routes>
        {/* Route för startsidan */}
        <Route path="/" element={<Home />} />
        {/* Route för "Om" sidan */}
        <Route path="/about" element={<About />} />
        {/* Route för "Kontakt" sidan */}
        <Route path="/contact" element={<Contact />} />
        <Route render={() => <h1>404: page not found</h1>} />
      </Routes>
    </div>
  )
}
export default Switch
