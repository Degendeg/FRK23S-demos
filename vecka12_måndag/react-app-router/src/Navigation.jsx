import { NavLink } from "react-router-dom"

// Komponent för navigationsmenyn med länkar till olika sidor
const Navigation = () => {
  return (
    // <nav> element för navigationsmenyn
    <nav>
      {/* <ul> element för att lista upp länkarna */}
      <ul>
        {/* Användning av NavLink-komponenter för att skapa länkar */}
        {/* Utan Routes och Route-komponenter skulle inte NavLinks fungera korrekt */}
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  )
}
export default Navigation
