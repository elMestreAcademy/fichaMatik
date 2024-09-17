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

    app.post('/salida', (req, res) => {
        const {usuario_id} = req.body;

        console.log("GUARDAR SALIDA DE USER :" + usuario_id)
        ddbb.salida(usuario_id, (results) => {
            res.redirect('/buen-dia');
        })
    });   

    app.get('/buen-dia', (req,res) => {
        res.send('mariposa')
    })
}
//  segun el diagrama de flujo esta funcion podria ayudarnos en el update (salida)

   // 
   //function salida(req, res, callback) {
    // if (usuario_id) {
       // callback ();
    // } else {
       // req.salida = 'sin acceso!';
        // res.redirect('/login');
    //  }
// }

