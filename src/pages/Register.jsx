import { useState } from "react";
import { FormInput } from "../components/FormInput";
import { NavLink } from "../components/NavLink";
import { clientAxios } from "../config/axios";

export const Register = () => {
  // states for inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [alert, setAlert] = useState("");

  // handle for inputs when typing
  const handleInput = (e, data) => {
    switch (data) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "repeatPassword":
        setRepeatPassword(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      default:
        console.error(`Unkown input ${data}`);
        break;
    }
  };

  // handle for form validation
  const handleSubmit = async (e) => {
    e.preventDefault();

    // regular expressions
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const specialCharactersRegex = /[!@#$%^&*(),.?":{}|<>]/;
    const upperCaseRegex = /[A-Z]/;
    const numbersRegex = /[0-9]/;

    if ([name, email, password, repeatPassword, phone].includes("")) {
      setAlert("Por favor llenar todos los Campos");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    } else if (!emailRegex.test(email)) {
      setAlert("Ingresa un Correo válido");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    } else if (phone.length < 10) {
      setAlert("El Telefono debe tener 10 digitos");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    } else if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      repeatPassword.trim() === "" ||
      phone.trim() === ""
    ) {
      setAlert("Por favor llene todos los Campos sin espacios vacios");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    } else if (!upperCaseRegex.test(password) || !numbersRegex.test(password)) {
      setAlert(
        "La Contraseña debe contener al menos una letra Mayúscula y un Número"
      );
      setTimeout(() => {
        setAlert("");
      }, 3000);
    } else if (password.length < 6) {
      setAlert("La Contraseña debe tener al menos 6 caracteres");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    } else if (!specialCharactersRegex.test(password)) {
      setAlert("La Contraseña debe incluir al menos algun carácter especial");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    } else if (password !== repeatPassword) {
      setAlert("Las Contraseñas deben ser iguales");
      setTimeout(() => {
        setAlert("");
      }, 3000);
    } else {
      // uploading user in DB
      try {
        const url = "/psychologist";
        await clientAxios.post(url, { name, email, password, repeatPassword, phone });
        setAlert("¡Ya está! Revisa tu Correo");
      } catch (error) {
        setAlert(error.response.data.msg  || "Hubo un error en la solicitud");
      }
    }
  };

  return (
    <div className="form">
      <form className="form-access" onSubmit={handleSubmit}>
        <h2>Regístrate Ahora Y Empieza A Trackear Pacientes</h2>
        <FormInput
          label="Nombre"
          value={name}
          onChange={(e) => {
            handleInput(e, "name");
          }}
          data="name"
          type="text"
        />
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
          label="Telefono"
          value={phone}
          onChange={(e) => {
            handleInput(e, "phone");
          }}
          data="phone"
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
        <FormInput
          label="Contraseña Nuevamente"
          value={repeatPassword}
          onChange={(e) => {
            handleInput(e, "repeatPassword");
          }}
          data="repeatPassword"
          type="password"
        />
        {alert !== "" && <p className="alert">{alert}</p>}
        <button>Registrar Cuenta</button>

        <nav>
          <NavLink url="/" text="Iniciar Sesión" />
          <NavLink url="/forgotten-password" text="Olvidé Mi Contraseña" />
        </nav>
      </form>
    </div>
  );
};
