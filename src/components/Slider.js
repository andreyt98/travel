export const Slider = () => {
  const sliderContainer = document.createElement("DIV");
  sliderContainer.classList.add("slider-container");

  sliderContainer.innerHTML = 
  
  `
  <div class="slider-header">
    <h2> | View our weekly tours!</h2>
    <div class="controls">
    <p class="left"> &#x276E; </p>
    <p class="right"> &#x276F;  </p>
  </div>
   
  ` 
  ;

  const slider = document.createElement("DIV");
  slider.classList.add("slider");

  for (let i = 1; i <= 10; i++) {
    const $content = document.createElement("DIV");
    $content.classList.add("content");
    $content.innerHTML = `
        <img src= ./assets/img/tours/tour-${i}.webp class="content-img"></img>
         
        `;
    slider.append($content);
  }
  sliderContainer.append(slider);

  document.addEventListener("click", (evt) => {
    const elementToSlide = evt.target.parentElement.parentElement.nextElementSibling;
    const screenWidth = screen.width;

    if (evt.target.matches(`.left`)) elementToSlide.scrollBy(-(screenWidth / 2), 0);
    if (evt.target.matches(`.right`)) elementToSlide.scrollBy(screenWidth / 2, 0);
  });


  return sliderContainer;
};
