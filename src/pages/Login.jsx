import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { NavLink } from "../components/NavLink";
import { useNavigate } from "react-router-dom";
import { clientAxios } from "../config/axios";
import { useAuth } from "../../hooks/useAuth";

export function Login() {
  // route to re-direct the user
  const navegate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState("");

  const { setAuth } = useAuth();

  const handleInput = (e, data) => {
    switch (data) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      default:
        console.error(`Unkown input ${data}`);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([email, password].includes("")) {
      setAlert("Todos los campos son obligatorios");
    } else {
      try {
        const url = "/psychologist/login";
        const { data } = await clientAxios.post(url, { email, password });
        localStorage.setItem("psychoTrackerToken", data.token);
        // re-direct the user to admin lyout
        setAuth(data);
        navegate("/admin");
      } catch (error) {
        setAlert(error.response.data.msg);
      }
    }
  }

  return (
    <>
      <h2>Inicia Sesion y Trackea A Tus Pacientes</h2>
      <form onSubmit={handleSubmit}>
      <FormInput
          label="Correo"
          value={email}
          onChange={(e) => {
            handleInput(e, "email");
          }}
          data="email"
          type="text"
        />
        <FormInput
          label="Contraseña"
          value={password}
          onChange={(e) => {
            handleInput(e, "password");
          }}
          data="password"
          type="password"
        />
        <p>{alert}</p>
        <button>Iniciar Sesión</button>
      </form>

      {/* Adding Link to get better performance */}
      <nav>
        <NavLink url="/register" text="Registrate" />
        <NavLink url="/forgotten-password" text="Olvidé Mi Contraseña" />
      </nav>
    </>
  );
}
