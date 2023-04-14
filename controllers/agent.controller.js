
const { Agent } = require("../models/agent.model");

module.exports.createAgent = async (req, res) => {
  const {
    nom,
    postnom,
    prenom,
    sexe,
    lieuNaissance,
    telephone,
    email,
    photo,
    fonction,
    grade,
    dateNaissance,
    dateEmbauche,
    idSite,
    idUser,
    idDirection,
    idService,
  } = req.body;

  const agent = new Agent({
    nom: nom,
    postnom: postnom,
    prenom: prenom,
    sexe: sexe,
    lieuNaissance: lieuNaissance,
    telephone: telephone,
    email: email,
    photo: photo,
    fonction: fonction,
    grade: grade,
    dateNaissance: dateNaissance,
    dateEmbauche: dateEmbauche,
    idSite: idSite,
    idUser: idUser,
    idDirection: idDirection,
    idService: idService,
  });

  const result = await agent.save();

  return res.status(200).send({
    message: "Save Agent",
    data: result,
  });
};

module.exports.getAllAgent = async (req, res) => {
  const result = await Agent.find();

  // return res.status(200).send({
  //   message: "get all agents",
  //   data: result,
  // });
  return res.status(200).send(result);
};







