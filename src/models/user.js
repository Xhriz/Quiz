<<<<<<< HEAD
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  setor: {
=======
/*
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: {
>>>>>>> da2dcd06e1a2d3788c7aa5c2e1802a945b20cf8a
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  email: {
    type: String,
    required: true,
    minlength: 2,
<<<<<<< HEAD
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
=======
    maxlength: 50,
    unique: true,
  },
  setor: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  pontos: {
    type: Number,
    required: true,
    default: 0,
  },
  resposta: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
});

module.exports = mongoose.model('User', userSchema);*/
>>>>>>> da2dcd06e1a2d3788c7aa5c2e1802a945b20cf8a
