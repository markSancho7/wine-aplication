const { v4 } = require('uuid');
const OpinionModel = require('../models/opinion.model');

const opinionsController = {};

opinionsController.getAllOpinions = async (req, res) => {
  try {
    const allOpinions = await OpinionModel.find();
    return res.status(200).send(allOpinions);
  } catch {
    return res.send('Error al leer archivo');
  }
};
opinionsController.getOpinionById = async (req, res) => {
  const { id } = req.params;
  try {
    const opinion = await OpinionModel.findById(id);
    return res.status(200).send(opinion);
  } catch {
    return res.send('Error al leer archivo');
  }
};

opinionsController.createOpinion = async (req, res) => {
  const {userName, opinion, wineId} =
    req.body;
  if (!userName || !opinion) return res.status(400).send({ error: 'bad request' });
  try {
    const newOpinion = new OpinionModel({
        userName,
        opinion,
        wineId
    });
    await newOpinion.save();

    const allOpinions = await OpinionModel.find();
    return res.status(200).send(allOpinions);
  } catch {
    return res.status(500).send('Error al añadir opinion');
  }
};

opinionsController.updateOpinion = async (req, res) => {
  const { id } = req.params;
  try {
    const opinion = await OpinionModel.findById(id);
    if (!opinion) return res.status(409).send({ error: 'opinion not exists' });
    await OpinionModel.updateOne({ _id: id }, { $set: { ...req.body } });
    const allOpinions = await OpinionModel.find();
    return res.status(200).send(allOpinions);
  } catch {
    return res.send('error patch');
  }
};

opinionsController.deleteOpinion = async (req, res) => {
  const { id } = req.params;
  try {
    const opinion = await OpinionModel.findById(id);
    if (!opinion) return res.status(409).send({ error: 'opinion not exists' });
    await OpinionModel.deleteOne({ _id: id });
    const allOpinions = await OpinionModel.find();
    return res.status(200).send(allOpinions);
  } catch {
    return res.send('error delete');
  }
};
module.exports = opinionsController;
