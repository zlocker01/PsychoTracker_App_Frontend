import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export default function ProtectedRoute() {
  const { auth, isCharging } = useAuth();
  // spinner
  if (isCharging) return "Cargando...";
  return (
    <>
      <Header />
      {auth ? <Outlet /> : <Navigate to="/" />}
      <Footer />
    </>
  );
}
