import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
export default function AppBar() {
  const ifUserLogedIn = false;
  return (
    <div className={css.AppBarCont}>
      <Navigation />
      {ifUserLogedIn ? <p>UserName*</p> : <AuthNav/>}
    </div>
  );
}
