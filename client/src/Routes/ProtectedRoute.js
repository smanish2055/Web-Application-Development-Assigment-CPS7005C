// ./Routes/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ allowedRole, children }) {
  const token = localStorage.getItem("token"); // or any auth check
  const role = localStorage.getItem("role");

  if (!token) {
    // Not logged in
    return <Navigate to="/login" replace />;
  }

  if (role !== allowedRole) {
    // Wrong role
    return <Navigate to="/login" replace />;
  }

  // Everything is fine
  return children;
}

export default ProtectedRoute;
