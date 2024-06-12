import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  // när komponenten initieras, hämta från vårat API och sätt datat om OK annars visa fel (CORS relaterat)
  useEffect(() => {
    axios.get(import.meta.env.VITE_API_CORS_URL + 'data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        // visa ett felmeddelande till dig som student så du ser att CORS är problemet
        if (error.message === 'Network Error') {
          setError(`Access to the requested resource has been blocked by CORS policy. Please check the servers 'Access-Control-Allow-Origin' header.`);
        } else {
          setError(error.message);
        }
      });
  }, []);

  const handlePost = () => {
    axios.post(import.meta.env.VITE_API_CORS_URL + 'post', {
      test: 'test'
    })
      .then(function (response) {
        console.log(response);
        setResponse(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setResponse(error.message + ' CORS, check console.');
      });
  }

  const handleDelete = () => {
    axios.delete(import.meta.env.VITE_API_CORS_URL + 'delete')
      .then(function (response) {
        console.log(response);
        setResponse(response.data);
      })
      .catch(function (error) {
        console.log(error);
        setResponse(error.message + ' CORS, check console.');
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1><a href="https://www.stackhawk.com/blog/react-cors-guide-what-it-is-and-how-to-enable-it/" target="_blank">CORS</a> Demo</h1>
        {data && <p>{data.message}</p>}
        {!data && !error && <p>Loading...</p>}
        {error && <p>{error}</p>}
        <button onClick={handlePost}>Try POST</button>{" "}
        <button onClick={handleDelete}>Try DELETE</button>
        <br /><br /><br />
        {response && <code style={{ fontSize: '2em', fontWeight: 'bold' }}>{response}</code>}
      </header>
    </div>
  );
}

export default App;

