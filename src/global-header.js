import Logo from "./cat-with-fish.png";

export default function globalHeader() {
    const header = document.createElement("header");
    const nav = document.createElement("nav");
    const content = document.querySelector("#content");
    
    const siteLogo = new Image();
    siteLogo.src = Logo;

    header.style.backgroundColor = "#944547";

    header.appendChild(siteLogo);
    header.appendChild(nav);
    
    content.insertAdjacentElement("beforebegin", header);
};