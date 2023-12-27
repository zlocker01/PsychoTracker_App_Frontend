import { NavLink } from "../components/NavLink";

export const AdminNav = () => {
  return (
    <nav>
        <NavLink url="/admin/profile" text="Perfil" />
        <NavLink url="/admin/changePassword" text="Cambiar Contraseña" />
    </nav>
  );
};
