const image=document.querySelector(".picture__img");
const popup=document.querySelector(".popup");

const popupGallery=document.querySelector(".popup-gallery");
const popupImg=document.querySelector(".popup-gallery__img");

const container= document.querySelector(".gallery__container");
const imageGallery=document.querySelectorAll(".gallery__img");
const leftArrow=document.querySelector(".gallery__arrow--left");
const rightArrow=document.querySelector(".gallery__arrow--right");

const buttonClose=document.querySelector(".button-close");
const login=document.querySelector(".login");
const loginButton=document.querySelector(".login__button");
const loginEmail=document.querySelector(".login__email");
const loginPassword= document.querySelector(".login__password");

const form=document.querySelector(".answer");
const tableCel=document.querySelectorAll(".table__body_cel");

let index = 0;

image.addEventListener("click", ()=>{
  popup.classList.add("popup__visible");
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
})


form.addEventListener("submit", (e)=>{
  e.preventDefault();
  const answer=document.querySelector(".input").value;
  tableCel.textContent=answer;
});