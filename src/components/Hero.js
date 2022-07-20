export const Hero = () => {
  const hero = document.createElement("DIV");
  hero.classList.add("hero");
  hero.innerHTML = `
    <video autoplay loop muted class="hero__video">
        <source
        src="https://assets.mixkit.co/videos/preview/mixkit-white-sand-paradise-beach-2178-large.mp4"
        type="video/mp4"/>
    </video>

    <div class="gradient-bg"></div>

    <div class="hero__header">
        <h1>Your next adventure is here!</h1>

        <form class="search-form">
        <input
            type="text"
            name="search"
            id="search"
            placeholder="search a place"
            class="input"/>

        <button type="submit" class="btn btn-submit">Search</button>

        </form>
    </div>`;

  return hero;
};
