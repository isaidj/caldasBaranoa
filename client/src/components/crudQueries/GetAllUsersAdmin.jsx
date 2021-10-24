import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import useGlobalVariables from "../../global/useGlobalVariables";
import { Table } from "../DataTable";
import { urlImg } from "../Funciones";
import user_example from "../../images/user_example.png";
import AdminDashboardContext from "../../context/ContextAdminDashboard";
import styled from "styled-components";
import EditAllUsersAdmin from "./EditAllUsersAdmin";
import { PubliUsersAdminModal } from "../PubliUsersAdminModal";

const GetAllUsersAdmin = () => {
  const { update } = useContext(AdminDashboardContext);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlWorking = useGlobalVariables().urlWorking;
  const [updateUsers, setUpdateUsers] = useState(false);
  const getAllUsers = async () => {
    const response = await axios.get(urlWorking + "getAllUsers");
    setUsers(response.data);
    setLoading(false);
    // console.log(response);
    // setUsers(response.data);
  };
  const openALlPubliOfUser = async (id) => {
    const response= await axios.get(urlWorking + "getAllPubliUser", {
      params: {
        id: id,
      },
    });

   
  };

  useEffect(() => {
    getAllUsers();
  }, [loading, update, updateUsers]);
  const columns = React.useMemo(
    () => [
      {
        Header: "USUARIOS",
        columns: [
          {
            Header: "N°",
            accessor: "index",
          },
          {
            Header: "Foto",
            accessor: "foto",
          },
          {
            Header: "Usuario",
            accessor: "usuario",
          },
          { Header: "Nombre", accessor: "nombres" },
          { Header: "Apellido", accessor: "apellidos" },
          { Header: "Grado", accessor: "grado" },
          { Header: "N° P", accessor: "total_publicaciones" },
          { Header: "Acciones", accessor: "acciones" },
        ],
      },
    ],
    []
  );
  if (users.length > 0) {
    return (
      <TableStyled>
        <Table
          columns={columns}
          data={users.map((user, index) => ({
            ...user,
            index: index + 1,
            foto: (
              <img
                src={
                  user.url_img_perfil !== null
                    ? urlImg(user.url_img_perfil)
                    : user_example
                }
                alt="foto"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  borderRadius: "50%",
                }}
              />
            ),
            acciones: (
              <EditAllUsersAdmin
                idUser={user.idusuario}
                actualizar={() => setUpdateUsers(!updateUsers)}
              />
            ),
            
          }))}
          openALlPubliOfUser={(value) => openALlPubliOfUser(value)}
        />
      </TableStyled>
    );
  } else {
    return <h1>Cargando...</h1>;
  }
};

export default GetAllUsersAdmin;

const TableStyled = styled.div``;
