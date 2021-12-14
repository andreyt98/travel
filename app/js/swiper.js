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
