/*
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nome: {
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