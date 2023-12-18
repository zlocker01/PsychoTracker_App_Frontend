import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { NavLink } from "../components/NavLink";
import { clientAxios } from "../config/axios";

export const ForgottenPassword = () => {
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState("");

  const handleInput = (e, data) => {
    switch (data) {
      case "email":
        setEmail(e.target.value);
        break;
      default:
        console.error(`Unkown input ${data}`);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // regular expresions
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      setAlert("El correo es obligatorio");
      return;
    } else if (!emailRegex.test(email)) {
      setAlert("Ingresa un Correo válido");
      return;
    } else {
      try {
        const url = '/psychologist/forgotten-password/';
        const { data } = await clientAxios.post(url, { email });
        setAlert(data.msg);
      } catch (error) {
        setAlert(error.response.data.msg);
      }
    }
  };

  return (
    <>
      <h2>¿Olvidaste tu Contraseña?</h2>
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
        <p>{alert}</p>
        <button>Recuperar Cuenta</button>
      </form>

      <nav>
        <NavLink url="/register" text="Registrate" />
        <NavLink url="/" text="Iniciar Sesión" />
      </nav>
    </>
  );
};
