export default function aboutUsPage() {
    const testText = document.createElement("h3");
    const content = document.querySelector("#content");

    testText.textContent = "Hello";
    content.appendChild(testText);
};