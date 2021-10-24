import React from "react";
import Buscar from "../components/Buscar";
import LoginModal from "../components/LoginModal";
import MenuLateral from "../components/MenuLateral";
import styled from "styled-components";
// import LogoCole from "../images/logoColegio.png";

const HeaderSecondary = () => {
  return (
    <>
      <PreheaderStyled>
        <HeaderStyled>
          <div className="div__left">
            <MenuLateral />
            <Buscar />

            {/* <img src={LogoCole} alt="logo" className="logo" /> */}
          </div>

          <LoginModal className="login" />
        </HeaderStyled>
      </PreheaderStyled>
    </>
  );
};

export default HeaderSecondary;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
const PreheaderStyled = styled.div`
  background-color: #2b2d42;
  height: 50px;
  display: flex;

  align-items: center;

  /* box-shadow: 0px 10px 50px -10px rgba(0, 0, 0, 0.5); */

  .social-networks {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
  }
  img {
    width: 80%;
    height: auto;
  }
  ${mobile} {
  }
`;
//increse width as viewport size decreases

const HeaderStyled = styled.div`
  height: auto;
  display: flex;
  width: 70%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;
  //classs of Buscar
  .btn_open {
    color: #fff;
  }
  //-----------------------------
  .div__left {
    display: flex;

    align-items: center;
    width: calc(50%);
    .iconSearch {
      color: #f1f1f1;
      font-size: 1.3rem;
    }
  }

  .titulo {
    cursor: default;
    user-select: none;
    font-size: 2.5rem;
    font-weight: bold;
    color: #d33232;
    margin-left: 20px;
    margin-left: auto;
  }
  .logo {
    width: 100px;
    height: auto;
    margin-right: 20px;
  }
  .BtnOpenLogin {
    background-color: transparent;
  }
  .BtnOpenLogin:hover {
    background-color: #8d99ae;
  }
  .btn_open {
    background-color: transparent;
  }
  ${mobile} {
    width: 100%;
  }
  ${tablet} {
    width: 100%;
  }
`;
