import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Spinner } from "../components/Spinner";

export default function ProtectedRoute() {
  const { auth, isCharging } = useAuth();
  // spinner
  if (isCharging) return <Spinner />;
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
