const { v4 } = require('uuid');
const UserModel = require('../models/user.model');

const usersController = {};

usersController.getAllUsers = async (req, res) => {
  try {
    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch {
    return res.send('Error al leer archivo');
  }
};
usersController.getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    return res.status(200).send(user);
  } catch {
    return res.send('Error al leer archivo');
  }
};

usersController.updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) return res.status(409).send({ error: 'User not exists' });
    await UserModel.updateOne({ _id: id }, { $set: { ...req.body } });
    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch {
    return res.send('error patch');
  }
};

usersController.deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserModel.findById(id);
    if (!user) return res.status(409).send({ error: 'User not exists' });
    await UserModel.deleteOne({ _id: id });
    const allUsers = await UserModel.find();
    return res.status(200).send(allUsers);
  } catch {
    return res.send('error delete');
  }
};
module.exports = usersController;
