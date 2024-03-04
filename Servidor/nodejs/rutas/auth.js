const express    = require('express');
const router     = express.Router();
const controller = require('../controladores/usuario');

router.post('/registro', controller.addUsuario); 
router.post('/login', controller.loginUsuario); 


module.exports = router;