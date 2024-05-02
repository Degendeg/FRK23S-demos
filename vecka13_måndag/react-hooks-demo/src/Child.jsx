import { useState, useEffect } from "react"
const Child = () => {
  const [test, setTest] = useState(0)
  useEffect(() => {
    setTest(test + 1)
  }, [])

  return (
    <div>
      <h4>I am a child component!</h4>
      <h5>Test is {test}</h5>
    </div>
  )
}
export default Child