const express= require('express');
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
const path=require('path');
const User= require('./models/user');
const bcrypt=require('require');


const app= express();

app.use(express.static(path.join(__dirname, 'src')));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.json());


mongoose.connect('mongodb+srv://christian:<christian07>@quiz.lcmps.mongodb.net/?retryWrites=true&w=majority&appName=Quiz')
.then(() => console.log("Conectado ao MongoDB"))
.catch((err) => console.log("Erro ao conectar ao MongoDB", err));


app.post('/register', (req, res)=>{
    const {name, setor, email, password}= req.body;

    bcrypt.hash(password, 10)
    .then((hashedPassword)=>{
        return User.create({name, setor, email, password:hashedPassword, point:0});
    })
    .then((users)=>res.send({data: users}))
    .catch((err)=>{
        res.status(400).send({message:err});
   
    })

     return User.create({name, setor, email, password, point:0})
    .then((users)=>res.send({data: users}))
    .catch((err)=>{
        res.status(400).send({message:err});
    })

   // const newUser= new User({name, setor, email, password, point: 0,});
   // newUser.save();

   // res.status(201).json({message:'Usuario registrado'});
});

app.post('/login',(req, res)=>{
    const {email, password}=req.body;
    return User.findOne({email, password})
    .then((user)=>{res.json({message:'login feito', user})})
})


//

app.post('/submit-answer', async (req, res) => {
    const { email, answer } = req.body;
  
    try {
      const user = await User.findOneAndUpdate({ email }, { answer });
  
      if (user) {
        res.status(200).json({ message: 'Resposta enviada com sucesso!' });
      } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Erro ao enviar resposta', error });
    }
  });

  


  app.get('/ranking', async (req, res) => {
    try {
      const ranking = await User.find({}).sort({ point: -1 }).select('name setor point');
  
      res.status(200).json(ranking);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar ranking', error });
    }
  });
  



//app.get('*', (req, res)=>{
   // res.sendFile(path.join(__dirname, 'src', 'index.html'))
//})


app.listen(3000, ()=>{
    console.log("servidor iniciado na porta 8080");
});