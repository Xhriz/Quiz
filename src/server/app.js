/*
const User = require('../models/user');

  module.exports.getUsers = (req, res) => {
    User.find({})
      .then((users) => res.json({ data: users }))
      .catch(() => res.status(500).json({ message: 'Error' }));
  };
  
  module.exports.createUser = (req, res) => {
    const { nome, email, setor } = req.body; // Use os nomes de campo conforme definido no modelo
  
    User.create({ nome, email, setor, pontos: 0, resposta: '' })
      .then((user) => res.status(201).json({ data: user }))
      .catch((err) => {
        if (err.name === 'ValidationError') {
          res.status(400).json({ message: 'Dados inválidos' });
        } else {
          res.status(500).json({ message: 'Error' });
        }
      });
  };*/