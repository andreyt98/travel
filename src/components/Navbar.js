export const Nav = () => {
const nav = document.createElement('NAV')
nav.classList.add('nav')
 nav.innerHTML=
`
    <ul class="nav-list">
        <li><a href="#" class="link">Home</a></li>
        <li><a href="#" class="link hotels-link">Home</a></li>
        <li><a href="#" class="link tours-link">Home</a></li>
        <li><a href="#" class="link more-link">Home</a></li>
    </ul>
`

return nav;
}