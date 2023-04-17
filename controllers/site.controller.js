
const { Site } = require("../models/site.model");

module.exports.createSite = async (req, res) => {
  const {
    libelle
  } = req.body;

  const site = new Site({
    libelle: libelle
  });

  const result = await site.save();

  return res.status(200).send({
    message: "Save site",
    data: result,
  });
};

module.exports.getAllSite = async (req, res) => {
  const result = await Site.find();

  return res.status(200).send(result);
};
