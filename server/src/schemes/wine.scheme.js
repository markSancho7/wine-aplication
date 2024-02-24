const { mongoose } = require("mongoose");
const WineScheme = mongoose.Schema(
  {
    ruteImg: String,
    name: String,
    price: String,
    producer: String,
    countrie: String,
    grape: String,
    color: String,
    graduation: String,
    wineStyle: String,
    description: String,
  },
  {
    colection: "wines",
  }
);

module.exports = WineScheme;
