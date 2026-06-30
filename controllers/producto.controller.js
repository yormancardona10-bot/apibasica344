const Producto = require('../models/producto.model');

exports.consultar = async (req, res) => {
  const data = await Producto.find();
  res.render('pages/productos.ejs', { productos: data });
};

exports.obtenerPorId = async (req, res) => {
  const data = await Producto.findById(req.params.id);
  res.json(data);
};

exports.crear = async (req, res) => {
  try {
    const data = new Producto(req.body);
    await data.save();
    res.redirect('/productos');
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.actualizar = async (req, res) => {
  const data = await Producto.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(data);
};

exports.eliminar = async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.redirect('/productos')
};

exports.formEditar = async (req, res) => {
  const producto = await Producto.findById(req.params.id);
  res.render('pages/editarproducto', { producto });
};

exports.guardarEdicion = async (req, res) => {
  await Producto.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/productos');
};

exports.formulario = async (req, res) => {
  res.render('pages/registrarproducto');
};