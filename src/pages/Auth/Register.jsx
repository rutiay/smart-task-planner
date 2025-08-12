import { useState } from "react";
import styles from "./Auth.module.css";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", user.email);
    console.log("Password:", user.password);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Register</h2>

        <label>Name</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />

        <label className={styles.label}>Email</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />

        <label>Confirm Password</label>
        <input
          type="password"
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
          required
          className={styles.input}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
