import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ loggedIn, children }) => {
  if (loggedIn) {
    return <Navigate to="/profile" replace />;
  }
  alert("You are not logged in");
  return children;
};
