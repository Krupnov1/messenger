import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoute = ({ authed }) => 
    authed ? <Outlet /> : <Navigate to="/" replace />
