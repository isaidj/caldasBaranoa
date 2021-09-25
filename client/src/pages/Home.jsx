import Axios from "axios";
import React, { useState, useEffect } from "react";

import Esquema from "../components/Esquema";

import { HomefullWithStyled, HomeStyled } from "./PagesStyled";
import useGlobalVariables from "../global/useGlobalVariables";
import SwiperAutoplay from "../components/SwiperAutoplay";
import SwiperFreeMode from "../components/SwiperFreeMode";
import styled, { keyframes } from "styled-components";
import {
  MasVistos,
  NuestraSeleccion,
  Tendencias,
} from "../components/HomeTiposSecciones";

const Home = ({ actualizar }) => {
  window.document.title = "NC-Inicio";
  const urlWorking = useGlobalVariables().urlWorking;
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get(urlWorking + "getAllPublicHome").then((response) => {
      setData(response.data);
      // console.log(response.data);
    });
  }, [actualizar, urlWorking]);

  // console.log(data);
  const esquema = (index, item) => {
    if (index <= 0) {
      return <Esquema item={item} tipo={1} />;
    } else if (index >= 1 && index <= 3) {
      return <Esquema item={item} tipo={2} />;
    } else if (index > 3 && index <= 5) {
      return <Esquema item={item} tipo={3} />;
    }
  };
  // console.log(data);
  //si data tiene datos
  if (data.length > 0) {
    return (
      <>
        {/* <Example /> */}
        <HomeStyled>
          {/* slice  data */}

          {/* Columna izquierda 1 */}
          <div className="column1">
            {data.slice(6, 11).map((item, index) => (
              <div key={index + 1}>
                <Esquema tipo={3} item={item} />
              </div>
            ))}
          </div>
          {/* Columna del medio 2 */}
          <div className="column2">
            {data.slice(0, 3).map((item, index) => (
              <div key={index + 1}>{esquema(index, item)}</div>
            ))}

            <div className="colum2__3colunms">
              {data.slice(3, 6).map((item, index) => (
                <div key={index + 1}>{<Esquema tipo={3} item={item} />}</div>
              ))}
            </div>
          </div>
          {/* Columna derecha 3 */}
          <div className="column3">
            <h2>RELEVANTES</h2>
            {data.slice(11, 15).map((item, index) => (
              <div key={index + 1}>
                <Esquema tipo={4} item={item} />
              </div>
            ))}
          </div>
        </HomeStyled>

        {/* <SwiperAutoplay data={data} /> */}
        <SwiperFreeMode data={data} />

        <HomeSecondStyled>
          <div className="column1">
            <MasVistos data={data} />
          </div>
          <div className="column2">
            <NuestraSeleccion />
          </div>
          <div className="column3">
            <Tendencias />
          </div>
        </HomeSecondStyled>
      </>
    );
  } else {
    return (
      <HomeStyled>
        {/* slice  data */}

        {/* Columna izquierda 1 */}
        <div className="column1"></div>
        <img
          src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          alt="loading"
        />
        <div className="column2">
          {/* // loading image internet  */}
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="loading"
          />
        </div>

        <div className="column3">
          <img
            src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
            alt="loading"
          />
        </div>
      </HomeStyled>
    );
  }
};

export default Home;

const HomeSecondStyled = styled(HomeStyled)`
  margin-top: 20px;
  max-width: 70%;
  grid-template-columns: 30% 50% 20%;
`;
