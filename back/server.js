const express = require('express');
const cors = require('cors');
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

app.post('/answer', async (req, res) => {
    const {answer}= req.body;
try{
    users.push({answer})
      res.status(200).send('Deu bom');
}
    catch(err){
      res.status(400).send('Deu ruim' + err);
    }; 

  })

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`);
});
