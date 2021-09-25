import React from "react";
import styled from "styled-components";
import { HtmlToText } from "../components/Funciones";
import { RielBig, RielLittle } from "./Rieles/RielsHorizontal";

const urlImg = (name) => {
  return `https://caldasbaranoa.s3.amazonaws.com/${name}`;
};

const SecondSection = (props) => {
  const { publi } = props;

  // const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const maxWords = (text, max) => {
    if (text.length > max) {
      return text.substr(0, max) + "...";
    } else {
      return text;
    }
  };

  const openNewNoticia = (idNoticia) => {
    //open noticia with react router
    window.location.href = `/noticia/${idNoticia}`;
    // window.open(`/noticia/${idNoticia}`);
  };
  return (
    <>
      <RielBig publi={publi.slice(8, 11)} />
      <RielLittle publi={publi.slice(11, 17)} />
      {/* h1 con estilo en linea */}
      <h1 style={{ textAlign: "center" }}> asdasd</h1>
    </>
  );
};

export default SecondSection;

const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
