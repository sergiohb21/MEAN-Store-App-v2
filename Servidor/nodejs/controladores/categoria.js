require('../modelos/categoria');

const mongoose  = require('mongoose');
const Categoria = mongoose.model('Categoria');

async function getCategorias(req, res) {
  try {
    const categorias = await Categoria.find({});
    if (categorias && categorias.length > 0) {
      return res.status(200).send(categorias);
    } else {
      return res.status(200).send([]); // Devuelve un array vacío si no hay categorias encontrados
    }
  } catch (error) {
    return res.status(400).send({
      status: 'failure',
      error: error.message // Devuelve el mensaje de error para facilitar la depuración
    });
  }
}


module.exports = { getCategorias };
