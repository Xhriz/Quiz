const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');
const bcrypt = require('bcrypt');


const app = express();
app.use(cors());
app.use(express.json());

const users=[];

app.post('/register', async (req,res)=>{
  try {
    const { name, setor, email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    users.push({ name, setor, email, password});

    res.status(201).send('Registro realizado com sucesso');
  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    res.status(500).send('Erro ao registrar usuário');
  }
})

app.get('/register', (req,res)=>{
 res.status(200).json(users);
});


app.post('/login', async (req, res)=>{
  try {
    const { email, password } = req.body;

    const user = users.find(u => u.email === email);

    if (!user) {
      return res.status(400).send(users);
    }
      const isMatch = users.find(u => u.password === password);
    if (!isMatch) {
     return res.status(400).send('Senha incorreta');
    }
    if(user && isMatch){
    res.status(200).send('Login realizado com sucesso');
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    res.status(500).send('Erro ao fazer login');
  }
     
})






/*
const uri = 'mongodb+srv://christian:<christian07>@quiz.lcmps.mongodb.net/<quiz>?retryWrites=true&w=majority&appName=Quiz';
mongoose.connect(uri)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch(err => console.error('Erro ao conectar ao MongoDB', err));


app.post('/register', (req, res)=>{
    const {name, setor, email, password}= req.body;

    bcrypt.hash(password, 10)
    .then((hashedPassword)=>{
        return User.create({name, email, setor, password:hashedPassword});
    })
    .then((users)=>res.json({data: users}))
    .catch((err)=>{
        console.error('Erro ao criar o usuário', err); 
        return res.status(500).json({ message: 'Erro ao criar o usuário', error: err.message });
   
    })
});

app.post('/login',(req, res)=>{
    const {email, password}=req.body;
     User.findOne({email})
    .then((user)=>{
        if(!user){
          return res.status(401).json({message:'usuario não encontrado'});
        }
        bcrypt.compare(password, user.password)
        .then((isValid) => {
          if (!isValid) {
            return res.status(401).json({ message: 'Senha inválida' });
          }
          return res.json({ message: 'Login realizado com sucesso' });
        })
    })
    .catch((err) => {
      console.error('Erro ao comparar senhas', err);
      return res.status(500).json({ message: 'Erro ao realizar login' });
    });
})

app.post('/submit-answer', (req, res) => {
    const { email, answer } = req.body;
    if (!answer || !email) {
      return res.status(400).json({ success: false, message: 'Dados incompletos' });
    }
      User.findOneAndUpdate({ email }, { $push:{answers:answer} }, {new:true})
      .then((user)=>{
        if (!user) {
          return res.status(404).json({ success: false, message: 'Usuário não encontrado' });
        }
        res.json({ success: true, user });
      })
    .catch((err) => {
      console.error('Erro ao salvar a resposta', err);
      return res.status(500).json({ success: false, message: 'Erro ao salvar a resposta' });
    });
  })

  app.get('/ranking', (req, res) => {
      const ranking = User.find({}).sort({ point: -1 }).select('name setor point')
      .then(()=>{
        res.status(200).json(ranking);
      })
      .catch ((error)=> {
        res.status(500).json({ message: 'Erro ao buscar ranking', error });
      })      
    } 
);
*/

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
