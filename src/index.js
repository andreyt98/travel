require("bootstrap-icons/font/bootstrap-icons.scss");
import "./main.scss";

const hotelData = {
  names: ["Jade Mountain, St. Lucia", "Canaves Oia Epitome, Greece", "Bora Bora Resort, French Polynesia", "Astarte Suites Hotel, Greece", "Soneva Fushi, Maldives", "Mahekal Resort, Mexico"],
};

function loadHotelCards() {
  const hotelSection = document.querySelector(".hotels-section");

  const hotelGrid = document.querySelector(".hotel-grid");

  for (let i = 0; i < 6; i++) {
    const hotelCard = document.createElement("DIV");
    hotelCard.classList.add("hotel-card-grid");

    hotelCard.innerHTML = `
        
                <img src="./assets/img/hotels/hotel-${i + 1}.webp" alt="hotel${i + 1}" width="150" height="95" loading="lazy">
            
                <div class="hotel-info">
                    <p>${hotelData.names[i]}</p>
                    <p>$2000</p>
                    <p class="stars">★ ★ ★ ★ ★</p>
                </div>
        
              `;

    hotelGrid.append(hotelCard);
  }
  hotelSection.append(hotelGrid);
}

function loadSliderContent() {
  const sliderContainer = document.querySelector(".slider-container");

  const slider = document.createElement("DIV");
  slider.classList.add("slider");

  for (let i = 1; i <= 10; i++) {
    const $content = document.createElement("DIV");
    $content.classList.add("content");
    $content.innerHTML = `
                <img src= ./assets/img/tours/tour-${i}.webp class="content-img"></img>
                 
                `;
    slider.append($content);
  }
  sliderContainer.append(slider);
}

function loadEvents() {
  //change nav color on scroll
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("active-scroll", window.scrollY > 0);
  });

  //prevent default behaviour of buttons
  document.addEventListener("click", (e) => {
    if (e.target.matches(".btn")) {
      e.preventDefault();
    }

    // scrollTo events
    if (e.target.matches(".nav-links").firstChild || e.target.matches(".logo")) {
      e.preventDefault();

      const sectionOne = document.querySelector(".nav");

      window.scrollTo(0, sectionOne);
    }

    if (e.target.matches(".hotels-link")) {
      e.preventDefault();

      const sectionOne =
        window.innerWidth < 640 ? document.getElementById("section-one").offsetTop - 58 : document.getElementById("section-one").offsetTop - document.querySelector(".nav").offsetHeight - 40;

      window.scrollTo(0, sectionOne);
    }
    if (e.target.matches(".tours-link")) {
      e.preventDefault();
      const sectionTwo =
        window.innerWidth < 640 ? document.getElementById("section-two").offsetTop - 35 : document.getElementById("section-two").offsetTop - document.querySelector(".nav").offsetHeight - 20;

      window.scrollTo(0, sectionTwo);
    }
    if (e.target.matches(".more-link")) {
      e.preventDefault();
      const sectionThree =
        window.innerWidth < 640 ? document.getElementById("section-three").offsetTop - 35 : document.getElementById("section-three").offsetTop - document.querySelector(".nav").offsetHeight;
      window.scrollTo(0, sectionThree);
    }

    //hide menu when clicking on a link (on mobile)
    if (e.target.matches(".link")) {
      document.querySelector(".nav").classList.remove("menu__active");
    }

    //show menu
    if (e.target.matches(".nav__burger")) {
      document.querySelector(".nav").classList.toggle("menu__active");
    }

    //footer
    //close banner
    if (e.target.matches(".xx")) {
      e.target.parentElement.style.left = "101%";
    }

    //show banner and message
    if (e.target.matches(".news-form .btn-submit")) {
      const form = document.querySelector(".footer form");
      const email = document.querySelector(".footer form input[type=email]");
      const banner = document.querySelector(".subscribe-banner");

      // regular expression to validate email
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

      if (email.value == "" || !emailRegex.test(email.value)) {
        form.style.border = "1px solid red";
        setTimeout(function () {
          form.style.border = "none";
        }, 2000);
      } else {
        email.value = "";
        banner.style.left = "0";
      }
    }

    //slider
    const elementToSlide = e.target.parentElement.parentElement.nextElementSibling;
    const screenWidth = screen.width;

    if (e.target.matches(`.left`)) elementToSlide.scrollBy(-(screenWidth / 2), 0);
    if (e.target.matches(`.right`)) elementToSlide.scrollBy(screenWidth / 2, 0);
  });
}

function App() {
  loadHotelCards();
  loadSliderContent();

  loadEvents();
}

document.addEventListener("DOMContentLoaded", App);
