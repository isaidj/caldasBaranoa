import React from "react";

import { useForm } from "react-hook-form";
// import useAuth from "../auth/useAuth";
import firebaseStorage from "../services/firebaseConfig";

const Pais = () => {
  window.document.title = "NC-Pais";

  const { register, handleSubmit } = useForm();

  // const auth = useAuth();
  // const user = auth.getUser();
  //use firebase to put files to storage

  const upload = (file) => {
    console.log(file.file[0]);
    firebaseStorage
      .ref("/images/" + file.file[0].name)
      .put(file.file[0])
      .then(() => {
        console.log("uploaded");
      });
  };

  return (
    <div>
      {/* upload file image */}
      <form onSubmit={handleSubmit(upload)}>
        <div className="form-group">
          <h3>File Upload</h3>
          <input {...register("file")} type="file" name="file" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* //show images from firebase storage */}
      <div>
        <h3>Images</h3>
        <div className="row">
          <div className="col-md-4">
            <img
              src={firebaseStorage.ref("/images/space.jpg").getDownloadURL()}
              alt="space"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pais;
