import { Outlet, Navigate } from "react-router-dom";

export const PublicRoute = ({ authed }) => 
    !authed ? <Outlet /> : <Navigate to="/profile" replace />