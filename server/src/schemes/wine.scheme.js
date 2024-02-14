const { mongoose } = require('mongoose');
const WineScheme = mongoose.Schema(
  {
    name: String,
    countrie: String,
    grape: String,
    color: String,
    description: String,
  },
  {
    colection: 'wines',
  }
);

module.exports = WineScheme;
