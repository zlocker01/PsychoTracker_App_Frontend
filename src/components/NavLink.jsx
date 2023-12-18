// navegation links
import { Link } from "react-router-dom";

export function NavLink({ url, text }) {
  return (
    <>
      <Link to={url}>{text}</Link>
      <br />
    </>
  );
}
