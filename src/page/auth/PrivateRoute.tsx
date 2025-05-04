import { Navigate } from "react-router-dom";
import { useAuth } from "../../AuthContext";

function PrivateRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Nếu là Admin mà truy cập route dành cho User
  if (user.role !== "User") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default PrivateRoute;
