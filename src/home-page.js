export default function homePage() {
    const content = document.querySelector("#content");
    const pageTitle = document.createElement("h1");
    const pageSubTitle = document.createElement("h2");

    pageTitle.textContent = "Your Meowjesty's Seefood Restaurant";
    pageSubTitle.textContent = "You can have anything you want! (as long as it's tuna)";

    content.appendChild(pageTitle);
    content.appendChild(pageSubTitle);
    content.appendChild(catPicture);
};