const express = require('express');
const opinionsController = require('../controllers/opinion.controller');
const opinionsRoutes = express.Router();

opinionsRoutes.get('/', opinionsController.getAllOpinions);
opinionsRoutes.get('/:id', opinionsController.getOpinionById);
opinionsRoutes.post('/', opinionsController.createOpinion);
opinionsRoutes.patch('/:id', opinionsController.updateOpinion);
opinionsRoutes.delete('/:id', opinionsController.deleteOpinion);

module.exports = opinionsRoutes;