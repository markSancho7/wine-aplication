const { v4 } = require("uuid");
const WineModel = require("../models/wine.model");

const winesController = {};

winesController.getAllWines = async (req, res) => {
  try {
    const allWines = await WineModel.find();
    return res.status(200).send(allWines);
  } catch {
    return res.send("Error al leer archivo");
  }
};
winesController.getWineById = async (req, res) => {
  const { id } = req.params;
  try {
    const wine = await WineModel.findById(id);
    return res.status(200).send(wine);
  } catch {
    return res.send("Error al leer archivo");
  }
};

winesController.createWine = async (req, res) => {
  const {
    ruteImg,
    name,
    price,
    producer,
    countrie,
    grape,
    color,
    graduation,
    wineStyle,
    description,
  } = req.body;
  if (!name || !countrie) return res.status(400).send({ error: "bad request" });
  try {
    const newWine = new WineModel({
      ruteImg,
      name,
      price,
      producer,
      countrie,
      grape,
      color,
      graduation,
      wineStyle,
      description,
    });
    await newWine.save();

    const allWines = await WineModel.find();
    return res.status(200).send(allWines);
  } catch {
    return res.status(500).send("Error al añadir vino");
  }
};

winesController.updateWine = async (req, res) => {
  const { id } = req.params;
  try {
    const wine = await WineModel.findById(id);
    if (!wine) return res.status(409).send({ error: "Wine not exists" });
    await WineModel.updateOne({ _id: id }, { $set: { ...req.body } });
    const allWines = await WineModel.find();
    return res.status(200).send(allWines);
  } catch {
    return res.send("error patch");
  }
};

winesController.deleteWine = async (req, res) => {
  const { id } = req.params;
  try {
    const wine = await WineModel.findById(id);
    if (!wine) return res.status(409).send({ error: "Wine not exists" });
    await WineModel.deleteOne({ _id: id });
    const allWines = await WineModel.find();
    return res.status(200).send(allWines);
  } catch {
    return res.send("error delete");
  }
};
module.exports = winesController;
