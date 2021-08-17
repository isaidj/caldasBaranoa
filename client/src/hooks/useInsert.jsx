import Axios from "axios";
import { useEffect } from "react";

import React from "react";

const Insert = (props) => {
  useEffect(() => {
    Axios.post("http://localhost:3001/api/insertUsuario", {
      nombre: props.firstName,
      descripcion: props.password,
    }).then(() => {
      alert("Insertion realizada");
    });
    console.log("sadfsad");
  });
  return;
};

export default Insert;
