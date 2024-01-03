import { NavLink } from "./NavLink";
export const Footer = () => {
  return (
    <footer>
        <div className="contact-info">
          <h3>Contacto</h3>
          <p>
            Email de soporte:{" "}
            <a href="beristaindelamora@gmail.com">
              beristaindelamora@gmail.com
            </a>
          </p>
          <p>
            Página de soporte:{" "}
            <a href="diegoberistain.com">diegoberistain.com</a>
          </p>
        </div>
      <div className="copyright">
        <p>&copy; 2023 PsychoTracker. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
