import { Card } from "./Card.js";
import { hotelData } from "../helpers/hotelsData.js";
const {names} = hotelData;

export const HotelSection = () => {
  const hotelSection = document.createElement("SECTION");
  hotelSection.classList.add("hotels-section");
  hotelSection.id = "section-one";
  hotelSection.innerHTML = `
    <h2>
        | Looking for a hotel to stay?
        <a href="#" class="more"> Watch More <span>&#10140;</span></a>
    </h2>

`;

    const hotelGrid = document.createElement("DIV");
    hotelGrid.classList.add("hotel-grid");

    for (let i = 0; i < 6; i++) {

        hotelGrid.append(Card(i+1,names[i]))
    }

    hotelSection.append(hotelGrid);

  return hotelSection;
};
