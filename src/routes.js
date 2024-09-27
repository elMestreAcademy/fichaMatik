module.exports = (app) => {
  const ddbb = require("./database"); // CONFIGURACION DEL BASE DE DATOS en database.js

  // Ruta para obtener el empleado por el id
  app.post("/usuario/consultar", (req, res) => {
    const { usuario_id } = req.body;
    if (!usuario_id) {
      res.send({ error: true, mensaje: "Falta el usuario Id" });
    } else {
      console.log(
        `${req.socket.remoteAddress} ha solicitado /texto USER` + usuario_id
      );

      ddbb.buscarEmpleado(usuario_id, (results) => {
        console.log(
          `CALLBACK ${req.socket.remoteAddress} ha solicitado /texto`
        );
        res.json(results[0]);
      });
    }
  });

  // Ruta para recibir los datos del frontend y guardarlos en la base de datos
  app.post("/usuario/entrada", (req, res) => {
    const { usuario_id } = req.body;

    if (!usuario_id) {
      res.send({ error: true, mensaje: "Falta el usuario Id" });
    } else {
      console.log("GUARDANDO FICHAJE DE USER: " + usuario_id);

      ddbb.guardarFecha(usuario_id, (results) => {
        res.send({
          success: true,
          mensaje: "Se registro la entrada correctamente",
        });
      });
    }
  });

  // app.post("/salida", (req, res) => {
  //   const { usuario_id } = req.body;

  //   console.log("GUARDAR SALIDA DE USER :" + usuario_id);
  //   ddbb.salida(usuario_id, (results) => {
  //     res.redirect("/buen-dia");
  //   });
  // });

  app.post("/usuario/salida", (req, res) => {
    const { usuario_id } = req.body;

    if (!usuario_id) {
      res.send({ error: true, mensaje: "Falta el usuario Id" });
    } else {
      console.log("GUARDANDO FICHAJE DE USER: " + usuario_id);

      ddbb.cerrarFichaje(usuario_id, (results) => {
        res.send({
          success: true,
          mensaje: "Se finalizo el fichaje correctamente",
        });
      });
    }
  });
};
