import Logo from "./cat-with-fish.png";
import _ from "lodash";
import homePage from "./home-page.js";
import aboutUsPage from "./about-us-page.js";
import contactPage from "./contact-page.js";

export default function initPage() {
    const header = document.createElement("header");
    const content = document.createElement("section");
    const siteLogo = new Image();

    // Create & append header
    document.body.appendChild(header);
    
    // Create & append logo
    siteLogo.src = Logo;
    siteLogo.classList.add("logo");
    header.appendChild(siteLogo);

    // Create & append nav
    const navBar = document.createElement("nav");
    const navList = document.createElement("ul");
    const navLinks = ["Home", "About us", "Contact us"];

    navBar.classList.add("main-nav");
    
    navLinks.forEach(navLink => {
        const link = document.createElement("li");
        link.textContent = navLink;
        link.classList.add("nav-link");
        link.id = `${_.kebabCase(navLink)}-page`;
        navList.append(link);
    });

    navBar.appendChild(navList);
    header.appendChild(navBar);

    // Append event listeners to navbar links
    const navPages = document.querySelectorAll(".nav-link");
    
    navPages.forEach(navPage => {
        navPage.addEventListener("click", (event) => {
            content.innerHTML = ``;

            console.log(event.target);

            switch (event.target.id) {
                case "home-page":
                    homePage();
                    break;
                case "about-us-page":
                    aboutUsPage();
                    break;
                case "contact-us-page":
                    contactPage();
                    break;
            };
        });
    });

    // Create & append content section
    content.setAttribute("id", "content");
    document.body.appendChild(content);
};