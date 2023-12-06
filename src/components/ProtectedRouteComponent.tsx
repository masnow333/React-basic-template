import { LayoutRouteProps, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/auth";
import React from "react";

export const ProtectedRoute = ({ children }: LayoutRouteProps) => {
  const isAuth = useAuth();
  if (!isAuth) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};