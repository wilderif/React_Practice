import { useDispatch } from "react-redux";

import classes from "./Auth.module.css";
import { authActions } from "../store/index";

const Auth = () => {
  const dispath = useDispatch();

  const loginHandler = (event) => {
    event.preventDefault();

    dispath(authActions.login());
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
