import React from "react";
import { IoIosSettings } from "react-icons/io";
import styled from "styled-components";
import ImgProfileExample from "../images/profileExample.jpeg";
import MenuUser from "./MenuUser";
import ProfileUserModal from "./ProfileUserModal";
const ProfileUserDashboard = (props) => {
  const user = props.auth.user.user[0];
  const userName = user.usuario;
  const nombre = user.nombres + " " + user.apellidos;
  const [isOpen, setIsOpen] = React.useState(false);
  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <DivContainer isOpen={props.isOpen}>
        <div className="img-container">
          <img src={ImgProfileExample} alt="profile" />
        </div>
        <div className="info-container">
          <p className="p username">{userName} </p>
          <p className="settings" onClick={() => setIsOpen(true)}>
            {nombre} <IoIosSettings className="icon" />
          </p>
        </div>
      </DivContainer>
      <ProfileUserModal
        isOpen={isOpen}
        handleOpenMenu={() => setIsOpen(false)}
      />
    </>
  );
};

export default ProfileUserDashboard;
const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e6e6e657;
  padding-bottom: 10px;
  .img-container {
    width: 50px;
    width: ${(props) => (props.isOpen ? "100px" : "50px")};
    height: ${(props) => (props.isOpen ? "100px" : "50px")};
    border: 2px solid #ffffff;
    border-radius: 50%;
    transition: all 0.1s ease-in-out;
    img {
      //img dentro del container
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
      border-radius: 50%;
    }
  }

  .info-container {
    position: relative;
    width: 50%;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-around;
    align-items: center;
    color: #ffffff;
    bottom: 0;

    .icon {
      font-size: 0.8rem;
    }
    p {
      font-size: 0.8rem;
      /* font-weight: bold; */
      white-space: nowrap;
      margin: 0;
      margin-top: 5px;
      padding: 0;
      overflow: hidden;
      color: #ffffff;
    }
    .username {
      font-size: 0.9rem;
      font-weight: bold;
    }
    .settings {
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
