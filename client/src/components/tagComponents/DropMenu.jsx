import React, { useState } from "react";
import styled from "styled-components";
export const DropMenu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DropMenuStyles isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {props.children}
      </DropMenuStyles>
    </>
  );
};
const DropMenuStyles = styled.div`
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform-origin: top;
      transform: scaleY(0);
    }
    to {
      opacity: 1;
      transform-origin: top;
      transform: scaleY(1);
    }
  }
  .navItem {
  }
  .submenu {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    animation: fadeIn 0.5s;
    -webkit-animation: fadeIn 0.1s;
  }
  .iconArrow {
    font-size: 1.3rem;
  }
`;
