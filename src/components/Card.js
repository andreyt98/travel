export const Card = (element,name) => {
    const card = document.createElement('DIV')
    card.classList.add('hotel-card-grid')
    card.innerHTML=
`   
        <img src="./assets/img/hotels/hotel-${element}.webp" alt="hotel${element}" width="150" height="95" loading="lazy">
        
        <div class="hotel-info">
            <p>${name}</p>
            <p>$2000</p>
            <p class="stars">★ ★ ★ ★ ★</p>
        </div>
`

    return card;
}