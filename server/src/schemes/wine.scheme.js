const { mongoose } = require('mongoose');
const WineScheme = mongoose.Schema(
  {
    ruteImg: String,
    name: String,
    countrie: String,
    grape: String,
    color: String,
    wineStyle: String,
    description: String,
  },
  {
    colection: 'wines',
  }
);

module.exports = WineScheme;
