import React, { useState, useCallback } from 'react';
import './App.css'
import Child from './Child';

function App() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="card">
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <Child count={count} />
    </div>
  );
}

export default App