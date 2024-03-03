const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsuarioSchema = new Schema({
    _id: {
     	type: Schema.ObjectId,
	    auto:true
    },	
	nombre: {
		type: String,
		required: true
	},
	codigo: {
		type: String,
		required: true,
        unique: true // Asegura que el código sea único
	},
	tipo: {
		type: String,
		required: true
	},
	clave: {
		type: String,
		required: true
	},
	estado: {
		type: String,
		required: true
	},
	fechaNacimiento: {
		type: Date
	},
	fechaUltimoAcceso: {
		type: Date
	},
	numeroAccesosErroneo: {
		type: Number,
		required: true,
        default: 0 // Valor por defecto para el número de accesos erróneos
	}
});

mongoose.model('Usuario', UsuarioSchema);



