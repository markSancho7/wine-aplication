const mongoose = require('mongoose');
const WineScheme = require('../schemes/wine.scheme');

const WineModel = mongoose.model('Wine', WineScheme);

module.exports = WineModel;
