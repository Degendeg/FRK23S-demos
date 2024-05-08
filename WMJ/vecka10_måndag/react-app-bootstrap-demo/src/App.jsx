import './App.css'
import Footer from './Footer'
import Header from './Header'
import { Row, Col } from 'react-bootstrap'
import TodoList from './TodoList'

function App() {

  return (
    <>
      <Header />
      <Row>
        <Col md={6}></Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center">
            <TodoList />
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  )
}

export default App
