import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ loggedIn, children }) => {
  if (!loggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
};
