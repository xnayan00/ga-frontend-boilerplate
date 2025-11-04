import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface ProtectedRouteProps {
  redirectTo?: string;
}

export default function ProtectedRoute({ redirectTo = "/" }: ProtectedRouteProps) {
  const [isAllowed, setIsAllowed] = useState<boolean>(true);

  if (!isAllowed) {
    return <Navigate to={redirectTo} />;
  }
  return <Outlet />;
}
