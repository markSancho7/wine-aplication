const { mongoose } = require('mongoose');
const OpinionScheme = mongoose.Schema(
  {
    wineId:String,
    userName: String,
    opinion:String
  },
  {
    colection: 'opinions',
  }
);

module.exports = OpinionScheme;