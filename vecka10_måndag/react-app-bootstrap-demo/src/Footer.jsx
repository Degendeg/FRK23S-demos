import { Navbar } from 'react-bootstrap'

function Footer() {
  const currentYear = new Date().getFullYear()
  const name = "Sebastian Degerman"
  return (
    <Navbar bg="dark" variant="dark" fixed="bottom" className="border-top border-secondary">
      <Navbar.Brand className="mx-auto">Copyright &copy; {currentYear} | {name}</Navbar.Brand>
    </Navbar>
  );
}

export default Footer;