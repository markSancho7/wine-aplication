const { mongoose } = require('mongoose');
const UserScheme = mongoose.Schema(
  {
    userName: String, 
    email: String,
    password: String,
  },
  {
    colection: 'users',
  }
);

module.exports = UserScheme;
