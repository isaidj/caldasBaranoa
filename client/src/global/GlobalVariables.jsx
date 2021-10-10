//Context, Global varibales
import React from "react";
import { createContext } from "react";
export const GlobalVariablesContext = createContext();

const GlobalVariables = ({ children }) => {
  const [LocalServerURL, setLocalServerURL] = React.useState(
    "http://192.168.1.6:3001/api/"
  );
  const [HerokuServerURL, setHerokuServerURL] = React.useState(
    "https://caldasbaranoa.herokuapp.com/api/"
  );
  //this is the url that will be used to connect to the server
  //---------------- ↓↓↓↓↓↓↓↓↓↓↓↓↓↓-------------------
  const urlWorking = LocalServerURL;

  //contextValue is an object with all the variables that are going to be used in the app
  const contextValue = {
    urlWorking,
    LocalServerURL,
    setLocalServerURL,
    HerokuServerURL,
    setHerokuServerURL,
  };

  return (
    <GlobalVariablesContext.Provider value={contextValue}>
      {children}
    </GlobalVariablesContext.Provider>
    //children is the component that is being wrapped by this component (in this case, the App component)
  );
};

export default GlobalVariables;
