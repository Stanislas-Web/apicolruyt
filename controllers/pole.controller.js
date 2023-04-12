
const { Pole } = require("../models/pole.model");

module.exports.createPole = async (req, res) => {
  const {
    libelle
  } = req.body;

  const pole = new Pole({
    libelle: libelle
  });

  const result = await pole.save();

  return res.status(200).send({
    message: "Save Pole",
    data: result,
  });
};

module.exports.getAllPole = async (req, res) => {
  const result = await Pole.find();

  return res.status(200).send({
    message: "get all articles",
    data: result,
  });
};
