const express = require('express')
const clienteController = require("../controllers/cliente.controller");
const productoController = require("../controllers/producto.controller");
const servicioController = require("../controllers/servicio.controller");
const Router = express.Router();

//cliente
Router.get('/', clienteController.home);
Router.get('/clientes', clienteController.consultar);
Router.get('/clientes/eliminar/:id', clienteController.eliminar);
Router.get('/clientes/:id', clienteController.obtenerPorId);
Router.post('/clientes', clienteController.crear);
Router.put('/clientes/:id', clienteController.actualizar);
Router.delete('/clientes/:id', clienteController.eliminar);

//productos
Router.get('/productos', productoController.consultar);
Router.get('/productos/eliminar/:id', productoController.eliminar);
Router.get('/productos/:id', productoController.obtenerPorId);
Router.post('/productos', productoController.crear);
Router.put('/productos/:id', productoController.actualizar);
Router.delete('/productos/:id', productoController.eliminar);

//servicios
Router.get('/servicios', servicioController.consultar);
Router.get('/servicios/eliminar/:id', servicioController.eliminar);
Router.get('/servicios/:id', servicioController.obtenerPorId);
Router.post('/servicios', servicioController.crear);
Router.put('/servicios/:id', servicioController.actualizar);
Router.delete('/servicios/:id', servicioController.eliminar);

module.exports = Router;