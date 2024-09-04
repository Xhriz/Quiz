import "./styles/index.css";

const image = document.querySelector(".picture__img");
const popup = document.querySelector(".popup");
const imgPopup = document.querySelector(".popup__image");

const popupGallery = document.querySelector(".popup-gallery");
const popupImg = document.querySelector(".popup-gallery__img");

const container = document.querySelector(".gallery__container");
const imageGallery = document.querySelectorAll(".gallery__img");
const leftArrow = document.querySelector(".gallery__arrow--left");
const rightArrow = document.querySelector(".gallery__arrow--right");

const buttonClose = document.querySelector(".button-close");
const login = document.querySelector(".login");

const register = document.querySelector(".register");
const toRegister = document.querySelector(".login__toregister");
const toLogin = document.querySelector(".register__tologin");

const tableCelName = document.querySelector('.table__body_cel-name');
const tableCelSetor = document.querySelector('.table__body_cel-area');
const tableCelPoints = document.querySelector('.table__body_cel-points');

const formRegister = document.querySelector('.register__block');
const registerName = document.querySelector('.register__name');
const registerSetor = document.querySelector('.register__setor');
const registerEmail = document.querySelector('.register__email');
const registerPassword = document.querySelector('.register__password');
const formLogin = document.querySelector('.login__block');
const loginEmail = document.querySelector('.login__email');
const loginPassword = document.querySelector('.login__password');
const loginError = document.querySelector('.login__error-msg');
const formAnswer = document.querySelector('.answer');

let index = 0;

image.addEventListener("click", () => {
  popup.classList.add("popup__visible");
  imgPopup.src = image.src;
  document.body.style.overflow = 'hidden';
});

popup.addEventListener("click", () => {
  popup.classList.remove("popup__visible");
  document.body.style.overflow = 'auto';
});

imageGallery.forEach((image) => {
  image.addEventListener("click", () => {
    popupGallery.classList.add("popup-gallery__visible");
    document.body.style.overflow = 'hidden';
    popupImg.src = image.src;
  });
});

popupGallery.addEventListener("click", () => {
  popupGallery.classList.remove("popup-gallery__visible");
  document.body.style.overflow = 'auto';
});

function updateGallery() {
  let offset = -index * 600;
  
  if (window.innerWidth <= 1500) {
    offset = -index * 500;
  } 
  if (window.innerWidth <= 1300) {
    offset = -index * 400;
  }
  container.style.transform = `translateX(${offset}px)`;
}

leftArrow.addEventListener("click", () => {
  index = (index > 0) ? index - 1 : imageGallery.length - 1;
  updateGallery();
});

rightArrow.addEventListener("click", () => {
  index = (index < imageGallery.length - 1) ? index + 1 : 0;
  updateGallery();
});

buttonClose.addEventListener("click", () => {
  login.classList.add("login__done");
});

toRegister.addEventListener("click", () => {
  register.classList.add("register__done");
  login.classList.remove("login__done");
});

toLogin.addEventListener("click", () => {
  register.classList.remove("register__done");
  login.classList.add("login__done");
});

formRegister.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    name: registerName.value,
    setor: registerSetor.value,
    email: registerEmail.value,
    password: registerPassword.value,
  };

  fetch('http://localhost:3000/register', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
  .then((res) => {
    if (res.ok) {
      register.classList.remove("register__done");
      login.classList.add("login__done");
      tableCelName.textContent=data.name;
      tableCelSetor.textContent=data.setor;
      return res.json();
    } else {
      throw new Error('Erro ao registrar');
    }
  })
  .catch((error) => {
    console.log('Erro', error);
  });
});

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
    
  const data={
    email: loginEmail.value,
    password: loginPassword.value
  }

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        login.classList.remove("login__done");
        return res.json();
      } else {
        throw new Error('Erro ao realizar login');
      }
    })
    .then((data) => {
      console.log('Login realizado com sucesso', data);
    })
    .catch((error) => {
      console.log('Erro', error);
    });
});

/*
formAnswer.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = {
    email: loginEmail.value, 
    answer: formAnswer.querySelector('.input').value,
  };

    fetch('/submit-answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then((res)=>{
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Erro ao realizar o envio');
      }
    }).catch(error=>{
      console.error('Erro ao enviar resposta:', error);
     
  })})


  function fetchRanking() {
      fetch('/ranking')
      .then((res)=>{
        const ranking = res.json();
  
      ranking.forEach((user) => {
        const row = `
          <tr class="table__body">
            <td class="table__body_cel-name">${user.name}</td>
            <td class="table__body_cel-area">${user.setor}</td>
            <td class="table__body_cel-points">${user.point}</td>
          </tr>
        `;
        document.querySelector('.table').innerHTML += row;
      })
      })
      .catch ((error)=> {
        console.error('Erro ao buscar ranking:', error); 
      })
    }
  
  fetchRanking();*/