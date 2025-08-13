import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContetx";
import styles from "./Auth.module.css";

const Register = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const {addNewUser} = useContext(AuthContext);

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    if(user.password !== user.confirmPassword){
      alert("wrong");
      return;
    }
    addNewUser(user);
    navigate('/dashboard')
  };

  return (
    <div className={styles.container}>
      <form onSubmit={registerSubmitHandler}>
        <h2>Register</h2>

        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          value={user.confirmPassword}
          onChange={(e) =>
            setUser({ ...user, confirmPassword: e.target.value })
          }
          required
        />

        <button type="submit">Register</button>
      </form>

          <p>Already have an account? <Link to='/login'>Login here</Link></p>
    </div>
  );
};

export default Register;
