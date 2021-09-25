//useGlobalVariables
import { useContext } from "react";
import { GlobalVariablesContext } from "./GlobalVariables";

const useGlobalVariables = () => {
  const contextValue = useContext(GlobalVariablesContext);
  return contextValue;
};

export default useGlobalVariables;
