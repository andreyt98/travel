import "./main.scss";
import { search } from "./js/search";
import { createHotelElements } from "./js/hotels";
import { createTourElements } from "./js/tours";
import {
  hotelSection,
  tourSection,
  footerSection,scrollTo
} from "./js/scrollTo";

import { submitEmail } from "./js/submitEmail";

document.addEventListener("DOMContentLoaded", () => {
  createHotelElements();
  createTourElements();
});

window.addEventListener("scroll", function () {
  const $header = document.querySelector(".header");
  $header.classList.toggle("active-scroll", window.scrollY > 0);
});

document.addEventListener("click", (e) => {
  //delegation 

  // prevent default of all buttons 
  if (e.target.matches(".btn")) {
    e.preventDefault();
  }

  //show message of functionality still in process
  if (e.target.matches(".search-form .btn-submit")) {
    search();
  }

  // scrollTo events
  if (e.target.matches(".hotels-link")) {
    scrollTo(e, hotelSection);
  }
  if (e.target.matches(".tours-link")) {
    scrollTo(e, tourSection);
  }
  if (e.target.matches(".more-link")) {
    scrollTo(e, footerSection);
  }
  //----------------------------------

  //hide menu when clicking on a link (on mobile)
  if (e.target.matches(".link")) {
    document.querySelector('.nav').classList.remove("menu__active");
  }

  //show menu
  if (e.target.matches(".nav__burger")) {
    document.querySelector('.nav').classList.toggle("menu__active");
  }

  //close banner
  if (e.target.matches(".xx")) {
    e.target.parentElement.style.left = "101%";
  }

  //show banner and message
  if (e.target.matches(".news-form .btn-submit")) {
    submitEmail();
  }
});
