const express = require('express');
const winesController = require('../controllers/wine.controller');
const winesRoutes = express.Router();

winesRoutes.get('/', winesController.getAllWines);
winesRoutes.get('/:id', winesController.getWineById);
winesRoutes.post('/', winesController.createWine);
winesRoutes.patch('/:id', winesController.updateWine);
winesRoutes.delete('/:id', winesController.deleteWine);

module.exports = winesRoutes;
