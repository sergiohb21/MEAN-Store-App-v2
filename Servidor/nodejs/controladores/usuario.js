require('../modelos/usuario'); 

const mongoose = require('mongoose');
const Usuario  = mongoose.model('Usuario');
const jwt      = require('jsonwebtoken');
const bcrypt   = require('bcrypt');
const Joi      = require('@hapi/joi');


const schemaRegister = Joi.object({
    name: Joi.string().min(6).max(255).required(),
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})


async function addUsuario(req, res) {
  
  // validate user
  const { error } = schemaRegister.validate(req.body)
     
  if (error) {
      return res.status(400).json(
          {error: error.details[0].message}
      )
  }

  const isEmailExist = await Usuario.findOne({ email: req.body.email });
  if (isEmailExist) {
      return res.status(400).json(
          {error: 'Email ya registrado'}
      )
  }

  // hash contraseña
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(req.body.password, salt);

  const user = new Usuario({
      name: req.body.name,
      email: req.body.email,
      password: password
  });
  try {
      const savedUser = await user.save();
      res.json({
          error: null,
          data: savedUser
      })
  } catch (error) {
      res.status(400).json({error})
  }
}


const schemaLogin = Joi.object({
    email: Joi.string().min(6).max(255).required().email(),
    password: Joi.string().min(6).max(1024).required()
})

async function loginUsuario(req, res) {
  
  // validaciones
  const { error } = schemaLogin.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message })
  
  const user = await Usuario.findOne({ email: req.body.email });
  if (!user) return res.status(400).json({ error: 'Usuario no encontrado' });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) return res.status(400).json({ error: 'contraseña no válida' })
  
  
  // create token
  const token = jwt.sign({
      name: user.name,
      id: user._id
    }, process.env.TOKEN_SECRET)
    
    res.json({
        error: null,
        data: token
    })
    
  res.header('auth-token', token).json({
      error: null,
      data: {token}
  })
}

module.exports = { addUsuario, loginUsuario };
