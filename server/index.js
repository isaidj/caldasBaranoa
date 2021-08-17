//express server
//aqui se configura el servidor express y las dependencias
const express = require("express");
//bodyParser es lo que permite a Express leer el cuerpo y luego analizarlo en un objeto Json que podamos entender.

//cors es un middleware que permite aceptar peticiones desde cualquier dominio
const cors = require("cors");
const app = express();
const mysql = require("mysql");

//aquí se configura la conexión a la base de datos
const db = mysql.createPool({
  host: "localhost",
  user: "caldas",
  password: "caldas123",
  database: "caldasbaranoa",
});
//se configura el middleware para que el servidor acepte peticiones de tipo JSON
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//archivos estaticos

//esta es la ruta que permite obtener los datos de la base de datos
app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM noticia";

  db.query(sqlSelect, (err, result) => {
    res.send(result);
  });
});

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
      console.log(result);

      if (err) console.log(err);
    }
  );
});
//login usuarios
app.post("/api/login", (req, res) => {
  const usuario = req.body.usuario;
  const password = req.body.password;
  const sqlSelect =
    "select * from usuarios where usuario = ? and contrasena = ?";
  db.query(sqlSelect, [usuario, password], (err, result) => {
    if (err) console.log(err);

    //verificamos que el usuario exista
    if (result.length > 0) {
      res.send(result);
    }
  });
});

app.delete("/api/delete/:id", (req, res) => {
  const id = req.params.id;
  const sqlDelete = "delete from noticia where id=?";

  db.query(sqlDelete, id, (err, result) => {
    if (err) console.log(result);
  });
});

// app.get("/", (req, res) => {
//   //   const sqlInsert =
//   //     "Insert into noticia (nombre,descripcion) values ('El jugador bueno','EL jugador mas bueno del mundo');";
//   //   db.query(sqlInsert, (error, result) => {
//   //     res.send("Hello!");
//   //   });
// });

//se levanta  el puerto del servidor
app.listen(3001, () => {
  console.log("Server listening on port 3001");
});
