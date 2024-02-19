const { mongoose } = require('mongoose');
const UserScheme = mongoose.Schema(
  {
    email: String,
    password: String,
  },
  {
    colection: 'users',
  }
);

module.exports = UserScheme;
