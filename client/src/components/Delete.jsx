//delete

import React from "react";

const Delete = () => {
  const [idDelete, setIdDelete] = useState(0);

  const deleteNoticia = (idToDelete) => {
    Axios.delete("http://localhost:3001/api/delete/" + idToDelete);
  };
  return (
    <div className="formDelete">
      <br />
      <label>Delete by id</label>
      <input
        type="number"
        name="id"
        onChange={(e) => setIdDelete(e.target.value)}
      />
      <Button
        variant="contained"
        color="secondary"
        startIcon={<Delete />}
        onClick={() => deleteNoticia(idDelete)}
      >
        Delete
      </Button>
    </div>
  );
};
