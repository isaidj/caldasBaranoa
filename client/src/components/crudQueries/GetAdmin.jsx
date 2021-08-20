//get

import React, { useState, useEffect } from "react";
import Axios from "axios";

import Table from "react-bootstrap/Table";
// // import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// // import DeleteIcon from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import useAuth from "../../auth/useAuth";
import { Capitalize } from "../Capitalize";
import DataTable from "react-data-table-component";
import EditarAdmin from "./EditarAdmin";

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      paddingLeft: "8px", // override the cell padding for head cells
      paddingRight: "8px",
    },
  },
  cells: {
    style: {
      paddingLeft: "8px", // override the cell padding for data cells
      paddingRight: "8px",
    },
  },
};
// const data2 = [{ id: 1, title: "Conan the Barbarian", year: "1982" }];
const columns = [
  {
    name: "Titular",
    selector: "nombre",
    sortable: true,
  },
  {
    name: "Cuerpo",
    selector: "descripcion",
    sortable: true,
  },
  {
    name: "Estudiante",
    selector: "fullName",
    sortable: true,
  },
];

export const GetAdmin = () => {
  // const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState(false);

  const userId = useAuth().getUser();
  console.log(userId);
  useEffect(() => {
    Axios.get("http://192.168.1.6:3001/api/getAllPubli", {
      params: {
        id: userId.idadmin,
      },
    }).then((response) => {
      setData(response.data);
      console.log(response);
    });
  }, [userId, update]);

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
