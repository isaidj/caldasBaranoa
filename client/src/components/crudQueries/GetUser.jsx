//get

import React, { useState, useEffect } from "react";
import Axios from "axios";

import Table from "react-bootstrap/Table";
// // import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";

// // import DeleteIcon from "@material-ui/icons/Delete";
// import Edit from "@material-ui/icons/Edit";
import useAuth from "../../auth/useAuth";
import EditarUser from "./EditarUser";

export const GetUser = ({ actualizar }) => {
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);
  const userId = useAuth().getUser();

  useEffect(() => {
    Axios.get("http://192.168.1.6:3001/api/getPubliUser", {
      params: {
        id: userId.idusuario,
      },
    }).then((response) => {
      setData(response.data);
      // console.log(response);
    });
  }, [userId, update, actualizar]);

  return (
    <div className="listNoticias">
      <h1>Publicaciones</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Titular</th>
            <th>Descripcion</th>

            {/* bodrder left solid */}
            <th>Editar y eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.idpublicaciones}</td>
              <td>{item.nom_publi}</td>
              <td>{item.des_publi}</td>

              <td>
                <EditarUser
                  idPubli={item.idpublicaciones}
                  nombre={item.nom_publi}
                  descripcion={item.des_publi}
                  areas={item.areas_idareas}
                  idUser={item.usuarios_idusuario}
                  actualizar={() => {
                    setUpdate(!update);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

/* <Button
                  onClick={() => deleteNoticia(item.id)}
                  variant="contained"
                  color="secondary"
                  size="small"
                  // className={classes.button}
                  startIcon={<DeleteIcon />}
                >
                  Eliminar
                </Button> */
