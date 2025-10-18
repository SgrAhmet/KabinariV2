import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";

function ProtectedRoute({ children }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <p>Yükleniyor...</p>;
  if (!user) return <Navigate to="/Giris" />;

  return children;  
}

export default ProtectedRoute;
