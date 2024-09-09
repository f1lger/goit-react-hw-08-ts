import css from "./RegisterPage.module.css";
export default function RegisterPage() {
  return (
    <>
      <div className={css.RegisterPageCont}>
        <form className={css.RegisterForm}>
          <label>
            <input type="submit" value="" placeholder="Name" />
          </label>
          <label>
            <input type="submit" value="" placeholder="Email" />
          </label>
          <label>
            <input type="submit" value="" placeholder="Password" />
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}
