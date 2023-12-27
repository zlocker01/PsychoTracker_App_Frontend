import { useState } from "react";
import { AdminNav } from "../components/AdminNav";
import { FormInput } from "../components/FormInput";

export const ChangePassword = () => {
const [password, setPassword] = useState("");
const [alert, setAlert] = useState("");
const [isPasswordModified, setIsPasswordModified] = useState(false);

return (
  <>
    <AdminNav />
    <h2>Cambiar Contraseña</h2>
    {/* <form onSubmit={handleSubmit}>
        <p>alert</p>
    <FormInput
      label="Contaseña"
      type={text}
      placeholder="Ingresa tu contraseña actual"
      value={password}
      onChange={setPassword}
    />
    </form> */}
  </>
);
};
