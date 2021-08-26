//express server
//aqui se configura el servidor express y las dependencias

const express = require("express");
//import s3.js
// const s3 = require("./s3");
//bodyParser es lo que permite a Express leer el cuerpo y luego analizarlo en un objeto Json que podamos entender.

//cors es un middleware que permite aceptar peticiones desde cualquier dominio
const cors = require("cors");
const app = express();
const mysql = require("mysql");

// aquí se configura la conexión a la base de datos
const db = mysql.createPool({
  host: "localhost",
  user: "caldas",
  password: "caldas123",
  database: "caldasbaranoa",
});
// const db = mysql.createPool({
//   host: "localhost",
//   user: "id17482655_caldasbaranoauser",
//   password: "hR1isSQg%RLfVD#PmXB^",
//   database: "id17482655_caldasbaranoa",
// });
//se configura el middleware para que el servidor acepte peticiones de tipo JSON
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Insertar datos en publicaciones //SECCION DE NOTICIAS
app.post("/api/insertPubli", (req, res) => {
  const nom_publi = req.body.nombre;
  const des_publi = req.body.descripcion;
  const img_publi = req.body.imagen;
  const areas_idareas = req.body.areas;
  const usuarios_idusuarios = req.body.usuarios_id;
  const admin_idadmin = 1;

  //inner join two tables publicaciones and imagenes

  // const sqlInserPublicacion = 'BEGIN; INSERT INTO publicaciones (nom_publi, des_publi,areas_idareas,usuarios_idusuarios,admin_idadmin) VALUES(?,?,?,?,?); INSERT INTO imagenes (idimagenes,url_images, homepage) VALUES(LAST_INSERT_ID(),?);COMMIT'

  const sqlInsertPublicaicon =
    "insert into publicaciones(nom_publi,des_publi,areas_idareas,usuarios_idusuario,admin_idadmin)  values(?, ?, ?, ?,?)";
  db.query(
    sqlInsertPublicaicon,
    [
      nom_publi,
      des_publi,
      // img_publi,
      areas_idareas,
      usuarios_idusuarios,
      admin_idadmin,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("error");
      } else {
        console.log(result);
        res.send(result);
      }
    }
  );
});
app.post("/api/insertImagen", (req, res) => {
  const url_images = req.body.url_images;
  const idpublicaciones = req.body.idpublicaciones;
  const sqlInsertImagen =
    "insert into imagenes(url_images,	publicaciones_idpublicaciones)  values(?, ?)";
  db.query(sqlInsertImagen, [url_images, idpublicaciones], (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
//get datos de publicaciones de usuarios
app.get("/api/getPubliUser", (req, res) => {
  const idusuario = req.query.id;
  const sqlSelectPublicaciones =
    "select idpublicaciones, nom_publi, des_publi ,areas_idareas,usuarios_idusuario from publicaciones where usuarios_idusuario = ? ";
  db.query(sqlSelectPublicaciones, [idusuario], (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
//Update datos de publicaciones
app.post("/api/updatePubli", (req, res) => {
  const nom_publi = req.body.nombre;
  const des_publi = req.body.descripcion;
  // const img_publi = req.body.imagen;
  const areas_idareas = req.body.areas;
  const usuarios_idusuario = req.body.usuarios_id;
  const idpublicaciones = req.body.idpublicaciones;
  const admin_idadmin = 1;
  const sqlUpdatePublicacion =
    "update publicaciones set nom_publi = ?, des_publi = ?, areas_idareas = ?, usuarios_idusuario = ?,idpublicaciones=?, admin_idadmin = ? where idpublicaciones = ?";

  db.query(
    sqlUpdatePublicacion,
    [
      nom_publi,
      des_publi,
      // img_publi,
      areas_idareas,
      usuarios_idusuario,
      idpublicaciones,
      admin_idadmin,
      idpublicaciones,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("error");
      } else {
        console.log(result);
        res.send("ok");
      }
    }
  );
});
//update user publicaciones
app.post("/api/updateUserPubli", (req, res) => {
  nom_publi = req.body.nombre;
  des_publi = req.body.descripcion;
  areas_idareas = req.body.areas;
  usuarios_idusuario = req.body.usuarios_id;
  idpublicaciones = req.body.idpublicaciones;
  admin_idadmin = 1;
  const sqlUpdateUserPublicacion =
    "update publicaciones set nom_publi = ?, des_publi = ?, areas_idareas = ?, usuarios_idusuario = ?,idpublicaciones=?, admin_idadmin = ? where idpublicaciones = ?";
  db.query(
    sqlUpdateUserPublicacion,
    [
      nom_publi,
      des_publi,
      areas_idareas,
      usuarios_idusuario,
      idpublicaciones,
      admin_idadmin,
      idpublicaciones,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("error");
      } else {
        console.log(result);
        res.send("ok");
      }
    }
  );
});

//get TODOS los DATOS de publicaciones
app.get("/api/getAllPubli", (req, res) => {
  // const idusuario = req.query.id;
  const sqlSelectPublicaciones =
    'select idpublicaciones, nom_publi as nombre, des_publi as descripcion,areas_idareas,usuarios_idusuario,   CONCAT( usuarios.nombres ," ", usuarios.apellidos )as fullName from publicaciones inner join usuarios on publicaciones.usuarios_idusuario = usuarios.idusuario';
  db.query(sqlSelectPublicaciones, (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

//Editar admin

//insert usuarios
app.post("/api/insertusuario", (req, res) => {
  const usuario = req.body.usuario;
  const password = req.body.password;
  const nombres = req.body.nombre;
  const apellidos = req.body.apellido;
  const grado = req.body.grado;
  const sqlInsert =
    "insert into usuarios(usuario, contrasena, nombres, apellidos, grado) values(?, ?, ?, ?, ?)";

  db.query(
    sqlInsert,
    [usuario, password, nombres, apellidos, grado],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send("error");
      } else {
        console.log(result);
        res.send("ok");
      }
    }
  );
});
//get TODOS los DATOS de publicaciones
app.get("/api/getAllPublicHome", (req, res) => {
  //inner join publibaciones de usuarios with imagenes
  const sqlSelectPublicaciones =
    "select * from publicaciones INNER join imagenes on publicaciones.idpublicaciones =imagenes.idimagenes";

  db.query(sqlSelectPublicaciones, (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
//login usuarios
app.post("/api/login", (req, res) => {
  const usuario = req.body.usuario;
  const password = req.body.password;

  if (usuario == "admin") {
    const sqlSelect = "select * from admin where nombre = ? and contrasena = ?";
    db.query(sqlSelect, [usuario, password], (err, result) => {
      if (err) console.log(err);

      //verificamos que el usuario exista
      if (result.length > 0) {
        res.send(result);
      }
    });
  } else {
    const sqlSelect =
      "select * from usuarios where usuario = ? and contrasena = ?";
    db.query(sqlSelect, [usuario, password], (err, result) => {
      if (err) console.log(err);

      //verificamos que el usuario exista
      if (result.length > 0) {
        res.send(result);
      }
    });
  }
});

app.delete("/api/deletePubli", (req, res) => {
  const id = req.body.idpublicaciones;
  const sqlDelete = "delete from publicaciones where idpublicaciones = ?";
  db.query(sqlDelete, [id], (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log(result);
      res.send("ok");
    }
  });
});

//se levanta  el puerto del servidor
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
