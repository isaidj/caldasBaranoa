import Axios from "axios";
import React, { useState, useEffect } from "react";
import firebaseStorage from "../services/firebaseConfig";

const Home = ({ actualizar }) => {
  window.document.title = "NC-Inicio";
  const [data, setData] = useState([]);

  const [images, setImages] = useState([]);

  useEffect(async () => {
    const get = await Axios.get(
      "http://192.168.1.6:3001/api/getAllPublicHome",
      {
        // params: {
        //   id: userId.idadmin,
        // },
      }
    ).then((response) => {
      setData(response.data);
      console.log(response.data);
      setImages(response.data);
    });
  }, [actualizar]);

  //donwload img form firebase storage that return url
  const downloadImg = async (url_images) => {
    const storage = firebaseStorage.ref("/images");
    let donwloadUrl = await storage.child(url_images).getDownloadURL();
    console.log(donwloadUrl);

    setImages(donwloadUrl);
  };

  return (
    <div>
      <h1>Home</h1>
      {/* Zone of news cards */}
      <div className="cards__container">
        {data.map((item, index) => (
          <div key={index + 1} className="card__container">
            <div className="card__image">
              <img src={images} alt="img" />
            </div>
            <div className="card__content">
              <h2>{item.nom_publi}</h2>
              <p>{item.des_publi}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
