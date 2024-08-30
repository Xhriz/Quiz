
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

const formRegister=document.querySelector('.register__block');
const registerName=document.querySelector('.register__name');
const registerSetor=document.querySelector('.register__setor');
const registerEmail=document.querySelector('.register__email');
const registerPassword=document.querySelector('.register__password');


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
})

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

