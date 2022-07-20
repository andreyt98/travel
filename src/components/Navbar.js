export const Nav = () => {
const nav = document.createElement('NAV')
nav.classList.add('nav')
 nav.innerHTML=
`
    <ul class="nav-list">
        <li><a href="#" class="link">Home</a></li>
        <li><a href="#" class="link hotels-link">Hotels</a></li>
        <li><a href="#" class="link tours-link">Tours</a></li>
        <li><a href="#" class="link more-link">More</a></li>
    </ul>
`

return nav;
}