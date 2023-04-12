



const {Schema, model} = require('mongoose');
// const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    typePrestation: { type: String, required: true },
    datePrestation: { type: String, required: true },
    idAgent: { type: String, required: true },
    validationPrestation: { type: String, required: true },
    idUser: { type: String, required: true },
    
},{timestamps: true, versionKey: false });

module.exports.Prestation = model('Prestation', userSchema);