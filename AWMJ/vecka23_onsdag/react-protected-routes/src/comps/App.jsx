import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from '../utils/ProtectedRoute';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Navbar from './Navbar';

/**
 * App component renders the application layout with navigation and routes.
 * It uses React Router to define routes and ProtectedRoute for protected routes.
 * @returns JSX element
 */
function App() {
  return (
    <>
      <Navbar /> {/* Render navigation component */}
      <div className="h-screen flex items-start mt-28 justify-center"> {/* Main content container */}
        <Routes> {/* Define routes */}
          <Route path="/" element={<Home />} /> {/* Home route */}
          <Route path="/login" element={<Login />} /> {/* Login route */}
          <Route element={<ProtectedRoute />}> {/* Protected routes */}
            <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard route */}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
