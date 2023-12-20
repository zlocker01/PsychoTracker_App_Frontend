import { Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  return (
    <>
      <h1>PsychoTracker</h1>
      
      <Outlet />
    </>
  );
}
