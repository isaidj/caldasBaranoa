// import logo from "./logo.svg";

import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import RouterComponent from "./components/RouterComponent";

function App() {
  return (
    <div className="App">
      <RouterComponent />
    </div>
  );
}

export default App;
