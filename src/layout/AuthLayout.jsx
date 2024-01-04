import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <>
      <h1>PsychoTracker</h1>
      <Outlet />
    </>
  );
}
