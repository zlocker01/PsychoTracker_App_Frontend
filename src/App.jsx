import ProtectedRoute from "./layout/ProtectedRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthLayout } from "./layout/AuthLayout";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { ForgottenPassword } from "./pages/ForgottenPassword";
import { ConfirmAccount } from "./pages/ConfirmAccount";
import { NewPassword } from "./pages/NewPassword";
import { AuthProvider } from "./context/AuthProvider";
import { AdminPatients } from "./pages/AdminPatients";

export function App() {
  return (
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AuthLayout />}>
              <Route index element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
              <Route path="confirmation/:token" element={<ConfirmAccount />}></Route>
              <Route path="forgotten-password" element={<ForgottenPassword />}></Route>
              <Route path="forgotten-password/:token" element={<NewPassword />}></Route>
            </Route>
            <Route path="/admin" element={<ProtectedRoute/>}>
              <Route index element={<AdminPatients/>}></Route>
              {/* <Route path="" element={}></Route> */}
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
  );
}
