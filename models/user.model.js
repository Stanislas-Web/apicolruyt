const {Schema, model} = require('mongoose');
// const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    number: { type: String, required: true },
    photo:{type: String, required: true},
    
},{timestamps: true, versionKey: false });

module.exports.User = model('User', userSchema);