//insert
import Axios from "axios";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
// import { Get } from "./Get";

export const Insert = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  //funcion para hacer un post asignandole la direccion y la finformacion en un objeto.

  const sendData = () => {
    Axios.post("http://localhost:3001/api/insert", {
      nombre: nombre,
      descripcion: descripcion,
    }).then(() => {
      alert("Insertion realizada");
    });
    setNombre("");
    setDescripcion("");
    //use function reload() from Get.jsx
  };
  return (
    <div className="formInsert">
      <h1>Noticias ax</h1>
      <label> Nombre de la noticia</label>
      <TextField
        className="formInsert__nombre"
        type="text"
        name="nombre"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre}
      />
      <label> Descripción de la noticia</label>
      <TextField
        label="multiline"
        multiline
        rows={4}
        className="formInsert__descripcion"
        type="textarea"
        name="descripcion "
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion}
      />
      <Button onClick={(e) => sendData()}>Insertar</Button>
    </div>
  );
};
