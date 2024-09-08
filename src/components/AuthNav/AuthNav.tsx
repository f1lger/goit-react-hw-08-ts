import { Link } from "react-router-dom";
import css from "./AuthNav.module.css"
export default function AuthNav() {
  return (
    <div>
      <ul className={css.AuthNavList}>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </ul>
    </div>
  );
}
