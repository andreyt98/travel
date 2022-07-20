import { HotelSection } from "./HotelSection.js";
import { AboutToursSection } from "./AboutToursSection.js";
import { TourSection } from "./TourSection.js";
import { HelpSearchSection } from "./HelpSearchSection.js";

export const Main = () => {
  const main = document.createElement("MAIN");
  main.classList.add("main");

  main.append(HotelSection(), TourSection(), AboutToursSection(), HelpSearchSection());

  return main;
};
