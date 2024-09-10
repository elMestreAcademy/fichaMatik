const app = require('./server');        // CONFIGURACION DEL SERVER en server.js

require('./routes')(app);

app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en http://localhost puerto:${app.get('port')}`)
})
