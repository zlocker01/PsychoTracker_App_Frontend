import { NavLink } from "./NavLink";
import { useAuth } from "../../hooks/useAuth";

export const Header = () => {
  const { logOut } = useAuth();
  
  return (
    <header>
      <div>
        <h1>PsychoTracker</h1>
      </div>
      <nav>
        <NavLink url="/admin" text="Pacientes" />
        <NavLink url="/admin" text="Perfil" />
        <button type="button" onClick={logOut}>Cerrar Sesión</button>
      </nav>
    </header>
  );
};
