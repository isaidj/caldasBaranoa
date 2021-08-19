// import logo from "./logo.svg";

import "./App.css";

import RouterComponent from "./components/RouterComponent";
import AuthProvider from "./auth/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RouterComponent />
      </AuthProvider>
    </div>
  );
}

export default App;
