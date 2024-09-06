const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '192.168.1.224',
  user: 'Muscardina',
  password: 'krono',
  database: 'fichamatik'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado a la base de datos!');

  // Realizar consultas SQL aquí
  connection.query('SELECT * FROM tu_tabla', (err, results) => {
    if (err) throw err;
    console.log(results);
  });
});