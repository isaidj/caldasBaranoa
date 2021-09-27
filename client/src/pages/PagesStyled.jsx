////////ESTILOS DE PAGINAS///////////////////////
import styled, { css, keyframes } from "styled-components";

const desktopStartWidth = 992;

const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;

//menu horizontal compact red
export const MenuStyled = styled.div`
  width: 100%;

  height: 50px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  li {
    display: flex;
    height: 100%;
  }

  li:hover {
    cursor: pointer;
    /* animation: slow 0.4s forwards; */
  }

  @keyframes slow {
    0% {
      background-color: rgba(211, 29, 29, 0);
    }

    100% {
      background-color: rgb(211, 29, 29);
    }
  }

  li a {
    color: #dadada;
    font-size: 1rem;
    font-weight: bold;
    height: 100%;

    line-height: 0;
    padding: 1.5rem 1rem;
  }
  ${mobile} {
  }
`;

//GRID centered 1 column width 15% , 2 column width 70% , 3 column width 15%
const opacity = keyframes`
0% {
  opacity: 0;
}
100% {
  opacity: 1;
}
`;
export const HomeStyled = styled.div`
  min-height: 100vh;
  max-width: 70%;

  display: grid;

  grid-template-columns: 20% 60% 20%;

  height: auto;
  margin: 0 auto;
  padding: 0;
  animation: ${opacity} 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  strong {
    font-weight: bold;
  }

  .column1 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .column2 {
  }
  .colum2__3colunms {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .column3 {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title_column {
    font-size: 1.6rem;
    font-weight: bold;
    margin-top: 15%;
  }
  ${mobile} {
    max-width: 100%;
    grid-template-columns: 100%;

    .column1 {
      display: none;
    }
    .column2 {
      width: 100%;
    }
    .column3 {
      display: none;
    }
  }
  ${tablet} {
    max-width: 100%;
  }
`;
export const HomefullWithStyled = styled.div``;

export const PageNoticeStyled = styled.div`
  max-width: 70%;

  display: grid;

  grid-template-columns: 20% 60% 20%;

  height: auto;
  margin: 0 auto;
  margin-top: 4rem;
  padding: 0;

  transition: all 0.3s ease-in-out;
  strong {
    font-weight: bold;
  }

  .column1 {
  }
  .column2 {
  }
  .colum2__3colunms {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  .column3 {
  }
  ${mobile} {
    max-width: 100%;
    grid-template-columns: 100%;

    .column1 {
      display: none;
    }
    .column2 {
      width: 100%;
    }
    .column3 {
      display: none;
    }
  }
  ${tablet} {
    max-width: 100%;
  }
`;

export const FooterStyled = styled.div`
  background-color: rgb(18, 16, 38);
  height: auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
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
  ${mobile} {
  }
`;
