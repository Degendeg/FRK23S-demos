import React, { useState, useEffect } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { JSONTree } from 'react-json-tree';

const FetchComp = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/todos');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`${response.status} Unexpected error.\n\nPlease try again or contact support.`);
        }
        const result = await response.json();
        setTimeout(() => setData(result), 3333);
      } catch (err) {
        setError(err);
      }
    };

    fetchData().catch(err => {
      console.error('Error caught by promise catch:', err);
      setError(err);
    });
  }, [url]);

  if (error) {
    return <div style={{ background: '#950000', padding: '100px', fontSize: '3em', textAlign: 'left' }}>Error: {error.message}</div>;
  }

  if (!data) {
    return <InfinitySpin
      visible={true}
      width="200"
      color="#DCDCDC"
      ariaLabel="infinity-spin-loading"
    />;
  }

  return (
    <div>
      <button onClick={() => setUrl('https://jsonplaceholder.typicode.com/invalid-endpoint')}>Alter URL</button>
      <h1 style={{ color: '#41B52B' }}>Data fetched successfully</h1>
      <JSONTree data={data} />
    </div>
  );
};

export default FetchComp;
