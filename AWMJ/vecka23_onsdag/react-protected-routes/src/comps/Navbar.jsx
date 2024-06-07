import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import fakeAuth from '../utils/fakeAuth';

/**
 * Navbar component represents the navigation bar of the application.
 * It displays links to different pages and handles authentication state.
 * @returns JSX element
 */
const Navbar = () => {
  // State to track authentication status
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // Hook to navigate between routes
  const navigate = useNavigate();

  // Effect to update authentication status
  useEffect(() => {
    setIsAuthenticated(fakeAuth.isAuthenticated);
  });

  // Function to handle logout
  const logout = () => {
    fakeAuth.signOut(() => {
      // Redirect to home page after logout
      navigate('/');
    });
  };

  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg id="svg" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52">
            <li><Link to="/">Home</Link></li>
            <li className="mt-2">{!fakeAuth.isAuthenticated ? <Link to="/login">Login</Link> : <span onClick={logout}>Logout</span>}</li> {/* Login/logout link */}
            <li className="mt-2"><Link to="/dashboard">Dashboard {isAuthenticated ? '' : '🔒'}</Link></li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl">Protected Routes 🧱</a>
      </div>
      <div className="navbar-end"></div>
    </div>
  )
}

export default Navbar;