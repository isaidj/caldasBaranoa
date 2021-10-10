import axios from "axios";
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

  const updateUser = (urlWorking, idusuario) => {
    axios
      .get(urlWorking + "getUser", {
        params: {
          idusuario: idusuario,
        },
      })
      .then((res) => {
        // console.log(res.data);
        contextValue.login(res.data);
      });
  };

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
    updateUser,
  };
  // console.log(user);
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
    //children is the component that is being wrapped by this component (in this case, the App component)
  );
};
export default AuthProvider;
