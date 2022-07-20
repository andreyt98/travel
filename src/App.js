import { Footer } from "./components/Footer.js";
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { Main } from "./components/Main.js";

export const App = () => {
  const app = document.createElement("DIV");
  app.classList.add("app");
  const root = document.querySelector("#root");
  root.append(

      Header(),
      Hero(),
      Main(),
      Footer()
  )

  return app;
};

document.addEventListener("click", (e) => {
 
  if (e.target.matches(".btn")) {
    e.preventDefault();
  }
});