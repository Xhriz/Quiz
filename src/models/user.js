const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  setor: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  password:{
    type: String,
    required: true,
    minlength: 8,
    maxlength: 30,
  },
  point:{
    type: Number,
  },
  answer:{
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  }
});

module.exports = mongoose.model('user', userSchema);