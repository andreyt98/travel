export const createHotelElements = () => {
  // creation of hotel section content
  const hotelNamesObject1 = {
    n1: "Jade Mountain, St. Lucia",
    n2: "Canaves Oia Epitome, Greece",
    n3: "St. Regis Bora Bora Resort, French Polynesia",
    n4: "Astarte Suites Hotel, Greece",
    n5: "Soneva Fushi, Maldives",
    n6: "Mahekal Beach Resort, Playa del Carmen, Mexico",
  };
  const hotelGridContainer = document.querySelector(".hotel-grid");
  const DocumentFrag = document.createDocumentFragment();
  for (let i = 1; i <= 6; i++) {
    //creating parent div
    const hotelCard = document.createElement("DIV");
    //adding the class of parent div
    hotelCard.classList.add("hotel-card-grid");

    //creating images
    const imgs = document.createElement("IMG");

    //adding the images attributes
    imgs.src = `./assets/img/hotels/hotel-${i}.webp`;
    imgs.alt = `hotel${i}`;
    imgs.width = "150";
    imgs.height = "95";
    imgs.loading = "lazy";

    //creating div that contains the hotel info and booking botton
    const hotelInfo = document.createElement("DIV");
    hotelInfo.classList.add("hotel-info");

    // creating elements of hotel info

    const hoteltitle = document.createElement("P");
    //'hotelNames' has the value of every element of 'hotelNamesObject'
    const hotelNames = Object.values(hotelNamesObject1);
    // assign to 'hoteltitle' every element of 'hotelNames' with index i-1, since object iteration starts at 0 but we started 'i' at 1.
    hoteltitle.textContent = hotelNames[i - 1];

    const hotelPrice = document.createElement("P");
    hotelPrice.textContent = "$2000";

    const hotelStars = document.createElement("P");
    hotelStars.classList.add("stars");
    hotelStars.innerHTML = "&#9733; &#9733; &#9733; &#9733; &#9733;";

    const bookBtn = document.createElement("A");
    bookBtn.classList.add("btn");
    bookBtn.href = "#";
    bookBtn.textContent = "Book";
    // apending elements of hotel info to it
    hotelInfo.append(hoteltitle, hotelPrice, hotelStars, bookBtn);

    //appending images and infoto parent div
    hotelCard.append(imgs, hotelInfo);

    //append the hotel card to its grid parent container 'hotelGridContainer'

    DocumentFrag.appendChild(hotelCard);
  }
  hotelGridContainer.appendChild(DocumentFrag);
};
