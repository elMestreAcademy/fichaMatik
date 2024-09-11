module.exports = app => {

    const ddbb = require("./database");         // CONFIGURACION DEL BASE DE DATOS en database.js

    // Ruta para obtener la cadena de texto
    app.post('/texto', (req, res) => {
        const { usuario_id } = req.body;
        console.log(`${req.socket.remoteAddress} ha solicitado /texto USER` + usuario_id)

        ddbb.texto(usuario_id, (results) => {
            console.log(`CALLBACK ${req.socket.remoteAddress} ha solicitado /texto`)
            res.json(results[0]);
        })
    })

    // Ruta para recibir los datos del frontend y guardarlos en la base de datos
    app.post('/fichar', (req, res) => {
        const { usuario_id } = req.body;

        console.log("GUARDANDO FICHAJE DE USER: " + usuario_id)

        ddbb.guardarFecha(usuario_id, (results) => {
            res.send('Datos guardados correctamente');
        })
    });
}