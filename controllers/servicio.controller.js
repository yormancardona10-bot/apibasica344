const Servicio = require('../models/servicio.model');

exports.consultar = async (req, res) => {
  const data = await Servicio.find();
  res.render('pages/services.ejs', { servicios: data });
};

exports.obtenerPorId = async (req, res) => {
  const data = await Servicio.findById(req.params.id);
  res.json(data);
};

exports.crear = async (req, res) => {
  const data = new Servicio(req.body);
  await data.save();
  res.json(data);
};

exports.actualizar = async (req, res) => {
  const data = await Servicio.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

exports.eliminar = async (req, res) => {
  await Servicio.findByIdAndDelete(req.params.id);
  res.redirect('/servicios');
};

exports.formEditar = async (req, res) => {
  const servicio = await Servicio.findById(req.params.id);
  res.render('pages/editarservicio', { servicio });
};

exports.guardarEdicion = async (req, res) => {
  await Servicio.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/servicios');
};

exports.formulario = async (req, res) => {
  res.render('pages/registrarservicio');
};