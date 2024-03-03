const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategoriaSchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto:true
    },
    name:{
        type: String,
        required:true
    },
    image:{
        type: String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }   
});

module.exports = mongoose.model('Categoria', CategoriaSchema);
