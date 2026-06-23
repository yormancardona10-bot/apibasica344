const mongoose = require("mongoose");

const URI = process.env.MONGOURI;

const conexion = mongoose.connect(URI)
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch(err => console.log("Error de conexión:", err));

module.exports = conexion;