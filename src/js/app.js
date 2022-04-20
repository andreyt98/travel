// preloader
window.onload = function () {
  document.querySelector(".preloader").style.display = "none";
};
window.addEventListener("scroll", function () {
  const $header = document.querySelector(".header");
  $header.classList.toggle("active-scroll", window.scrollY > 0);
});


//delegation to prevent default behaviour of buttons
document.addEventListener("click", (e) => {
  // prevent default of all buttons and show message of functionality still in process
  if (e.target.classList.contains("btn")) {
    e.preventDefault();
  }

  if (e.target.id == "search-btn") {
    const txt = document.querySelector(".hero .txt");
    const searchInput = document.querySelector(".hero input[type=text]");
    txt.textContent = "oops!, this functionality is not working yet...";
    txt.classList.remove("hidden");

    // clean the search value
    searchInput.value = "";

    // the message will be shown for 3 seconds and the disappear
    setTimeout(function () {
      txt.classList.add("hidden");
    }, 3500);
  }

  if (e.target.classList.contains("link")) {
    e.target.parentElement.parentElement.classList.remove("menu__active");
  }

  //show menu
  if (e.target.classList.contains("nav__burger")) {
    e.target.parentElement.firstElementChild.classList.toggle("menu__active");

    e.target.classList.toggle("burger__clicked");
  }

  //close banner
  if (e.target.classList.contains("xx")) {
    e.target.parentElement.style.left = "101%";
  }

  //show banner and message
  if (e.target.classList.contains("btn-submit")) {
    const email = document.querySelector(".footer input[type=email]");
    const banner = document.querySelector(".subscribe-banner");

    // regular expression to validate email
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (email.value == "") {
      email.style.border = "1px solid red";

      setTimeout(function () {
        email.style.border = "none";
      }, 2000);
    }

    // if email is correct
    if (emailRegex.test(email.value)) {
      email.value = "";
      banner.style.left = "0%";
    }

  }

  if(e.target.classList.contains('heart')){
    e.target.classList.toggle("heart-clicked");
  }
});
