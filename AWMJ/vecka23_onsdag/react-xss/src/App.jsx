import { useState, useRef } from 'react'; // Import necessary React hooks
import purify from 'dompurify'; // Import the dompurify library
import './App.css'; // Import the CSS file for styling

function App() {
  const [value, setValue] = useState("<img onError=alert('Hacked!') src='fafsafsa.com'>"); // Define state variable and setter function for the input value
  const resultRef = useRef(null); // Create a ref for the result element

  // read and processed by the server-side environment during the application's build or runtime
  // .env is located in root folder
  console.log('env file:', import.meta.env.VITE_SOME_KEY)

  return (
    <>
      <h1>Enter something dangerous here</h1>
      {/* Render a textarea for input */}
      <textarea className="xss-textarea" value={value} onChange={(e) => setValue(e.target.value)}></textarea>
      <br />
      {/* Render a button to sanitize and display the input */}
      <button className="xss-btn" onClick={() => resultRef.current.innerHTML = purify.sanitize(value, {
        FORBID_TAGS: ['marquee']
      })}>Send</button>
      <br />
      {/* Render a div to display the sanitized input */}
      <div ref={resultRef}></div>
    </>
  );
}

export default App;