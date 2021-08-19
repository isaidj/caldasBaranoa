import React, { createContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  //almacenar estado de usuario en sesion
  useEffect(() => {
    //try es para comprobar si la instruccion se cumple correctamente
    //si no se cumple lanzará una excepcion
    try {
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log("Hay un error con local Storage");
    }
  }, [user]);

  const contextValue = {
    user,
    login(user) {
      setUser({ user });
    },
    getUser() {
      return user.user[0];
    },
    logout() {
      setUser(null);
    },
    isLogged() {
      return !!user;
    },
  };
  // console.log(user);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
