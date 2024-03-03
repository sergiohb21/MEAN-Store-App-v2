const express = require('express');
const router = express.Router();
const controller = require('../controladores/categoria')

router.get('/categorias',controller.getCategorias);

module.exports = router;