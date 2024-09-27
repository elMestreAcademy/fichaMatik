const mysql = require("mysql2");

// Configuración de la conexión a MySQL
const conexion = mysql.createConnection({
  host: "masterfactories.com",
  port: 8192,
  user: "Muscardina",
  password: "krono",
  database: "fichamatik",
});

conexion.connect(function (err) {
  if (err) {
    console.error("Error conectando a la base de datos:", err.stack);
    return;
  }
  console.log("Conectado a la base de datos");
});

function buscarEmpleado(usuario_id, callback) {
  conexion.query(
    `SELECT
      nombre, primer_apellido, segundo_apellido, fichaje_id, entrada
    FROM usuario
    LEFT JOIN fichaje ON usuario.usuario_id = fichaje.usuario_id AND fichaje.salida IS NULL
    WHERE 1
    AND usuario.usuario_id = (?) LIMIT 1`,
    [usuario_id],
    function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    }
  );
}

function guardarFecha(usuario_id, callback) {
  conexion.query(
    "INSERT INTO fichaje(usuario_id, entrada) VALUES (?, NOW())",
    [usuario_id],
    function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    }
  );
}

function cerrarFichaje(usuario_id, callback) {
  conexion.query(
    "UPDATE fichaje SET salida = NOW() WHERE usuario_id = ? AND salida IS NULL",
    [usuario_id],
    function (err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    }
  );
}

module.exports = {
  //texto,
  guardarFecha,
  // salida,
  buscarEmpleado,
  cerrarFichaje,
};
