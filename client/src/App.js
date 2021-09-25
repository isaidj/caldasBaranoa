//
import "./App.css";

import RouterComponent from "./components/RouterComponent";
import AuthProvider from "./auth/AuthProvider";
import GlobalVariables from "./global/GlobalVariables";
import styled from "styled-components";
import { useEffect } from "react";

function App() {
  return (
    <AppStyled>
      <AuthProvider>
        <GlobalVariables>
          <RouterComponent />
        </GlobalVariables>
      </AuthProvider>
    </AppStyled>
  );
}

export default App;

const AppStyled = styled.div`
  font-family: "Poppins", sans-serif;
`;
