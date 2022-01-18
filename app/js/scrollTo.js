
// Scroll to
//links
const linkHotels = document.querySelector('.nav__menu .hotels-link');
const linktours = document.querySelector('.nav__menu .tours-link');
const linkFooter = document.querySelector('.nav__menu .more-link');


// sections
const hotelSection = document.getElementById('section-one');
const tourSection = document.getElementById('section-two');
const footerSection = document.getElementById('section-three');


function scrollTo(e, section) {

    e.preventDefault();
    section.scrollIntoView({ behavior: 'smooth' });
};



linkHotels.addEventListener('click', function(e){

    scrollTo(e,hotelSection);
});

linktours.addEventListener('click', function(e){

    scrollTo(e,tourSection);
});


linkFooter.addEventListener('click', function(e){

    scrollTo(e,footerSection);
});


