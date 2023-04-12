
const { Prestation } = require("../models/prestation.model");

module.exports.createPrestation = async (req, res) => {
  const {
    typePrestation,
    datePrestation,
    idAgent,
    validationPrestation,
    idUser 
  } = req.body;

  const prestation = new Agent({
    typePrestation: typePrestation,
    datePrestation: datePrestation,
    idAgent: idAgent,
    validationPrestation: validationPrestation,
    idUser: idUser 
  });

  const result = await prestation.save();

  return res.status(200).send({
    message: "Save Prestation",
    data: result,
  });
};

module.exports.getAllPrestation = async (req, res) => {
  const result = await Prestation.find();

  return res.status(200).send({
    message: "get all prestations",
    data: result,
  })

}




