const {Schema, model} = require('mongoose');
// const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    libelle: { type: String, required: true },
},{timestamps: true, versionKey: false });

module.exports.Service = model('Service', userSchema);
