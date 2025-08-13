import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [users, setUsers] = useState([])
    // const [auth, setAuth] = useState(null);

    const addNewUser = (user) => {
        setUsers((prev) => {
          return [...prev, {...user, id: uuidv4()}];
        })     
    }

  return <AuthContext.Provider value={{users, addNewUser}}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
