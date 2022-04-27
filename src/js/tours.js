export const createTourElements = () => {
  // creation of hotel section content
  const tourNamesObject = {
    n1: "Snorkelling in the Maldives",
    n2: "Exploring Peru",
    n3: "Cruise the Antartic Peninsula",
    n4: "Wildlife of Africa",
    n5: "Treasures of Beijing",
    n6: "Central America Discovery",
    n7: "Float down the treasures of Egip",
    n8: "Camp under Findland lights",
    n9: "Landscape tent in Mongolia",
    n10: "Historical tour in Georgia",
  };
  const slider = document.querySelector(".slider");
  const DocumentFrag = document.createDocumentFragment();
  for (let i = 1; i <= 10; i++) {
    //creating parent div
    const sliderElement = document.createElement("DIV");

    //adding the class of parent div
    sliderElement.classList.add("slider__element");

    //  creating the gradient bg div that contains the tour info and heart button
    const gradientBg = document.createElement("DIV");

    //creating div that contains the hotel info and booking botton
    gradientBg.classList.add("gradient-bg");

    // creating elements of hotel info

    const tourTitle = document.createElement("P");
    //'tourNames' has the value of every element of 'tourNamesObject'
    const tourNames = Object.values(tourNamesObject);
    // assign to 'hoteltitle' every element of 'hotelNames' with index i-1, since object iteration starts at 0 but we started 'i' at 1.
    tourTitle.textContent = tourNames[i - 1];

    const tourPrice = document.createElement("P");
    tourPrice.textContent = "$2000";

    const hearts = document.createElement("P");
    hearts.classList.add("heart");
    hearts.innerHTML = "&#9829;";

    gradientBg.append(tourTitle, tourPrice, hearts);

    //creating images
    const imgs = document.createElement("IMG");

    //adding the images attributes
    imgs.src = `./assets/img/tours/tour-${i}.webp`;
    imgs.alt = `hotel${i}`;
    imgs.width = "200";
    imgs.height = "200";

    //appending images and info to parent div
    sliderElement.append(gradientBg, imgs);

    DocumentFrag.appendChild(sliderElement);
  }
  slider.appendChild(DocumentFrag);
};
