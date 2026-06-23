require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

const conexion = require("./config/connectiondb");

const enrutamiento = require('./Router/enrutamiento.Router');
app.use('/', enrutamiento);

const clienteController = require("./controllers/cliente.controller");
const productoController = require("./controllers/producto.controller");
const servicioController = require("./controllers/servicio.controller");

app.get('/', (req, res) => {
  res.render('pages/index.ejs');
});

app.get('/productos', productoController.consultar);
app.get('/productos/:id', productoController.obtenerPorId);
app.post('/productos', productoController.crear);
app.put('/productos/:id', productoController.actualizar);
app.delete('/productos/:id', productoController.eliminar);

app.get('/servicios', servicioController.consultar);
app.get('/servicios/:id', servicioController.obtenerPorId);
app.post('/servicios', servicioController.crear);
app.put('/servicios/:id', servicioController.actualizar);
app.delete('/servicios/:id', servicioController.eliminar);

app.get('/formulario', clienteController.formulario);

app.listen(8888, () => {
  console.log("Servidor corriendo en puerto 8888");
});