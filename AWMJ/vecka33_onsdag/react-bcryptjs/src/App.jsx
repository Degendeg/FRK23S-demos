import { useEffect } from 'react'
import './App.css'
import TestBcrypt from './comps/TestBcrypt'

function App() {
  useEffect(() => {
    document.title = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => (c === 'x' ? Math.floor(Math.random() * 16) : (Math.floor(Math.random() * 4) + 8)).toString(16));
  }, []);
  return (
    <>
      <h1>Password tester</h1>
      <TestBcrypt />
    </>
  )
}

export default App
