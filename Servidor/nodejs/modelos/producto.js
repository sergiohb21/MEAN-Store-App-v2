const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ProductSchema = new Schema({
    _id: {
        type: Schema.ObjectId,
        auto:true
    },
    title:{
        type: String,
        required:true
    },
    price:{
        type: Number,
        required:true
    },
    description: {
        type:String
    },
    image: {
        type: String
    },
    category: {
        type: Number,
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

module.exports = mongoose.model('Producto', ProductSchema);
