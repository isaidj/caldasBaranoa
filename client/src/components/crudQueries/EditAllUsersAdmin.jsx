import Edit from "@material-ui/icons/Edit";
import BtnDelete from "@material-ui/icons/Delete";
import React, { useRef } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { Button as ButtonM } from "@material-ui/core";

import { CgClose } from "react-icons/cg";

import { useForm } from "react-hook-form";
import Axios from "axios";
import useGlobalVariables from "../../global/useGlobalVariables";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { DeleteUser } from "../tagComponents/AlertsFunctions";

const EditAllUsersAdmin = ({
  idUser,

  actualizar,
}) => {
  // console.log(idPubli);
  const urlWorking = useGlobalVariables().urlWorking;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [confirmIsOpen, setConfirmIsOpen] = React.useState(false);
  const modal = useRef(null);
  const { register, handleSubmit } = useForm();
  const divLogin = useRef(null);
  const modalConfim = useRef(null);
  let history = useHistory();

  return (
    <div>
      <ButtonsContainer>
        <ButtonM
          //small button danger delete
          variant="contained"
          color="secondary"
          style={{ marginLeft: "5px", backgroundColor: "#d22519" }}
          className="btn-delete"
          onClick={() => DeleteUser(urlWorking, null, null, idUser, actualizar)}
        >
          borrar
        </ButtonM>
      </ButtonsContainer>
    </div>
  );
};

export default EditAllUsersAdmin;
const desktopStartWidth = 902;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;

const ButtonsContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  .btn-edit {
    height: 30px;
    width: auto;
  }
  .btn-delete {
    height: 30px;
    width: auto;
  }

  ${tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${mobile} {
  }
`;
