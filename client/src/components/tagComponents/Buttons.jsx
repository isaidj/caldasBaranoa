import styled from "styled-components";
//recibe cualquier atributo
const Buttons = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Buttons;
const StyledButton = styled.button.attrs((props) => ({
  ...props,
}))`
  color: ${(props) => props.mycolor};
`;
