import React from "react";

import { RielBig, RielLittle } from "./Rieles/RielsHorizontal";


const SecondSection = (props) => {
  const { publi } = props;


  return (
    <>
      <RielBig publi={publi.slice(8, 11)} />
      <RielLittle publi={publi.slice(11, 17)} />
    </>
  );
};

export default SecondSection;

// const desktopStartWidth = 992;
// const mobile = `@media (max-width: ${desktopStartWidth}px)`;
// const tablet = `@media (max-width: ${desktopStartWidth + 200}px)`;
