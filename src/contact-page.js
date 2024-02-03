import CompanyLogo from "./cat-with-fish.png";
import ContactIcon from "./contact-mail.png";
import LocationIcon from "./location.png";
import CalendarIcon from "./calendar.png";

export default function contactPage() {
    const content = document.querySelector("#content");
    content.setAttribute("class", "");
    content.classList.add("contact-us");

    const pageTitle = document.createElement("h2");
    pageTitle.textContent = "Contact us";
    pageTitle.classList.add("contact-us");
    content.appendChild(pageTitle);

    // Create & append the map.
    const map = document.createElement("iframe");
    map.setAttribute("id", "map");
    map.setAttribute("src", `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2079.0014615814!2d103.74922310840795!3d1.4034510417448656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da121fbbf119db%3A0x98b0ec77419b8ad1!2s688B%20Choa%20Chu%20Kang%20Dr%2C%20Block%20688B%2C%20Singapore%20682688!5e0!3m2!1sen!2ssg!4v1706810145118!5m2!1sen!2ssg`);
    map.setAttribute("width", "800");
    map.setAttribute("height", "600");
    map.setAttribute("style", "border:0;");
    map.setAttribute("allowfullscreen", "");
    map.setAttribute("loading", "lazy");
    map.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
    content.appendChild(map);

    const contactUsInfo = document.createElement("div");
    contactUsInfo.classList.add("contact-info-container");

    const companyInfoContainer = document.createElement("div");
    const companyLogo = new Image();
    const companyName = document.createElement("p");
    companyLogo.src = CompanyLogo;
    companyLogo.classList.add("logo");
    companyName.textContent = "Your Meowjesty's Seefood Restaurant";
    companyName.classList.add("company-name");
    companyInfoContainer.appendChild(companyLogo);
    companyInfoContainer.appendChild(companyName);

    const contactDetailsContainer = document.createElement("div");
    contactDetailsContainer.classList.add("contact-us-row");
    contactDetailsContainer.classList.add("contact-details");
    const contactDetailsIcon = new Image();
    contactDetailsIcon.src = ContactIcon;
    contactDetailsIcon.classList.add("icon");
    const contactDetails = document.createElement("p");
    contactDetails.innerHTML = `+65 9123 4567<br>seefood@yourmeowjesty.com`;
    contactDetailsContainer.appendChild(contactDetailsIcon);
    contactDetailsContainer.appendChild(contactDetails);
    
    const addressContainer = document.createElement("div");
    addressContainer.classList.add("contact-us-row");
    addressContainer.classList.add("address");
    const addressIcon = new Image();
    addressIcon.src = LocationIcon;
    addressIcon.classList.add("icon");
    const address = document.createElement("p");
    address.innerHTML = `688B Choa Chu Kang Drive<br>#20-324`;
    addressContainer.appendChild(addressIcon);
    addressContainer.appendChild(address);

    const openingHoursContainer = document.createElement("div");
    openingHoursContainer.classList.add("contact-us-row");
    openingHoursContainer.classList.add("opening-hours");
    const calendarIcon = new Image();
    calendarIcon.src = CalendarIcon;
    calendarIcon.classList.add("icon");
    const openingHours = document.createElement("p");
    openingHours.innerHTML = `Open every day from 2am - 8am<br>Closed on public holidays`;
    openingHoursContainer.appendChild(calendarIcon);
    openingHoursContainer.appendChild(openingHours);

    contactUsInfo.appendChild(companyInfoContainer);
    contactUsInfo.appendChild(contactDetailsContainer);
    contactUsInfo.appendChild(addressContainer);
    contactUsInfo.appendChild(openingHoursContainer);
    content.appendChild(contactUsInfo);
};