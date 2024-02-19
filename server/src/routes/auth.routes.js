const express = require('express');
const authRoutes = express.Router();
const authController = require('../controllers/auth.controller');

authRoutes.get('/verify-token', authController.verifyToken);
authRoutes.post('/login', authController.login);
authRoutes.post('/register', authController.register);

module.exports = authRoutes;
