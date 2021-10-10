import React from "react";
import Buscar from "../components/Buscar";
import LoginModal from "../components/LoginModal";
import MenuLateral from "../components/MenuLateral";
import styled from "styled-components";

// import { Loading } from "../components/tagComponents/Alerts";
// import LogoCole from "../images/logoColegio.png";

const Header = (props) => {
  //el promedio de 4 numeros es 9, si 3 de ellos son 3,5 y 12 entonces el 4 numero

  return (
    <>
      <PreheaderStyled>
        {/* social networks */}
        <div className="social-networks">
          <a href="https://www.facebook.com/Instituci%C3%B3n-Educativa-Francisco-Jos%C3%A9-de-Caldas-de-Baranoa-250429628372458">
            <img
              src="https://img.icons8.com/color/48/000000/facebook.png"
              alt="facebook"
            />
          </a>
          <a href="https://www.instagram.com/caldasbaranoa/">
            <img
              src="https://img.icons8.com/color/48/000000/instagram-new.png"
              alt="instagram"
            />
          </a>
          <a href="https://www.youtube.com/channel/UCFItFa6glezmXS2bQZ4gN1Q">
            <img
              src="https://img.icons8.com/color/48/000000/youtube-play.png"
              alt="youtube"
            />
          </a>
        </div>
      </PreheaderStyled>

      <HeaderStyled width={props.width}>
        <div className="div__left">
          <MenuLateral />
          <Buscar className="buscar" />

          <a href="/" className="titulo">
            I.E FRANCISCO JOSÉ DE CALDAS
          </a>

          {/* <img src={LogoCole} alt="logo" className="logo" /> */}
        </div>

        <LoginModal className="login" />
      </HeaderStyled>
    </>
  );
};

export default Header;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
const PreheaderStyled = styled.div`
  background-color: #2b2d42;
  height: 50px;
  .social-networks {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 20px;
    height: 100%;
  }
  img {
    width: 50%;
    height: auto;
  }
  ${mobile} {
  }
`;
//increse width as viewport size decreases

const HeaderStyled = styled.div`
  height: 100px;
  display: flex;

  width: ${(props) => props.width || "70%"};
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  transition: all 0.5s ease-in-out;

  .div__left {
    display: flex;

    align-items: center;
    gap: 10px;
    /* width: calc(50%); */
  }

  .titulo {
    cursor: default;
    user-select: none;
    font-size: 2rem;
    font-weight: bold;
    color: #d90429;
    margin-left: 20px;
    margin-left: auto;
    cursor: pointer;
    text-align: center;
  }
  .logo {
    width: 100px;
    height: auto;
    margin-right: 20px;
  }

  ${mobile} {
    width: 100%;
  }
  ${tablet} {
    width: 100%;
  }
`;
