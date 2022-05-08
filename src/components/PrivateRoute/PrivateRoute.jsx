import { useAuthState } from "react-firebase-hooks/auth";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import auth from "../../firebase/firebase";

export default function PrivateRoute({ children }) {
  // navigate unauthorized users to login page
  const [user, loading, error] = useAuthState(auth);

  const location = useLocation();

  if (loading) {
    return null;
  }

  if (!user || error) {
    return <Navigate to={"/sign-in"} state={{ from: location }} replace />;
  }

  return children;
}
