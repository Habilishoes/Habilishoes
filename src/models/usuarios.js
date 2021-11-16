const mongoose = require('mongoose');

const usuario = mongoose.Schema({
  Documento: { type: Number, required: true, unique: true },
  NombreApellido: { type: String, required: true },
  Telefono: { type: Number },
  Correo: { type: String, required: true },
  Sucursal: { type: String, required: true },
  Rol: { type: String, required: true },
});

module.exports = mongoose.model("Usuario", usuario);