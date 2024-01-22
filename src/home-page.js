import CatBackground from "./cat-hero-img.jpeg";

export default function homePage() {
    const content = document.querySelector("#content");

    const heroSection = document.createElement("section");
    const heroImage = new Image();
    const overlay = document.createElement("div");
    const pageTitle = document.createElement("h1");
    const pageSubTitle = document.createElement("h2");
    
    heroSection.classList.add("hero");
    
    heroImage.src = CatBackground;
    heroImage.classList.add("hero-image");

    overlay.classList.add("overlay");

    pageTitle.innerHTML = `<span>Your Meowjesty's</span><br><span>Seef👀d Restaurant</span>`;
    pageSubTitle.textContent = "You can have anything you want! (as long as it's tuna)";

    overlay.appendChild(pageTitle);
    overlay.appendChild(pageSubTitle);

    // Append content to .hero section
    heroSection.appendChild(heroImage);
    heroSection.appendChild(overlay);

    // Append .hero section to #content
    content.appendChild(heroSection);
};