import { Navbar } from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top" className="border-bottom border-secondary">
      <Navbar.Brand className="mx-auto">My Todo App</Navbar.Brand>
    </Navbar>
  );
}

export default Header;