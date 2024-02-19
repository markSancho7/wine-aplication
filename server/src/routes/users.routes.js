const express = require('express');
const usersController = require('../controllers/user.controller');
const usersRoutes = express.Router();

usersRoutes.get('/', usersController.getAllUsers);
usersRoutes.get('/:id', usersController.getUserById);
usersRoutes.patch('/:id', usersController.updateUser);
usersRoutes.delete('/:id', usersController.deleteUser);

module.exports = usersRoutes;
