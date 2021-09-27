import styled from "styled-components";
const ButtonLogin = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default ButtonLogin;
const desktopStartWidth = 992;
const mobile = `@media (max-width: ${desktopStartWidth}px)`;
const Button = styled.button.attrs((props) => ({
  ...props,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor || "#ef233c"};
  color: ${(props) => props.color || "#edf2f4"};
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 10px 10px;
  font-weight: bold;

  font-size: 1rem;
  outline: none;
  height: 2.5rem;
  width: 100%;
  transition: all 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.color || "#edf2f4"};
    border: 1px solid ${(props) => props.backgroundColor || "#ef233c"};
    color: ${(props) => props.backgroundColor || "#ef233c"};
  }

  ${mobile} {
    font-size: 1.3rem;
  }
`;
