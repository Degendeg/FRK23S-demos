import './App.css'
import BlogList from './BlogList'

function App() {
  const blogs = [
    { title: 'First', body: 'Lorem ipsum dolor...', author: 'Mario', id: 1 },
    { title: 'Second', body: 'Lorem ipsum dolor...', author: 'Luigi', id: 2 },
    { title: '3rd', body: 'Lorem ipsum dolor...', author: 'Toad', id: 3 },
    { title: '4', body: 'Lorem ipsum dolor...', author: 'Peach', id: 4 },
  ]
  return (
    <>
      <BlogList blogs={blogs} myText="Hello World!" />
    </>
  )
}

export default App
