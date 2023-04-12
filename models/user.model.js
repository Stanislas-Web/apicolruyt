const {Schema, model} = require('mongoose');
// const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    password: { type: String, required: true },
    username: { type: String, required: true },
    number: { type: String, required: true },
    photo:{type: String, required: true}
},{timestamps: true, versionKey: false });

module.exports.User = model('User', userSchema);