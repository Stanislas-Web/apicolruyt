
const { Direction } = require("../models/direction.model");

module.exports.createDirection = async (req, res) => {
  const {
    libelle
  } = req.body;

  const direction = new Direction({
    libelle: libelle
  });

  const result = await direction.save();

  return res.status(200).send({
    message: "Save direction",
    data: result,
  });
};

module.exports.getAllDirection = async (req, res) => {
  const result = await Direction.find();

  return res.status(200).send({
    message: "get all directions",
    data: result,
  });
};
