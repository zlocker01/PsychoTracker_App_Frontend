import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FormInput } from "../components/FormInput";
import { clientAxios } from "../config/axios";
import { NavLink } from "../components/NavLink";

export const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [isValidToken, setIsValidToken] = useState(false);
  const [tokenAlert, setTokenAlert] = useState("");
  const [alert, setAlert] = useState("");
  const [isPasswordModified, setIsPasswordModified] = useState(false);

  const params = useParams();
  const { token } = params;

  // to protect the password if token isn't valid
  useEffect(() => {
    const confirmToken = async () => {
      try {
        await clientAxios.get(`/psychologist/forgotten-password/${token}`);
        setIsValidToken(true);
        setTokenAlert("Hemos verificado tu información, puedes cambiar la Contraseña");
      } catch (error) {
        setTokenAlert("Hubo un error con el enlace");
      }
    };
    confirmToken();
  }, []);

  // regular expresions
  const specialCharactersRegex = /[!@#$%^&*(),.?":{}|<>]/;
  const upperCaseRegex = /[A-Z]/;
  const numbersRegex = /[0-9]/;

  const handleInput = (e, data) => {
    switch (data) {
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

    if (password.length < 6) {
      setAlert("La Nueva Contraseña debe incluir al menos 6 cáracteres");
    } else if (password === "") {
      setAlert("El campo no puede estar vacio");
    } else if (!specialCharactersRegex.test(password)) {
      setAlert("La Nueva Contraseña debe tener al menos un cáracter especial");
    } else if (!upperCaseRegex.test(password)) {
      setAlert("La Nueva Contraseña debe tener al menos una letra mayúscula");
    } else if (!numbersRegex.test(password)) {
      setAlert("La Nueva Contraseña debe tener al menos un número");
    } else {
      try {
        const url = `/psychologist/forgotten-password/${token}`;
        const { data } = await clientAxios.post(url, { password });
        setAlert(data.msg);
        setIsPasswordModified(true)
      } catch (error) {
        setAlert(error.response.data.msg);
      }
    }
  };

  return (
    <>
      {isValidToken && (
        <form onSubmit={handleSubmit}>
          <h2>Cambia tu Contraseña</h2>
          <p>{tokenAlert}</p>
          <FormInput
            label="Nueva Contraseña"
            value={password}
            onChange={(e) => {
              handleInput(e, "password");
            }}
            data="password"
            type="password"
          />
          {alert !== "" && <p className="alert">{alert}</p>}
          <button>Cambiar Contraseña</button>
        </form>
      )}
      {isPasswordModified && <NavLink url="/" text="Iniciar Sesión" />}
    </>
  );
}
