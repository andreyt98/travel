export const Footer = () => {
  const footer = document.createElement("FOOTER");
  footer.classList.add("footer");
  footer.id = "section-three";
  footer.innerHTML = `

    <div class="footer__content">
        <div class="column">
            <h2>Travel</h2>
            <a href="#">Instagram</a>
        </div>

        <div class="column">
            <h2>Contact info</h2>
            <p>travel@email.com</p>
            <p>+123-456-789</p>
        </div>

        <div class="column">
            <h2>Newsletter</h2>
            <p>get news on incredible offers!</p>

            <form class="news-form">
                <input
                type="email"
                name="sub"
                id="sub"
                placeholder="Enter your email"
                class="input"
                />
                <button type="submit" class="btn btn-submit">Subscribe</button>
            </form>

        </div>

    </div>

    <div class="subscribe-banner">
        <p class="xx">X</p>
        <h2>Thank you for subscribing!</h2>

        <h3>We'll make sure you receive the best offers to discover amazing places!</h3>
    </div>

    <p class="creator">Made by Andrey Torrente, 2021.</p>`;

  return footer;
};
