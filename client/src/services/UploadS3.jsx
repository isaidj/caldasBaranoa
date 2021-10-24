import { uploadFile } from "react-s3";
import Swal from "sweetalert2";
const S3_BUCKET = "caldasbaranoa";
const REGION = "us-east-1";
const ACCESS_KEY = "AKIAQUYEXQYY6GTOINI4";
const SECRET_ACCESS_KEY = "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";

const config = {
  bucketName: S3_BUCKET,
  region: REGION,
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_ACCESS_KEY,
};
const UploadS3 = (f, name, callback, callback2) => {
  // console.log(d)
  // console.log(preNumber)
  if(f !== null){
  const file = f;

  const newfile = new File([file], name, { type: file.type });

  //  console.log(file);
  //  console.log(newfile);

  uploadFile(newfile, config)
    .then(() => {
      console.log("Imagen subida");
      Swal.fire({
        icon: "success",
        title: "Publicado",
        html: "Se ha subido correctamente",
        confirmButtonText: "Ok",
      });
      callback();

      //espera 1 segundo
      setTimeout(() => {
        callback2();
      }, 1000);
    })
    .catch((err) => console.error(err));
  }else{
    Swal.fire({
      icon: "success",
      title: "Publicado",
      html: "Se ha subido correctamente",
      confirmButtonText: "Ok",
    });
    

    //espera 1 segundo
 
  }
};

export default UploadS3;
