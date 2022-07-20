import { Nav } from "./Navbar.js";
import {scrollTo} from "../helpers/scrollTo.js";


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
  if (e.target.matches(".hotels-link")) {
    scrollTo(e, document.getElementById("section-one"));
  }
  if (e.target.matches(".tours-link")) {
    scrollTo(e, document.getElementById("section-two"));
  }
  if (e.target.matches(".more-link")) {
    scrollTo(e, document.getElementById("section-three"));
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