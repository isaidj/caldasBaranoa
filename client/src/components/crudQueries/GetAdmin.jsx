//get

import React, { useState, useEffect } from "react";


import Table from "react-bootstrap/Table";
// // import TextField from "@material-ui/core/TextField";

// // import DeleteIcon from "@material-ui/icons/Delete";

import useAuth from "../../auth/useAuth";
import { Capitalize } from "../Capitalize";

import EditarAdmin from "./EditarAdmin";
import useGlobalVariables from "../../global/useGlobalVariables";
import axios from "axios";

export const GetAdmin = ({ actualizar }) => {
  const urlWorking = useGlobalVariables().urlWorking;
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);

  const userId = useAuth().getUser();
  console.log(userId);
  useEffect(() => {
    axios.get(urlWorking + "getAllPubli", {
      params: {
        id: userId.idadmin,
      },
    }).then((response) => {
      setData(response.data);
      console.log(response);
    });
  }, [userId, update, actualizar, urlWorking]);

  return (
    <div className="listNoticias">
      <h1>{data.length} Publicaciones</h1>
      {/* <DataTable
        title="Arnold Movies"
        columns={columns}
        customStyles={customStyles}
        data={data}
      /> */}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Titular</th>
            <th>Descripcion</th>
            <th>Usuario</th>
            {/* bodrder left solid */}
            <th>Editar y eliminar</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.idpublicaciones}</td>
              <td>{item.nombre}</td>
              <td>{item.descripcion}</td>
              <td>
                <Capitalize palabras={item.fullName} />
              </td>
              <td style={{ borderLeft: "1.5px solid", color: "grey" }}>
                <div>
                  <EditarAdmin
                    idPubli={item.idpublicaciones}
                    nombre={item.nombre}
                    descripcion={item.descripcion}
                    areas={item.areas_idareas}
                    idUser={item.usuarios_idusuario}
                    fullName={item.fullName}
                    actualizar={() => {
                      setUpdate(!update);
                    }}
                  />
                </div>
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
