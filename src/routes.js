module.exports = app => {

    const ddbb = require("./database");         // CONFIGURACION DEL BASE DE DATOS en database.js

    // Ruta para obtener la cadena de texto
    app.get('/texto', (req, res) => {
        console.log(`${req.socket.remoteAddress} ha solicitado /texto`)

        ddbb.texto((results) => {
            console.log(`CALLBACK ${req.socket.remoteAddress} ha solicitado /texto`)
            res.json(results[0]);
        })
    })

    // Ruta para recibir los datos del frontend y guardarlos en la base de datos
    app.post('/guardar-fecha', (req, res) => {
        const { currentDate } = req.body;

        ddbb.guardarFecha(currentDate, (results) => {
            res.send('Datos guardados correctamente');
        })
    });
}