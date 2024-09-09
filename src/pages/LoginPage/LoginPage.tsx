import css from "./LoginPage.module.css"
export default function LoginPage() {
  return (
    <form className={css.LoginForm}>
      <label>
        <input type="submit" value="" placeholder="Email" />
      </label>
      <label>
        <input type="submit" value="" placeholder="Password" />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}
