const Cliente = require('../models/cliente.model');

exports.consultar = async (req, res) => {
  const data = await Cliente.find();
  res.render('pages/clientes.ejs', { clientes: data });
};

exports.obtenerPorId = async (req, res) => {
  const data = await Cliente.findById(req.params.id);
  res.json(data);
};

exports.crear = async (req, res) => {
  try {
    const clienteNuevo = new Cliente({
      nombre: req.body.nombre,
      email: req.body.email,
      telefono: req.body.telefono
    });
    const resultado = await clienteNuevo.save();
    if (resultado) {
      res.redirect('/clientes');
    } else {
      res.render('pages/registrarcliente', { mensaje: "Hubo un error" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizar = async (req, res) => {
  const data = await Cliente.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

exports.eliminar = async (req, res) => {
  await Cliente.findByIdAndDelete(req.params.id);
  res.redirect('/clientes');
};

exports.home = async (req, res) => {
  res.render('pages/index');
};

exports.formulario = async (req, res) => {
  res.render('pages/registrarcliente');
};