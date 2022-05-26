export const createTourElements = () => {
  // creation of hotel section content
 
  const tourNames= [
     "Snorkelling in the Maldives",
     "Exploring Peru",
     "Cruise the Antartic Peninsula",
     "Wildlife of Africa",
     "Treasures of Beijing",
     "Central America Discovery",
     "Float down the treasures of Egip",
     "Camp under Findland lights",
     "Landscape tent in Mongolia",
     "Historical tour in Georgia",
  ];
  // const slider = document.querySelector(".slider");
  // const DocumentFrag = document.createDocumentFragment();
  const $sliderContainer = document.createElement("DIV");
  $sliderContainer.classList.add("slider-container");
$sliderContainer.innerHTML = `
<div class="slider-header">
  <h2> | View our weekly tours!</h2>
  <div class="controls">
   <p class="left"> < </p>
   <p class="right"> > </p>
  </div>
  `;

  const $slider = document.createElement("DIV");
      $slider.classList.add("slider");

      for (let i = 1; i <= 10; i++) {
      const $content = document.createElement("DIV");
        $content.classList.add("content");
        $content.innerHTML = `
        <img src= ./assets/img/tours/tour-${i}.webp class="content-img"></img>
          <div class="overlay-bg">
            <p>${tourNames[i]}</p>
            <p>$2000</p>
          </div> 
        `;
        $slider.append($content);
  }
  $sliderContainer.append($slider)
  document.querySelector('#section-two').append($sliderContainer);

  document.addEventListener('click', (evt) =>{
    const elementToSlide = evt.target.parentElement.parentElement.nextElementSibling;
    const screenWidth = screen.width;

    if (evt.target.matches(`.left`)) elementToSlide.scrollBy(-(screenWidth / 2), 0);
    if (evt.target.matches(`.right`)) elementToSlide.scrollBy(screenWidth / 2, 0);
  })
};
