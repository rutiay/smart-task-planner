import { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const USERS_TOKEN_LOCAL_STORAGE = "users";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  // const [auth, setAuth] = useState(null);

  useEffect(() => {
    const usersArr =
      JSON.parse(localStorage.getItem(USERS_TOKEN_LOCAL_STORAGE)) || [];

    setUsers(usersArr);
  }, []);

  const addNewUser = (user) => {
    setUsers((prev) => {
      const usersArr = [...prev, { ...user, id: uuidv4() }];
      localStorage.setItem(USERS_TOKEN_LOCAL_STORAGE, JSON.stringify(usersArr));
      return usersArr;
    });
  };

  // const login = (user) => {

  // }

  return (
    <AuthContext.Provider value={{ users, addNewUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthContextProvider };
