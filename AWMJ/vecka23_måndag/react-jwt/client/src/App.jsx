import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [jwtToken, setJwtToken] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    setResponse('');
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      await new Promise(resolve => setTimeout(resolve, 2000));

      if (!response.ok) {
        throw new Error('Invalid username or password');
      }

      const data = await response.json();

      /* 
        if .env is dev on server
      */
      setJwtToken(data.token);

      /* 
        if .env is prod on server
      */
      // setResponse(data.message);

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/private', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${jwtToken}`
        }
      });

      if (!response.ok) {
        setError(response.url + ' - ' + response.statusText)
      }

      const data = await response.json();
      setResponse(JSON.stringify(data));
    } catch (error) {
      setError(JSON.stringify(error));
      setResponse('Error occurred. Check console for details.');
    }
  };

  return (
    <div className="App">
      <h1>JWT demo</h1>
      <div>
        <label>Username: </label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="clearfix"></div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="clearfix"></div>
      <div>
        <button onClick={handleLogin} disabled={loading}>Login</button>
      </div>
      {loading && (
        <div className="loading-spinner-overlay">
          <div className="loading-spinner"></div>
        </div>
      )}
      {error && <p style={{ borderLeft: '8px solid red' }}>{error}</p>}
      {jwtToken &&
        <div className="wrapper">
          <p style={{ borderLeft: '8px solid green', paddingLeft: '30px', maxWidth: '400px' }}>
            JWT token: <span style={{ wordBreak: 'break-word' }}>{jwtToken} <div class="clearfix"></div> {response}</span>
          </p>
        </div>
      }
      <div className="clearfix"></div>
      <button onClick={handleSubmit}>Get Private Data</button>
    </div>
  );
}

export default App;