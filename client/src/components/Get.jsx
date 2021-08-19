//get

import React, { useState, useEffect } from "react";
import Axios from "axios";

import Table from "react-bootstrap/Table";
// import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// import DeleteIcon from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";

export const Get = (props) => {
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  //useEffect hace que se ejecute el estado sendNoticia cuando el componente se renderize.

  useEffect(() => {
    Axios.get("http://192.168.1.5:3001/api/get").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="listNoticias">
      <h1>{props.title}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripcion</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.nombre}</td>
              <td>{item.descripcion}</td>

              <td>
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<Edit />}
                >
                  Editar
                </Button>
                {/* <Button
                  onClick={() => deleteNoticia(item.id)}
                  variant="contained"
                  color="secondary"
                  size="small"
                  // className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  Eliminar
                </Button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
