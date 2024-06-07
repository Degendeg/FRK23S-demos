import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import fakeAuth from './fakeAuth';

/**
 * ProtectedRoute component to control access to protected routes.
 * If the user is authenticated, the Outlet renders the child routes.
 * If the user is not authenticated, it redirects to the login page.
 * @returns JSX element
 */
const ProtectedRoute = () => (
  fakeAuth.isAuthenticated ? ( // Check if user is authenticated
    <Outlet /> // Render child routes using Outlet, guide: https://t.ly/Bg9uF
  ) : (
    <Navigate to="/login" replace state={{ protectedRoute: true }} /> // Redirect to login page
  )
);

export default ProtectedRoute;
