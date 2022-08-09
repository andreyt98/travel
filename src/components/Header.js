import { Nav } from "./Navbar.js";
// import {scrollTo} from "../helpers/scrollTo.js";


export const Header = () => {
  const header = document.createElement("HEADER");
  header.classList.add("header");
  header.innerHTML = `
    <div class="logo-container">
        <a href="#" class="logo"> Travel</a>
    </div>

    <p class="nav__burger">&#8801;</p> `;

    header.append(Nav());

  return header;
};

window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  header.classList.toggle("active-scroll", window.scrollY > 0);
});

document.addEventListener("click", (e) => {

  // scrollTo events
  if (e.target.matches(".nav-links").firstChild || e.target.matches(".logo") ) {
    e.preventDefault();
    
    const sectionOne = document.querySelector(".nav");
    
    window.scrollTo(0, sectionOne);
  }

  if (e.target.matches(".hotels-link")) {
    e.preventDefault();
    
    const sectionOne = window.innerWidth < 640 ? document.getElementById("section-one").offsetTop - 58 : 
    document.getElementById("section-one").offsetTop - document.querySelector(".nav").offsetHeight - 40;
    
    window.scrollTo(0, sectionOne);
  }
  if (e.target.matches(".tours-link")) {
    e.preventDefault();
    const sectionTwo = window.innerWidth < 640 ?document.getElementById("section-two").offsetTop - 35 : 
    document.getElementById("section-two").offsetTop - document.querySelector(".nav").offsetHeight - 20;
    
    window.scrollTo(0, sectionTwo);
  }
  if (e.target.matches(".more-link")) {
    e.preventDefault();
    const sectionThree = window.innerWidth < 640 ? document.getElementById("section-three").offsetTop - 35 :
    document.getElementById("section-three").offsetTop - document.querySelector(".nav").offsetHeight;
    window.scrollTo(0, sectionThree);
  }

  //hide menu when clicking on a link (on mobile)
  if (e.target.matches(".link")) {
    document.querySelector('.nav').classList.remove("menu__active");
  }

  //show menu
  if (e.target.matches(".nav__burger")) {
    document.querySelector('.nav').classList.toggle("menu__active");
  }
})