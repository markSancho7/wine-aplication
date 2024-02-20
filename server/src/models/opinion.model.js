const mongoose = require('mongoose');
const OpinionScheme = require('../schemes/opinions.scheme');

const OpinionModel = mongoose.model('Opinion', OpinionScheme);

module.exports = OpinionModel;