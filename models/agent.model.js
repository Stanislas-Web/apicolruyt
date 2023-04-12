const {Schema, model} = require('mongoose');
// const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    nom: { type: String, required: true },
    postnom: { type: String, required: true },
    prenom: { type: String, required: true },
    sexe: { type: String, required: true },
    lieuNaissance: { type: String, required: true },
    telephone: { type: String, required: true },
    email: { type: String },
    photo: { type: String},
    fonction: { type: String, required: true },
    grade: { type: String, required: true },
    dateNaissance: { type: String, required: true },
    dateEmbauche: { type: String, required: true },
    idSite: { type: String, required: true },
    idUser: { type: String, required: true },
    idDirection: { type: String, required: true },
    idService: { type: String, required: true },
},{timestamps: true, versionKey: false });

module.exports.Agent = model('Agent', userSchema);
