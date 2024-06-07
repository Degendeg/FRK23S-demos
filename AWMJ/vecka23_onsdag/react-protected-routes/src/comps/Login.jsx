import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import fakeAuth from '../utils/fakeAuth';

/**
 * Login component renders the login form and handles user authentication.
 * @returns JSX element
 */
const Login = () => {
  // State variables for username, password, authentication status, loading state, and navigation
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [correctCredentials, setCorrectCredentials] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to handle user login
  const login = () => {
    // Reset state variables and set loading state to true
    location.state = null;
    setCorrectCredentials(null);
    setIsLoading(true);

    // Simulate authentication process with delay
    setTimeout(() => {
      if (username === 'username' && password === 'password') {
        // If credentials are correct, sign in and navigate to dashboard
        fakeAuth.signIn(() => {
          setCorrectCredentials(true);
          navigate('/dashboard');
        });
      } else {
        // If credentials are incorrect, set authentication status to false
        setCorrectCredentials(false);
      }
      // Set loading state to false after authentication process is complete
      setIsLoading(false);
    }, 3000);
  };

  return (
    <div>
      <h2>Login 🔐</h2>
      {/* Input fields for username and password */}
      <input type="text" placeholder="username" className="mt-4 mb-4 input input-bordered w-full max-w-xs"
        value={username} onChange={(e) => setUsername(e.target.value)} />
      <br />
      <input type="password" placeholder="password" className="mb-4 input input-bordered w-full max-w-xs"
        value={password} onChange={(e) => setPassword(e.target.value)} />
      <br />
      {/* Login button */}
      <button className="btn btn-block btn-neutral" onClick={login}>Login</button>
      {/* Error message for incorrect credentials */}
      {correctCredentials === false && <div role="alert" className="ml-1 mt-4 w-52 alert alert-error">
        <span className="text-xs text-center">Wrong username or password, try again!</span>
      </div>}
      {/* Warning message for protected route access */}
      {location.state && location.state.protectedRoute && <div role="alert" className="ml-1 mt-4 w-52 alert alert-warning">
        <span className="text-xs">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Please login first.</span>
      </div>}
      {/* Loading spinner */}
      {isLoading && <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-gray-900 bg-opacity-70">
        <span className="loading loading-spinner loading-lg"></span>
      </div>}
    </div>
  );
};

export default Login;