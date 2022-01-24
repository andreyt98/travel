// preloader
window.onload = function(){
    document.querySelector(".preloader").style.display = "none";


}


// burger
const burger = document.querySelector('.nav__burger');
const menuContent = document.querySelector('.nav__menu');


burger.addEventListener('click', () =>{
    burger.classList.toggle('burger__clicked');
    menuContent.classList.toggle('menu__active');

});



const heart = document.querySelectorAll('.fa-heart');


heart.forEach(function (heart){
    heart.addEventListener('click',function (){

        heart.classList.toggle('heart-clicked');

    } )
})


const menuLinks = document.querySelectorAll('.nav__menu a');



menuLinks.forEach(function (menuLinks){
    menuLinks.addEventListener('click',() => {


        menuContent.classList.remove('menu__active');

    } )
})


// newsletter form submit validation
const btnSubmit = document.querySelector('.footer input[type=submit]');
const email = document.querySelector('.footer input[type=email]');
const form = document.querySelector('.news-form');
const banner = document.querySelector('.subscribe-banner');
const closeBanner = document.querySelector('.subscribe-banner .fa-times');



// regular expression to validate email
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

btnSubmit.addEventListener('click', function(e){

    if(email.value == ''){

     
        email.style.border = '1px solid red';
        
        setTimeout(function (){
            
            email.style.border = 'none';
         
        }, 2000)

    }

    // if email is correct
    if(emailRegex.test(email.value)){
        email.value = '';
        banner.style.left = '0%';
    }



    // hide the mobile menu just in case, for better user experience.
    if(menuContent.classList.contains('menu__active')){
        menuContent.classList.remove('menu__active');
    }
    // ------------------------------------------------

});


closeBanner.addEventListener('click',function (){
    banner.style.left = '101%';
});

// -------------------------------------





// search form message
const search = document.querySelector('.hero .search-form');
const txt = document.querySelector('.hero .txt');
const searchInput = document.querySelector('.hero input[type=text]');

search.addEventListener('submit', function(){
    
    // show the following message
    txt.textContent = "oops!, this functionality is not working yet...";
    txt.classList.remove('hidden');

    // clean the search value
    searchInput.value = '';
    

    // the message will be shown for 3 seconds and the disappear
    setTimeout(function (){
        txt.classList.add('hidden'); 

    }, 3500);


});


// prevent default behavior of anchor elements of the hotel section
const book =  document.querySelectorAll('.hotel-grid a, .help-search a');

book.forEach(function(elemento){

    
    
    elemento.addEventListener('click', function(evt){
       evt.preventDefault();
    });
});

const $header = document.querySelector('.header');

window.addEventListener('scroll', function(){

    $header.classList.toggle('active-scroll', window.scrollY > 0);

});
