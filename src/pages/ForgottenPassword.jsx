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
      setTimeout(() => {
        setAlert("");
      }, 3000);
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
    <div className="form">
      <form className="form-access" onSubmit={handleSubmit}>
        <h2>¿Olvidaste tu Contraseña?</h2>
        <FormInput
          label="Correo"
          value={email}
          onChange={(e) => {
            handleInput(e, "email");
          }}
          data="email"
          type="text"
        />
        {alert !== "" && <p className="alert">{alert}</p>}
        <button>Recuperar Cuenta</button>

        <nav>
          <NavLink url="/register" text="Registrate" />
          <NavLink url="/" text="Iniciar Sesión" />
        </nav>
      </form>
    </div>
  );
};
