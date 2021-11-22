// preloader
window.onload = function(){
    document.querySelector(".preloader").style.display = "none";

}


// burger
const burger = document.querySelector('.nav__burger');
const menuContent = document.querySelector('.nav__menu')

burger.addEventListener('click', () =>{
    burger.classList.toggle('burger__clicked');
    menuContent.classList.toggle('menu__active');

})
