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
require("dotenv").config();

// aquí se configura la conexión a la base de datos
// const db = mysql.createPool({
//   host: "us-cdbr-east-04.cleardb.com",
//   user: "b30e1f20cf6a83",
//   password: "620a2e67",
//   database: "heroku_3536b29e6410a83",
// });

///////////////username          //password              //host                     //database
//mysql:    b30e1f20cf6a83      :    620a2e67   @   us-cdbr-east-04.cleardb.com    /heroku_3536b29e6410a83      ?reconnect=true

//BD de prueba para el desarrollo local
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

const bcryptjs = require("bcryptjs");

//Insertar datos en publicaciones //SECCION DE NOTICIAS
app.post("/api/insertPubli", (req, res) => {
  const img_portada = req.body.img_portada;
  const nom_publi = req.body.nombre;
  const sub_publi = req.body.subtitulo;
  const des_publi = req.body.descripcion;
  const categ_principal = req.body.categoria;
  const fecha = req.body.fecha;
  const usuarios_idusuarios = req.body.usuarios_id;
  const areas_idareas = req.body.areas;
  const secciones_idsecciones = req.body.secciones;
  const admin_idadmin = 1;

  const sqlInsertPublicaicon =
    "insert into publicaciones(img_portada,nom_publi,sub_publi,des_publi,categ_principal,fecha,usuarios_idusuario,areas_idareas,secciones_idsecciones,admin_idadmin)  values(?,?,?, ?,?,?, ?, ?,?,?)";

  db.query(
    sqlInsertPublicaicon,
    [
      img_portada,
      nom_publi,
      sub_publi,
      des_publi,
      categ_principal,
      fecha,
      usuarios_idusuarios,
      areas_idareas,
      secciones_idsecciones,
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
//Update datos de publicaciones
app.post("/api/updatePubli", (req, res) => {
  const idpublicaciones = req.body.idpublicaciones;
  const img_portada = req.body.img_portada;
  const nom_publi = req.body.nombre;
  const sub_publi = req.body.subtitulo;
  const des_publi = req.body.descripcion;
  const categ_principal = req.body.categoria;
  const fecha = req.body.fecha;
  const usuarios_idusuarios = req.body.usuarios_id;
  const areas_idareas = req.body.areas;
  const secciones_idsecciones = req.body.secciones;
  const admin_idadmin = 1;
  const sqlUpdatePublicacion =
    "update publicaciones set img_portada = ?, nom_publi=?,sub_publi=?,des_publi=?,categ_principal=?,fecha=?,usuarios_idusuario=?,areas_idareas=?,secciones_idsecciones=?,admin_idadmin=? where idpublicaciones=?";

  db.query(
    sqlUpdatePublicacion,
    [
      img_portada,
      nom_publi,
      sub_publi,
      des_publi,
      categ_principal,
      fecha,
      usuarios_idusuarios,
      areas_idareas,
      secciones_idsecciones,
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
//delete las categorias que tiene la publicacion
app.delete("/api/deletePubliCateg", (req, res) => {
  const publicaciones_idpublicaciones = req.body.idpublicaciones;
  const sqlDeletePublicaciones_has_categorias =
    "delete from publicaciones_has_categorias where publicaciones_idpublicaciones=?";
  db.query(
    sqlDeletePublicaciones_has_categorias,
    [publicaciones_idpublicaciones],
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
//get datos de publicaciones por id
app.get("/api/getPubliId", (req, res) => {
  const idpublicaciones = req.query.id;
  const sqlSelectPublicaciones =
    "select * from publicaciones where idpublicaciones=?";
  db.query(sqlSelectPublicaciones, [idpublicaciones], (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log("ok");
      res.send(result);
    }
  });
});
//insert publicaciones_has_categorias
app.post("/api/insertPubliCateg", (req, res) => {
  const publicaciones_idpublicaciones = req.body.idpublicaciones;
  const categorias_id_categorias = req.body.idcategorias;
  const sqlInsertTopublicaciones_has_categorias =
    "insert into publicaciones_has_categorias(publicaciones_idpublicaciones,categorias_id_categorias) values(?,?)";
  db.query(
    sqlInsertTopublicaciones_has_categorias,
    [publicaciones_idpublicaciones, categorias_id_categorias],
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
//update publicaciones_has_categorias

//get publicaciones_has_categorias ---GET TODAS LAS CATEGORIAS DE UNA PUBLICACION
app.get("/api/getAllCategOfPubli", (req, res) => {
  const idpublicaciones = req.query.idpublicaciones;
  const sqlGetAllCategOfPubli =
    "select * from categorias inner join publicaciones_has_categorias pc on pc.categorias_id_categorias=categorias.id_categorias where pc.publicaciones_idpublicaciones=?;";
  db.query(sqlGetAllCategOfPubli, [idpublicaciones], (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log("ok");
      res.send(result);
    }
  });
}),
  //get todas las publicaciones de varias categorias donde los id de las categorias sean iguales a los que se envian por parametro
  app.get("/api/getAllPubliOfCateg", (req, res) => {
    const idpublicaciones = req.query.idpublicaciones;
    const idcategoriasArray = req.query.arrayIdCategorias;

    const sqlGetAllPubliOfCateg =
      "select distinct idpublicaciones,img_portada, nom_publi, sub_publi   from publicaciones inner join publicaciones_has_categorias pc on pc.publicaciones_idpublicaciones=publicaciones.idpublicaciones where pc.categorias_id_categorias IN (?) ";

    //idcategoriasArray es un array de id de categorias, seperar cada id con una coma
    console.log(idcategoriasArray);
    db.query(sqlGetAllPubliOfCateg, [idcategoriasArray], (err, result) => {
      if (err) {
        console.log(err);
        res.send("error");
      } else {
        console.log(result);
        //delete idpublicaciones from array idcategoriasArray.
        res.send(result);
      }
    });
  });

//Buscar publicaciones por caracteres en el nombre
app.get("/api/searchPubli", (req, res) => {
  const nom_publi = "%" + req.query.nom_publi + "%";
  console.log(nom_publi);
  const sqlSelectPublicaciones =
    "select nom_publi,fecha,idpublicaciones from publicaciones where nom_publi like ?";
  db.query(sqlSelectPublicaciones, [nom_publi], (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      //print query
      console.log(result);
      res.send(result);
    }
  });
});
//get datos de publicaciones de usuarios
app.get("/api/getAllPubliUser", (req, res) => {
  const idusuario = req.query.id;

  const sqlSelectPublicaciones = `select * from publicaciones where usuarios_idusuario = ?`;

  db.query(sqlSelectPublicaciones, [idusuario], (err, result) => {
    if (err) {
      console.log("error");
      res.send("error");
    } else {
      console.log("ok");
      res.send(result);
    }
  });
});

//get TODOS los DATOS de publicaciones CRUD
app.get("/api/getAllPubliAdmin", (req, res) => {
  // const idusuario = req.query.id;
  const sqlSelectPublicaciones =
    'select idpublicaciones, nom_publi ,sub_publi, des_publi,categ_principal,fecha,   CONCAT( usuarios.nombres ," ", usuarios.apellidos )as fullName from publicaciones inner join usuarios on publicaciones.usuarios_idusuario = usuarios.idusuario';
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
//get areas
app.get("/api/getAreas", (req, res) => {
  const sqlSelectAreas = "select * from areas";
  db.query(sqlSelectAreas, (err, result) => {
    if (err) {
      console.log("err");
      res.send("error");
    } else {
      console.log("ok");
      res.send(result);
    }
  });
});
//get Secciones
app.get("/api/getSecciones", (req, res) => {
  //order by
  const sqlSelectSecciones = "select * from secciones ";
  db.query(sqlSelectSecciones, (err, result) => {
    if (err) {
      console.log("err");
      res.send("error");
    } else {
      console.log("ok");
      res.send(result);
    }
  });
});
//get categorias
app.get("/api/getCategorias", (req, res) => {
  const sqlSelectCategorias = "select * from categorias";
  db.query(sqlSelectCategorias, (err, result) => {
    if (err) {
      console.log("err");
      res.send("error");
    } else {
      console.log("ok");
      res.send(result);
    }
  });
});
//get all publicaciones de un area
app.get("/api/getPubliArea", (req, res) => {
  const idarea = req.query.idareas;
  const sqlSelectPublicaciones =
    "select * from publicaciones where areas_idareas = ? order by fecha desc";
  db.query(sqlSelectPublicaciones, [idarea], (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
//get all publicaciones de una seccion
app.get("/api/getPubliSeccion", (req, res) => {
  const secciones_idsecciones = req.query.secciones_idsecciones;
  const sqlSelectPublicaciones =
    "select * from publicaciones where secciones_idsecciones = ? order by fecha desc";
  db.query(sqlSelectPublicaciones, [secciones_idsecciones], (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

//insert usuarios
app.post("/api/insertusuario", async (req, res) => {
  const usuario = req.body.usuario;
  const password = req.body.password;
  const nombres = req.body.nombre;
  const apellidos = req.body.apellido;
  const grado = req.body.grado;
  const admin_idadmin = 1;
  let passwordHash = await bcryptjs.hash(password, 8);
  const sqlInsert =
    "insert into usuarios(usuario, contrasena, nombres, apellidos, grado,admin_idadmin) values(?, ?, ?, ?, ?,?)";

  db.query(
    sqlInsert,
    [usuario, passwordHash, nombres, apellidos, grado, admin_idadmin],
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

//update usuarios
app.post("/api/updateusuario", (req, res) => {
  const usuario = req.body.usuario;
  const contrasena = req.body.contrasena;
  const nombres = req.body.nombre;
  const apellidos = req.body.apellido;
  const grado = req.body.grado;
  const idusuario = req.body.idusuario;
  const url_img_perfil = req.body.url_img_perfil;
  const sqlUpdate =
    "update usuarios set url_img_perfil = ?, usuario = ?, contrasena = ?, nombres = ?, apellidos = ?, grado = ? where idusuario = ?";

  db.query(
    sqlUpdate,
    [url_img_perfil, usuario, contrasena, nombres, apellidos, grado, idusuario],
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
//get user por id
app.get("/api/getUser", (req, res) => {
  const idusuario = req.query.idusuario;
  const sqlSelectUser =
    "select idusuario,url_img_perfil, usuario, contrasena, nombres, apellidos, grado from usuarios where idusuario = ?";
  db.query(sqlSelectUser, [idusuario], (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
//getAll usuarios
app.get("/api/getAllUsers", (req, res) => {
  const sqlSelectAllUsers = `select
  usuarios.url_img_perfil,
    usuarios.idusuario,
    usuarios.usuario,
    usuarios.nombres,
    usuarios.apellidos,
    usuarios.grado,
    count(publicaciones.idpublicaciones) as total_publicaciones
  from
    usuarios
    left join publicaciones on usuarios.idusuario = publicaciones.usuarios_idusuario
  group by
    usuarios.idusuario;`;
  db.query(sqlSelectAllUsers, (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      console.log("result");
      res.send(result);
    }
  });
});

//get TODOS los DATOS de publicaciones
app.get("/api/getAllPublicHome", (req, res) => {
  const sqlSelectPublicaciones2 =
    "select * from publicaciones order by fecha desc";

  db.query(sqlSelectPublicaciones2, (err, result) => {
    if (err) {
      console.log(err);
      res.send("error");
    } else {
      // console.log(result);
      res.send(result);
    }
  });
});
//login usuarios
app.post("/api/login", async (req, res) => {
  const usuario = req.body.usuario;
  const password = req.body.password;
  console.log(usuario + " " + password);

  if (usuario == "admin") {
    const sqlSelect = "select * from admin where nombre = ?";
    db.query(sqlSelect, [usuario], (err, result) => {
      if (err) {
        console.log(err);
        res.send("error");
      } else {
        if (result.length > 0) {
          const compare = bcryptjs.compareSync(password, result[0].contrasena);
          if (compare) {
            res.send(result);
          } else {
            res.send("error");
          }

          console.log("todo ok");
        } else {
          res.send("error");
        }
      }
    });
  } else {
    const sqlSelect = "select * from usuarios where usuario = ? ";
    db.query(sqlSelect, [usuario], (err, result) => {
      if (err) {
        console.log(err);
        res.send("error");
      } else {
        if (result.length > 0) {
          const compare = bcryptjs.compareSync(password, result[0].contrasena);
          console.log(compare);
          if (compare) {
            res.send(result);
          } else {
            res.send("error");
          }
          console.log("todo ok");
        } else {
          res.send("error");
        }
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
//delete user
app.delete("/api/deleteUser", (req, res) => {
  const id = req.body.idusuario;
  const sqlDelete = "delete from usuarios where idusuario = ?";
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

// se levanta  el puerto del servidor
app.listen(process.env.PORT || 3001, () => {
  console.log("Server listening on port 3001");
});

// db.sequelize.sync().then((req) => {
//   app.listen(process.env.PORT || 3001, () => {
//     console.log("Server listening on port 3001");
//   });
// })
// var port_number = app.listen(process.env.PORT || 3001);
// app.listen(port_number);
