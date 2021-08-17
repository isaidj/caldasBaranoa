import React from "react";
import { useHistory } from "react-router-dom";
const Pais = () => {
  let history = useHistory();
  return (
    <div>
      <h1>Pais</h1>
      <button
        onClick={() => {
          history.push("social");
        }}
        type="submit"
        className="btn btn-primary btn-submit"
      />
    </div>
  );
};

export default Pais;
