import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute() {
  const { auth, isCharging } = useAuth();
  // spinner
  if (isCharging) return "Cargando...";
  return (
    <>
      {auth ? (
        // <header>
          <Outlet />
        // </header>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
}
