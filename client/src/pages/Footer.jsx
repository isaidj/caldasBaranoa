import React from "react";

import styled from "styled-components";
const Footer = () => {
  //footer withour bootstrap
  return (
    <FooterStyled>
      <div className="left">
        <h1>Institucion Educativa Francisco José de Caldas de Barano</h1>
        <p>
          PORTAL WEB OFICIAL DE NOTICAS, DE LA INSTITUCIÓN EDUCATIVA FRANCISCO
          JOSÉ DE CALDAS DE BARANOA ATLÁNTICO (COLOMBIA)
        </p>
      </div>
      <div className="right">
        <div className="contacto">
          <h3>Contacto</h3>
          <p>Tienes alguna duda?</p>
          <p>
            <i className="fas fa-phone"></i>
            (57) 1 477 807
          </p>
          <p>
            <i className="fas fa-envelope"></i>

            <a href="mailto:">correo@gmail.com</a>
          </p>
        </div>

        <div className="social">
          <a href="https://www.facebook.com/">
            <img
              src="https://img.icons8.com/color/48/000000/facebook-new.png"
              alt="facebook"
            />
          </a>
          <a href="https://www.instagram.com/">
            <img
              src="https://img.icons8.com/color/48/000000/instagram-new.png"
              alt="instagram"
            />
          </a>

          <a href="https://www.youtube.com/">
            <img
              src="https://img.icons8.com/color/48/000000/youtube-play.png"
              alt="youtube"
            />
          </a>
        </div>
      </div>
    </FooterStyled>
  );
};

export default Footer;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
const FooterStyled = styled.footer`
  background-color: #2b2d42;
  height: auto;
  display: flex;

  flex-direction: row;

  justify-content: space-between;
  .left {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-top: 10px;

    h1 {
      color: #fff;
      font-size: 1.5rem;
      /* font-weight: bold; */
      margin-bottom: 0;
    }
    p {
      color: #fff;
      font-size: 0.9rem;
      margin-bottom: 0;
    }
  }
  .right {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 10rem;
    margin-top: 10px;
    .contacto {
      color: #fff;
      font-size: 1rem;
      margin-right: 1rem;
      margin-left: 1rem;
    }
    .social {
      a {
        img {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  p {
    color: #fff;
    font-size: 1rem;
    margin-bottom: 0;
  }

  li {
    display: flex;
    height: 100%;
  }
  li a {
    color: #dadada;
    font-size: 1rem;
    font-weight: bold;
    height: 100%;
    line-height: 0;
    padding: 1.5rem 1rem;
  }
  ${tablet} {
    flex-direction: column;
  }
  ${mobile} {
  }
`;
