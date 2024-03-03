const express        = require('express')
const mongoose       = require('mongoose');
const bodyParser     = require('body-parser'); //Parsea el cuerpo de las solicitudes en formato JSON
const cors           = require('cors');  //mÃ³dulo para permitir CORS
const rutasProducto  = require("./rutas/producto")
const rutasCategoria = require("./rutas/categoria")
const authRoutes     = require('./rutas/auth');
const verifyToken    = require('./rutas/validate-token');
const config         = require("./config");
const app            = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cors()); // NO OLVIDAR QUITAR EN PRODUCCION SINO SE DESEA CORS

const mongoUri = `mongodb://${config.DB_SERVICE}:${config.DB_PORT}/${config.DB_DATABASE}?authSource=admin`; // url de la base de datos mongodb

let db = mongoose.connection;  

let connectWithRetry= function() {
  return mongoose.connect(mongoUri, {
    user: config.DB_USERNAME,
    pass: config.DB_PASSWORD
  });
};   // método que crea la conexión a la BBDD

connectWithRetry();  // se crea la conexión

db.on('error', () => {   // si hay un fallo de la conexión se vuelve a intentar pasado un tiempo
	setTimeout(() => {
		console.log('Fallo en la conexión a la BBD. Se reintenta.');
		connectWithRetry();
      }, 1000);
});

db.on('connected', () =>{
  app.use(rutasProducto); //añadir verifyoken
  app.use(rutasCategoria); //añadir verifyoken
  app.use(authRoutes); //añadir verifyoken
  
  app.listen(config.PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${config.PORT}`)
  })
})
