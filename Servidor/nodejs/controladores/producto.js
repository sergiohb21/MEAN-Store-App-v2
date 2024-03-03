require('../modelos/producto');

const mongoose = require('mongoose');
const Producto = mongoose.model('Producto');

async function getproductos(req, res) {
  try {
    const productos = await Producto.find({});
    if (productos && productos.length > 0) {
      return res.status(200).send(productos);
    } else {
      return res.status(200).send([]); // Devuelve un array vacío si no hay productos encontrados
    }
  } catch (error) {
    return res.status(400).send({
      status: 'failure',
      error: error.message // Devuelve el mensaje de error para facilitar la depuración
    });
  }
}
async function getProductosCategoria(req, res) {
  try {
    const categoriaId = parseInt(req.params.categoriaId); // Convertir el id de la categoría a un número
    const productos = await Producto.find({ 'category': categoriaId });
    if (productos && productos.length > 0) {
      return res.status(200).send(productos);
    } else {
      return res.status(404).send({ message: 'No se encontraron productos para esta categoría' });
    }
  } catch (error) {
    return res.status(400).send({
      status: 'failure',
      error: error.message
    });
  }
}


async function addProducto(req, res) {
  try {
    const productoData = req.body;
    if (productoData._id) {
      delete productoData._id;
    }
    const producto = new Producto(productoData);
    await producto.save();
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

async function getProducto(req, res) {
  try {
    const productoId = req.params.productoId;
    const productoLeido = await Producto.findOne({ '_id': productoId });
    if (productoLeido) {
      return res.send(productoLeido);
    } else {
      return res.status(404).send({ status: 'not found' }); // Devuelve un 404 si el producto no se encuentra
    }
  } catch (error) {
    return res.status(400).send({
      status: 'failure',
      error: error.message
    });
  }
}

async function updateProducto(req, res) {
  try {
    const productoData = req.body;
    await Producto.updateOne({ '_id': productoData._id }, productoData);
    return res.send({ status: 'success' });
  } catch (error) {
    return res.status(400).send({
      status: 'failure',
      error: error.message
    });
  }
}

async function deleteProducto(req, res) {
  try {
    await Producto.deleteOne({ '_id': req.params._id });
    return res.send({ status: 'success' });
  } catch (error) {
    return res.status(400).send({
      status: 'failure',
      error: error.message
    });
  }
}

module.exports = { getproductos, getProductosCategoria, addProducto, getProducto, updateProducto, deleteProducto };
