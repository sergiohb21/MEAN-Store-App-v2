const express = require('express');
const router = express.Router();
const controller = require('../controladores/usuario')

router.get('/usuarios',controller.getUsuarios);
router.post('/usuarios',controller.crearUsuario);
router.put('/usuarios',controller.modificarUsuario);
router.delete('/usuario/:_id',controller.borrarUsuario);
router.get('/usuario/:_id',controller.getUsuario);



module.exports = router;