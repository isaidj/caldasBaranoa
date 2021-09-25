//components of styles
import styled, { css } from "styled-components";
//use css to style the component
const desktopStartWidth = 992;
// const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const imgStyle = css`
  //border radius of the image
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
`;
const pStyle = css`
  border-left: 2px solid #949494;
  margin-top: 5px;
`;

export const Esquema1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: all 0.2s ease;

  h2 {
    font-size: 1.9rem;
    font-weight: bold;
    backface-visibility: hidden;
  }
  h2:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  img {
    ${imgStyle}
    width: 100%;
    height: auto;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.02);

    transition: all 0.2s ease;
  }

  .body {
    ${pStyle}
    width: 100%;
    height: auto;
    text-align: center;
    font-size: 1rem;
    font-weight: normal;
    padding-left: 10px;
  }
`;
export const Esquema2 = styled.div`
  padding: 20px;
  transition: all 0.2s ease;

  .container {
    display: grid;
    grid-template-columns: 1.4fr 1fr;

    gap: 0px 10px;
    grid-auto-flow: row;
    grid-template-areas:
      "body img"
      "body img";
  }
  div {
    grid-area: body;
    display: flex;
    flex-direction: column;

    h2 {
      width: 100%;
      font-size: 1.2rem;
      font-weight: bold;
    }
    h2:hover {
      text-decoration: underline;
      cursor: pointer;
    }

    .body {
      height: auto;
      text-align: left;
      font-size: 1rem;
      font-weight: normal;
    }
  }

  .img {
    grid-area: img;
    ${imgStyle}
    //center the image
    width: 100%;
    height: 90%;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.02);

    transition: all 0.2s ease;
  }

  ${mobile} {
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto 1fr;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas:
        "title title"
        "body img";
    }

    .title {
      grid-area: title;
      width: 100%;
      font-size: 1.2rem;
      font-weight: bold;
    }

    .body {
      grid-area: body;
      height: auto;
      text-align: left;
      font-size: 1rem;
      font-weight: normal;
    }

    .img {
      grid-area: img;
      ${imgStyle}

      width: 100%;
      height: 100%;
    }
  }
`;

export const Esquema3 = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: auto;
  padding: 20px;
  transition: all 0.2s ease;
  /* span {
    position: absolute;
    top: 3px;
    left: -10px;
    width: 6px;
    height: 6px;

    background-color: #cf2222;
    border-radius: 100%;
  } */
  h2 {
    position: relative;
    font-size: 1rem;
    font-weight: bold;
  }
  h2:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  img {
    ${imgStyle}
    width: 100%;
    height: auto;
    max-height: 90px;
    //cover img
    object-fit: cover;
    object-position: center;
    cursor: pointer;
  }
  img:hover {
    transform: scale(1.02);

    transition: all 0.2s ease;
  }
  div {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      height: auto;
      text-align: left;
      font-size: 1rem;
      font-weight: normal;
    }
  }
`;
export const Esquema4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  height: auto;
  padding: 20px;
  transition: all 0.2s ease;

  div {
    display: flex;
    flex-direction: column;
    border: 1px solid #2b2d4239;
    border-radius: 3px;
    padding: 10px;
    width: 100%;
    height: auto;
    display: flex;

    .h2_titulo {
      font-size: 1rem;
      font-weight: bold;
      margin: 0;
      padding: 0;
    }

    h2:hover {
      text-decoration: underline;
      cursor: pointer;
    }
    img {
      /* ${imgStyle} */
      width: 100%;
      height: auto;
      max-height: 90px;
      //cover img
      object-fit: cover;
      object-position: center;
      cursor: pointer;
    }
    img:hover {
      transform: scale(1.02);

      transition: all 0.2s ease;
    }
  }
`;
