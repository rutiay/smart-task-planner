import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Auth.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.container}>
      <form onSubmit={loginSubmitHandler}>
        <h2>Login</h2>

        <label htmlFor="email">Email</label>
        <input
          placeholder="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log In</button>
      </form>

      <p>Not a member? <Link to='/register'>Sign up now</Link></p>
    </div>
  );
};

export default Login;
