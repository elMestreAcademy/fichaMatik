const mysql = require("mysql");

// Configuración de la conexión a MySQL
const conexion = mysql.createConnection({
  host: 'masterfactories.com',
  port: 8192,
  user: 'Muscardina',
  password: 'krono',
  database: 'fichamatik'
});

conexion.connect(function (err) {
  if (err) {
    console.error('Error conectando a la base de datos:', err.stack);
    return;
  }
  console.log('Conectado a la base de datos');
})

function texto(usuario_id, callback) {
  conexion.query(
    'SELECT nombre, primer_apellido, segundo_apellido FROM usuario WHERE usuario_id = (?)', [usuario_id],
    function (err, result) {
      if (err) {
        throw err;
      };
      callback(result)
    })
}

function guardarFecha(usuario_id, callback) {
  conexion.query(
    'INSERT INTO fichaje(usuario_id) VALUES (?)', [usuario_id],
    function (err, result) {
      if (err) {
        throw err;
      };
      callback(result)
    })
}

module.exports = {
  texto,
  guardarFecha
};