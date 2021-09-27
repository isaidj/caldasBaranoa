import React from "react";
import styled from "styled-components";

const SelectLogin = ({ children, ...props }) => {
  return <Select {...props}>{children}</Select>;
};

export default SelectLogin;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const Select = styled.select.attrs((props) => ({
  ...props,
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(prop) => prop.backgroundColor || "#ef233c"};

  color: ${(prop) => prop.color || "#edf2f4"};
  border: none;
  border-radius: 10px;
  padding: 10px 10px;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  font-size: 1rem;
  height: auto;
  border: 1px solid transparent;

  outline: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${(prop) => prop.color || "#edf2f4"};
    border: 1px solid ${(props) => props.backgroundColor || "#ef233c"};
    color: ${(props) => props.backgroundColor || "#ef233c"};
    transform: translateX(1px) translateY(1px);
    cursor: pointer;
  }
  &:focus {
    border: 1px solid ${(props) => props.backgroundColor || "#ef233c"};
    color: ${(props) => props.backgroundColor || "#ef233c"};

    transform: translateX(1px) translateY(1px);
  }

  ${mobile} {
  }
`;
