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



const heart = document.querySelectorAll('.fa-heart');


heart.forEach(heart =>{
    heart.addEventListener('click',()=>{

        heart.classList.toggle('heart-clicked');

    } )
})








// tours swiper script
var tourSwiper = new Swiper(".tours-swiper", {
               
    spaceBetween: 5,
    freeMode: true,
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        180:{
            slidesPerView: 1,

        },
        300:{
            slidesPerView: 2,

        },
        600:{
            slidesPerView: 3,

        },
       
        1200:{
            slidesPerView: 4,
        }

    }
});