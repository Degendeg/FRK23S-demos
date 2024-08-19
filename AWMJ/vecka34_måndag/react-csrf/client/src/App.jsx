import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DOMPurify from 'dompurify';
import { useCookies } from 'react-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

function App() {
  const [data, setData] = useState('');
  const [operationResult, setOperationResult] = useState('');
  const [cookie, setCookie] = useCookies(['XSRF-TOKEN']);

  useEffect(() => {
    // Hämta CSRF-token från servern när komponenten mountas
    // axios.get('http://localhost:3333/api/csrf-tokennnn') // visa catch { .. }
    axios.get(import.meta.env.VITE_API_CSRF_URL + 'csrf-token')
      .then(response => {
        setCookie('XSRF-TOKEN', response.data.csrfToken, { path: '/' });
        toast.info(<div>useEffect triggered!<br />CSRF token set! ✅</div>);
      })
      .catch(error => {
        console.error('Error fetching CSRF token:', error);
        toast.error(<div>Error fetching CSRF token!
          <small dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(error.response ? error.response.data : '<br />...is .env created, is server running? ⚠️') }}>
          </small></div>
        );
      });
  }, []);

  const performOperation = () => {
    // Utför en operation med CSRF-token
    axios.post(import.meta.env.VITE_API_CSRF_URL + 'fake-post', { data }, {
      headers: {
        'X-CSRF-Token': cookie['XSRF-TOKEN'] + 'fff'
        // 'X-CSRF-Token': cookie['XSRF-TOKEN']
      }
    })
      .then(response => {
        setOperationResult(response.data.message);
      })
      .catch(error => {
        console.error('Error performing operation:', error);
        toast.error(<div>Error performing operation! <br />
          <small>${error.message + ' ' + error.response.data}</small></div>
        );
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CSRF Demo</h1>
        <input type="text" value={data} onChange={e => setData(e.target.value)} />
        <div className="clearfix"></div>
        <button disabled={!data} onClick={performOperation}>Perform Operation</button>{" "}
        <button disabled={!operationResult} onClick={() => { setOperationResult(''); setData('') }}>Clear operation</button>
        {operationResult && <p className="result">{operationResult}</p>}
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;