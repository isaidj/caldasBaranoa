// import React from "react";
// import firebaseStorage from "./firebaseConfig";

// const UploadImg = ({ file, name }) => {
//   const upload = () => {
//     const img = file.imagen[0];
//     console.log(img);
//     // console.log(img);
//     // console.log(img.name);
//     const refStorage = firebaseStorage.ref(
//       // /direccion/idusuario__idpublicacion__nombreimagen
//       "/images/" + name
//     );
//     refStorage
//       .put(img)
//       .then(() => {
//         console.log("uploaded");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   upload();
// };

// export default UploadImg;
