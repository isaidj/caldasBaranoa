//donwload images form firebase storage
import firebaseStorage from "../services/firebaseConfig";

import React from "react";
//component to download images form firebase storage
const Downloader = (file) => {
  const download = () => {
    firebaseStorage
      .download(file.url, file.name)
      .then(() => {
        console.log("donwload success");
      })
      .catch(() => {
        console.log("donwload error");
      });
  };

  return download;
};

export default Downloader;
