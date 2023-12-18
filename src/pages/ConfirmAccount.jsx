import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "../components/NavLink";
import { clientAxios } from "../config/axios";

export const ConfirmAccount = () => {
  const params = useParams();
  const { token } = params;
  const [alert, setAlert] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    const confirmation = async () => {
      try {
        const url = `/psychologist/confirmation/${token}`;
        // using URL base here
        const { data } = await clientAxios.get(url);
        setIsConfirmed(true);
        setAlert(data.msg);
      } catch (error) {
        setAlert(error.response.data.msg);
      }
    };

    confirmation();
  }, []);

  return (
    <>
      <h2>Confirmando Cuenta</h2>
      <p>{alert}</p>
      {isConfirmed && <NavLink url="/" text="Iniciar Sesión" />}
    </>
  );
};
