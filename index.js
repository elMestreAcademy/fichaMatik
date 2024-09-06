const express = require('express');
const mysql = require('mysql');
const app = express();
const port = 3000;

app.use(express.static('static'))

// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
    host: '192.168.1.224',
    user: 'Muscardina',
    password: 'krono',
    database: 'fichamatik'
});

// Ruta para obtener la cadena de texto
app.get('/texto', (req, res) => {
    connection.query('SELECT nombre FROM usuario WHERE usuario_id = 1', (error, results) => {
        if (error) throw error;
        res.json(results[0]);
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});



