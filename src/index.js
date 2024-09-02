import "./styles/index.css";

const image=document.querySelector(".picture__img");
const popup=document.querySelector(".popup");
const imgPopup=document.querySelector(".popup__image");

const popupGallery=document.querySelector(".popup-gallery");
const popupImg=document.querySelector(".popup-gallery__img");

const container= document.querySelector(".gallery__container");
const imageGallery=document.querySelectorAll(".gallery__img");
const leftArrow=document.querySelector(".gallery__arrow--left");
const rightArrow=document.querySelector(".gallery__arrow--right");

const buttonClose=document.querySelector(".button-close");
const login=document.querySelector(".login");

const register=document.querySelector(".register");
const toRegister=document.querySelector(".login__toregister");
const toLogin=document.querySelector(".register__tologin");

<<<<<<< HEAD
const tableCelName=document.querySelector('.table__body_cel-name');
const tableCelSetor=document.querySelector('.table__body_cel-area');
const tableCelPoints=document.querySelector('.table__body_cel-points');

const formRegister=document.querySelector(".register__block");
const registerName=document.querySelector(".register__name");
const registerSetor=document.querySelector(".register__setor");
const registerEmail=document.querySelector(".register__email");
const registerPassword=document.querySelector(".register__password");
const formLogin=document.querySelector(".login__block");
const loginEmail=document.querySelector(".login__email");
const loginPassword=document.querySelector(".login__password");
const loginError=document.querySelector(".login__error-msg");
const formAnswer=document.querySelector(".answer");
=======
const formRegister=document.querySelector('.register__block');
const registerName=document.querySelector('.register__name');
const registerSetor=document.querySelector('.register__setor');
const registerEmail=document.querySelector('.register__email');
const registerPassword=document.querySelector('.register__password');
>>>>>>> da2dcd06e1a2d3788c7aa5c2e1802a945b20cf8a


let index = 0;

image.addEventListener("click", ()=>{
  popup.classList.add("popup__visible");
  imgPopup.src=image.src;
  document.body.style.overflow = 'hidden';
});
popup.addEventListener("click", ()=>{
    popup.classList.remove("popup__visible");
    document.body.style.overflow = 'auto';
});

imageGallery.forEach((image)=>{
  image.addEventListener("click", ()=>{
    popupGallery.classList.add("popup-gallery__visible");
    document.body.style.overflow = 'hidden';
    popupImg.src=image.src;
  });
});
popupGallery.addEventListener("click", ()=>{
  popupGallery.classList.remove("popup-gallery__visible");
  document.body.style.overflow='auto';
});

function updateGallery(){
 let offset = -index*600;
  
  if(window.innerWidth<=1500){
    offset=-index*500;
  } 
  if(window.innerWidth<=1300){
    offset=-index*400;
  }
  container.style.transform=`translateX(${offset}px)`;
}

leftArrow.addEventListener("click", ()=>{
  index=(index>0) ? index - 1 : imageGallery.length -1;
  updateGallery();
});
rightArrow.addEventListener("click", ()=>{
  index=(index< imageGallery.length -1 ) ? index + 1 : 0;
  updateGallery();
});

buttonClose.addEventListener("click", ()=>{
  login.classList.add("login__done");
});

toRegister.addEventListener("click", ()=>{
  register.classList.add("register__done")
  login.classList.remove("login__done");
});

toLogin.addEventListener("click", ()=>{
  register.classList.remove("register__done")
  login.classList.add("login__done");
});

<<<<<<< HEAD


formRegister.addEventListener('submit', (e)=>{
  e.preventDefault();

  const data={
    name:registerName.value,
    setor:registerSetor.value,
    email:registerEmail.value,
    password:registerPassword.value,
  };

  fetch('/register', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then((res)=>{
       if(res.ok){
        return res.json();
       }else{
        throw new Error('Erro ao registrar')
       }
  })
  .then((data)=>{
    console.log('usuario registrado', data);
  })
  .catch((error)=>{
    console.log('erro', error);
  })
})


formLogin.addEventListener('submit', (e)=>{
  e.preventDefault();

  const data={
    email:loginEmail.value,
    password:loginPassword.value
  }
  fetch('/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  }).then((res)=>{
       if(res.ok){
        return res.json();
       }else{
        throw new Error('Erro ao entrar')
       }
  })

})



formAnswer.addEventListener('submit', async (e) => {
  e.preventDefault();

  const data = {
    email: userEmail, // Supondo que você tenha o email do usuário logado armazenado
    answer: formAnswer.querySelector('.input').value,
  };

  try {
    const response = await fetch('/submit-answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.status === 200) {
      alert(result.message); // Resposta enviada com sucesso
    } else {
      alert(result.message); // Exibe mensagem de erro
    }
  } catch (error) {
    console.error('Erro ao enviar resposta:', error);
  }
});


//

async function fetchRanking() {
  try {
    const response = await fetch('/ranking');
    const ranking = await response.json();

    ranking.forEach((user) => {
      const row = `
        <tr class="table__body">
          <td class="table__body_cel-name">${user.name}</td>
          <td class="table__body_cel-area">${user.setor}</td>
          <td class="table__body_cel-points">${user.point}</td>
        </tr>
      `;
      document.querySelector('.table').innerHTML += row;
    });
  } catch (error) {
    console.error('Erro ao buscar ranking:', error);
  }
}

fetchRanking();
=======
toRegister.addEventListener("click", ()=>{
  register.classList.add("register__done")
  login.classList.remove("login__done");
});

toLogin.addEventListener("click", ()=>{
  register.classList.remove("register__done")
  login.classList.add("login__done");
});




// Conecte-se ao banco de dados
///mongoose.connect('mongodb://127.0.0.1:27017/ranking')
//.then(() => console.log('Conectado ao MongoDB'))
//.catch((error) => console.error('Erro ao conectar ao MongoDB:', error));

>>>>>>> da2dcd06e1a2d3788c7aa5c2e1802a945b20cf8a
