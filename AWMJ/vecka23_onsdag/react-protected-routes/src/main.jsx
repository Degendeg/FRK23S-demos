import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './comps/App.jsx'
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // Router är alias för BrowserRouter, kommer från import på rad 4
  <Router>
    <App />
  </Router>
)
