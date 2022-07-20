export const HelpSearchSection = () => {
    const helpSearch = document.createElement('SECTION')
    helpSearch.classList.add('help-search')
    helpSearch.innerHTML=
    `<div class="help-search__container">
        <div class="text">
            <h2>Don't know where to go?</h2>
            <a href="#" class="btn"> Search for me</a>
        </div>

        <div class="image">
            <img src="../assets/img/search-baner.webp" alt="penguin-picture" />
        </div>

        <div class="gradient-bg"></div>
        
    </div>`

return helpSearch;
}