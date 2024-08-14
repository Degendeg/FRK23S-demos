import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const StorageDemo = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['myCookie']);
  const [localStorageValue, setLocalStorageValue] = useState('');
  const [sessionStorageValue, setSessionStorageValue] = useState('');

  // Load values from localStorage and sessionStorage on component mount
  useEffect(() => {
    const localStorageItem = localStorage.getItem('myLocalStorage');
    if (localStorageItem) {
      setLocalStorageValue(localStorageItem);
    }

    const sessionStorageItem = sessionStorage.getItem('mySessionStorage');
    if (sessionStorageItem) {
      setSessionStorageValue(sessionStorageItem);
    }
  }, []);

  // Update localStorage when input changes
  const handleLocalStorageChange = (e) => {
    const value = e.target.value;
    setLocalStorageValue(value);
    localStorage.setItem('myLocalStorage', value);
  };

  // Update sessionStorage when input changes
  const handleSessionStorageChange = (e) => {
    const value = e.target.value;
    setSessionStorageValue(value);
    sessionStorage.setItem('mySessionStorage', value);
  };

  // Update cookie when input changes
  const handleCookieChange = (e) => {
    const value = e.target.value;
    setCookie('myCookie', value, { path: '/' });
  };

  // Clear localStorage value
  const clearLocalStorage = () => {
    localStorage.removeItem('myLocalStorage');
    setLocalStorageValue('');
  };

  // Clear sessionStorage value
  const clearSessionStorage = () => {
    sessionStorage.removeItem('mySessionStorage');
    setSessionStorageValue('');
  };

  // Clear cookie value
  const clearCookie = () => {
    removeCookie('myCookie');
  };

  return (
    <div>
      <div className="box">
        <h2>
          <a href="https://www.npmjs.com/package/react-cookie" target="_blank" rel="noopener noreferrer">Cookie</a>
          <sup onClick={clearCookie} style={{ cursor: 'pointer' }}>Clear</sup>
        </h2>
        <input
          type="text"
          value={cookies.myCookie || ''}
          onChange={handleCookieChange}
        />
        <p><strong>Value</strong>: {cookies.myCookie}</p>
      </div>

      <div className="box">
        <h2>
          localStorage <sup onClick={clearLocalStorage} style={{ cursor: 'pointer' }}>Clear</sup>
        </h2>
        <input
          type="text"
          value={localStorageValue}
          onChange={handleLocalStorageChange}
        />
        <p><strong>Value</strong>: {localStorageValue}</p>
      </div>

      <div className="box">
        <h2>
          sessionStorage <sup onClick={clearSessionStorage} style={{ cursor: 'pointer' }}>Clear</sup>
        </h2>
        <input
          type="text"
          value={sessionStorageValue}
          onChange={handleSessionStorageChange}
        />
        <p><strong>Value</strong>: {sessionStorageValue}</p>
      </div>
    </div>
  );
};

export default StorageDemo;