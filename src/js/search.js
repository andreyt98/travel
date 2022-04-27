export const search = () => {
    const txt = document.querySelector(".hero .txt");
    const searchInput = document.getElementById("search");
    txt.textContent = "oops!, this functionality is not working yet...";
   
    //show the 'error message'
    txt.classList.remove("hidden");

    // clean the search value
    searchInput.value = "";

    // 3 seconds later, 'error' message disappear
    setTimeout(function () {
      txt.classList.add("hidden");
    }, 3500);
}