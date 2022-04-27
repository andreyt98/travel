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
  if (e.target.classList.contains("btn")) {
    e.preventDefault();
  }

  //show message of functionality still in process
  if (e.target.id == "search-btn") {
    search();
  }

  // scrollTo events
  if (e.target.classList.contains("hotels-link")) {
    scrollTo(e, hotelSection);
  }
  if (e.target.classList.contains("tours-link")) {
    scrollTo(e, tourSection);
  }
  if (e.target.classList.contains("more-link")) {
    scrollTo(e, footerSection);
  }
  //----------------------------------

  //hide menu when clicking on a link (on mobile)
  if (e.target.classList.contains("link")) {
    e.target.parentElement.parentElement.classList.remove("menu__active");
  }

  //show menu
  if (e.target.classList.contains("nav__burger")) {
    e.target.parentElement.firstElementChild.classList.toggle("menu__active");

    e.target.classList.toggle("burger__clicked");
  }

  //close banner
  if (e.target.classList.contains("xx")) {
    e.target.parentElement.style.left = "101%";
  }

  //show banner and message
  if (e.target.classList.contains("btn-submit")) {
    submitEmail();
  }

  if (e.target.classList.contains("heart")) {
    e.target.classList.toggle("heart-clicked");
  }
});
