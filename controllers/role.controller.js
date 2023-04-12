
const { Role } = require("../models/role.model");

module.exports.createRole = async (req, res) => {
  const {
    libelle
  } = req.body;

  const role = new Role({
    libelle: libelle
  });

  const result = await role.save();

  return res.status(200).send({
    message: "Save Role",
    data: result,
  });
};

module.exports.getAllRole = async (req, res) => {
  const result = await Role.find();

  return res.status(200).send({
    message: "get all Roles",
    data: result,
  });
};
