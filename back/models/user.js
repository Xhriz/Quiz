const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
    unique: true,
  },
  setor: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  password:{
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
  },
  answers:[{
    type: String,
    minlength: 2,
    maxlength: 100,
  }]
});

module.exports = mongoose.model('User', userSchema);