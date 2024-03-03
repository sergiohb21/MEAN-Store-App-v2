const express = require('express');
const router = express.Router();
const controller = require('../controladores/producto')

router.get('/productos',controller.getproductos);
router.get('/productos/:productoId',controller.getProducto);
router.get('/productos-categoria/:categoriaId',controller.getProductosCategoria);
router.post('/productos',controller.addProducto);
router.put('/productos',controller.updateProducto);
router.delete('/productos/:_id',controller.deleteProducto);


module.exports = router;