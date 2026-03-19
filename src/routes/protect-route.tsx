import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const token = localStorage.getItem("auth_token");
  console.log(token);
  const location = useLocation();

  if (!token) {
    return <Navigate to=" /login" state={{ from: location }} replace />; // ← / inicial
  }

  return <>{children}</>;
}
