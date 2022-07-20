import { Nav } from "./Navbar.js";

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
