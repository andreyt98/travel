import { Slider } from "./Slider.js";

export const TourSection = () => {
  const tourSection = document.createElement("SECTION");
  tourSection.classList.add("tours-section");
  tourSection.id = 'section-two'

  tourSection.append(Slider());

  return tourSection;
};
