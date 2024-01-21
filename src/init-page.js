import Logo from "./cat-with-fish.png";

export default function initPage() {
    // Create & append header
    const header = document.createElement("header");
    document.body.appendChild(header);
    
    // Create & append logo
    const siteLogo = new Image();
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
        navList.append(link);
    });

    navBar.appendChild(navList);
    header.appendChild(navBar);

    // Create & append content section
    const content = document.createElement("section");
    content.setAttribute("id", "content");
    document.body.appendChild(content);
};