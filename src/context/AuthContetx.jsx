import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    // const [auth, setAuth] = useState(null);

  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthContextProvider };
