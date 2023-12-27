import { useEffect, useState } from "react";
import { AdminNav } from "../components/AdminNav";
import { useAuth } from "../hooks/useAuth";

export const EditProfile = () => {
  //   calling hook to authentication
  const { auth, updateProfile } = useAuth();
//   profile state to save the auth
  const [profile, setProfile] = useState({});
  const [alert, setAlert] = useState('');
  
  useEffect(() => {
      setProfile(auth.psychologist);
  }, [auth]);

  const handleChangeFields = (e) => {
    //   copy of object with profile and just modifying the field I need to
    setProfile({ ...profile, [e.target.name]: e.target.value });
}

const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email } = profile;

  if ([name, email].includes("")) {
    setAlert("El nombre y correo no pueden estar vacios");
  }
  return;
}

// calling update profile
updateProfile(profile);

  return (
    <>
      <AdminNav />
      <h2>Perfil</h2>
      <h3>Edita tu perfil:</h3>
      <p>{alert}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre
          <input
            type="text"
            name="name"
            value={profile.name || ""}
            onChange={handleChangeFields}
          />
        </label>
        <label>
          Correo
          <input
            type="text"
            name="email"
            value={profile.email || ""}
            onChange={handleChangeFields}
          />
        </label>
        <label>
          Numero
          <input
            type="text"
            name="phone"
            value={profile.phone || ""}
            onChange={handleChangeFields}
          />
        </label>
        <button>Actualizar Perfil</button>
      </form>
    </>
  );
};
