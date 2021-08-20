//user page

import React from "react";

import useAuth from "../auth/useAuth";
import { Crud } from "../components/crudQueries/Crud";

const UserDashboard = () => {
  const auth = useAuth();
  const user = auth.getUser();
  //to capital leter all words
  const capitalize = (str) =>
    str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  //if user=admin then load the admin page else load the user page
  if (user.nombre === "admin") {
    return (
      <div>
        <h1>ADMIN DASHBOARD</h1>
        <h2>Bienvenido {capitalize(user.nombre)}</h2>
        <Crud />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Dashboard</h1>
        <h2>
          Bienvenido {capitalize(user.nombres + " " + user.apellidos)}, esta es
          tu zona de noticias.
        </h2>
        <Crud />
      </div>
    );
  }
};

export default UserDashboard;
