import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/Auth";

const ProtectedRoute = ({ children }) => {
    const { user } = useAuth()
    return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
