import { Navigate, Outlet, useLocation } from "react-router"
import PropTypes from "prop-types"; 

import { useAuth } from "../hooks/useAuth";

const ProtectedRoutes = ({ children }) => {
    const location = useLocation();
    const isAuth = useAuth();

    return isAuth ? <Outlet /> : <Navigate to="/" replace state={{ from: location }} />
}

ProtectedRoutes.propTypes = {
    children: PropTypes.node.isRequired,
  };

export { ProtectedRoutes }