import { location, locals, price } from "../helpers/icons.js";
export const AboutToursSection = () => {
  const aboutSection = document.createElement("SECTION");
  aboutSection.classList.add("about-section");
  aboutSection.innerHTML = `<h2>Why join us?</h2>
<div class="about-section__content">
  <div class="location">
    <p>Around the world locations</p>
    ${location}
  </div>

  <div class="locals">
    <p>Tours run by local specialists</p>
    ${locals}
  </div>

  <div class="price">
    <p>Food and supplements included</p>
    ${price}
  </div>
</div>`;

  return aboutSection;
};
