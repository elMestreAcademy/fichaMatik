const mysql = require("mysql");

// Configuración de la conexión a MySQL
const conexion = mysql.createConnection({
  host: '192.168.1.224',
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

function texto(callback) {
  const query = 'SELECT nombre, primer_apellido, segundo_apellido FROM usuario WHERE usuario_id = 1'

  conexion.query(query, function (err, result) {
    if (err) {
      throw err;
    };
    callback(result)
  })
}

function guardarFecha(currentDate, callback) {
  conexion.query(
    'INSERT INTO fichaje(usuario_id, fecha) VALUES (1, ?)', [currentDate],
    // callback(err, result),
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