require('../modelos/usuario'); 

const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

async function getUsuarios(req, res) {
  try {
    const usuariosLeidos = await Usuario.find({});
    if (usuariosLeidos && usuariosLeidos.length > 0) {
      return res.status(200).send(usuariosLeidos);
    } else {
      return res.status(200).send([]); // Devuelve un array vacío si no hay usuarios encontrados
    }
  } catch (error) {
    return res.status(400).send({
      status: 'failure',
      error: error.message // Devuelve el mensaje de error para facilitar la depuración
    });
  }
}

async function crearUsuario(req, res) {
  try {
    const usuarioData = req.body; // Renombrar para mayor claridad
    if (usuarioData._id == "") {
      delete usuarioData._id;
    }
    const usuario = new Usuario(usuarioData);
    await usuario.save();
    return res.status(200).send({
      status: 'success'
    });
  } catch (error) {
    return res.status(400).send({
      status: 'failure',
      error: error.message
    });
  }
}

async function getUsuario(req, res) {
  try {
    const usuarioLeido = await Usuario.findOne({ '_id': req.params.id });
    if (usuarioLeido) {
      return res.send(usuarioLeido);
    } else {
      return res.status(404).send({ status: 'not found' }); // Devuelve un 404 si el usuario no se encuentra
    }
  } catch (error) {
    return res.status(400).send({
      status: 'failure',
      error: error.message
    });
  }
}

async function modificarUsuario(req, res) {
  try {
    const usuarioData = req.body;
    await Usuario.updateOne({ '_id': usuarioData._id }, usuarioData);
    return res.send({ status: 'success' });
  } catch (error) {
    return res.status(400).send({
      status: 'failure',
      error: error.message
    });
  }
}

async function borrarUsuario(req, res) {
  try {
    await Usuario.deleteOne({ '_id': req.params.id });
    return res.send({ status: 'success' });
  } catch (error) {
    return res.status(400).send({
      status: 'failure',
      error: error.message
    });
  }
}

module.exports = { getUsuarios, crearUsuario, borrarUsuario, getUsuario, modificarUsuario };
